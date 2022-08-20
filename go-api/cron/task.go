package cron

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math/big"

	rest "block-tracker/clients"
	"block-tracker/domain/blocks"
	"block-tracker/utils/rest_errors"
)

var LAST_BLOCK big.Int

const PROJECT_ID = "2DcxB73Jic8Q5MqHgpag5uVo1Ls"
const SECRET_ID = "2cfac5a6a2434c4064163cbc18d1af4b"
const DOMAIN_URL = "@eth2-beacon-prater.infura.io/eth/v1/beacon/headers"

func init() {
	lb, err := checkBlock("")
	if err != nil {
		fmt.Println(err)
	}

	if n, ok := new(big.Int).SetString(lb.Number, 10); !ok {
		fmt.Println(err)
	} else {
		LAST_BLOCK = *n
	}

	if lb.Orphan {
		err = lb.Save()
		if err != nil {
			fmt.Println(err)
		}
	}
}

func checkBlock(number string) (*blocks.Block, rest_errors.RestErr) {
	resp, err := rest.Get(createURL(number), nil)
	if err != nil {
		return nil, rest_errors.NewInternalServerError("Error while querying Infura", err)
	} else {
		LAST_BLOCK = *LAST_BLOCK.Add(&LAST_BLOCK, big.NewInt(1))
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, rest_errors.NewInternalServerError("Error while reading response body", err)
	}

	var responseObject blocks.InfuraHeaderResponse
	json.Unmarshal(body, &responseObject)

	c := responseObject.Data.Canonical
	m := responseObject.Data.Header.Message.ProposerIndex

	block := blocks.Block{Number: number, Miner: m, Orphan: !c}

	if block.Orphan {
		err = block.Save()
		if err != nil {
			fmt.Println(err)
		}
	}

	return &block, nil
}

func createURL(number string) string {
	if number == "" {
		return fmt.Sprintf("https://%s:%s%s", PROJECT_ID, number, DOMAIN_URL)
	}
	return fmt.Sprintf("https://%s:%s%s/%s", PROJECT_ID, number, DOMAIN_URL, number)
}

func blockTask() {
	lb, err := checkBlock(LAST_BLOCK.String())
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("New block:", lb, "\nOrphan:", lb.Orphan)
}
