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

	block.Number = trAstr(block.Number)
	block.Miner = trAstr(block.Miner)

	return nil
}

func trAstr(str string) string {
	return strings.ToLower(strings.TrimSpace(str))
}