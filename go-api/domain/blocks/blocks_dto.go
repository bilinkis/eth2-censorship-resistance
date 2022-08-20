package blocks

import (
	"block-tracker/utils/rest_errors"
	"strings"
)

type Block struct {
	Number string `json:"number"`
	Miner string `json:"miner"`
	Orphan bool `json:"orphan"`
}

func (block *Block) Validate() rest_errors.RestErr {
	if block.Number == "" || block.Miner == "" {
		return rest_errors.NewBadRequestError("invalid block data")
	}

	block.Number = TrStr(block.Number)
	block.Miner = TrStr(block.Miner)

	return nil
}

func TrStr(str string) string {
	return strings.ToLower(strings.TrimSpace(str))
}

type InfuraHeaderResponse struct {
	ExcOpt bool `json:"-"`
	Data IHRData `json:"data"`
}

type IHRData struct {
	Root string `json:"-"`
	Canonical bool `json:"canonical"`
	Header IHRDHeader `json:"header"`
	Signature string `json:"-"`
}

type IHRDHeader struct {
	Message IHRDHMessage `json:"message"`
}

type IHRDHMessage struct {
	Slot string `json:"slot"`
	ProposerIndex string `json:"proposer_index"`
	ParentRoot string `json:"-"`
	StateRoot string `json:"-"`
	BodyRoot string `json:"-"`
}