package services

import (
	"block-tracker/domain/blocks"
	"block-tracker/utils/rest_errors"
)

var BlocksService blockserviceInterface = &blocksService{}

type blocksService struct{}

type blockserviceInterface interface {
	GetMinerReport(miner string, orphan bool) ([]blocks.Block, rest_errors.RestErr)
	GetBlockReport(number string) (*blocks.Block, rest_errors.RestErr)
}

func (b *blocksService) GetMinerReport(miner string, orphan bool) ([]blocks.Block, rest_errors.RestErr) {
	dao := &blocks.Block{}

	results, err := dao.FindByMinerAndStatus(miner, orphan)
	if err != nil {
		return nil, err
	}
	
	return results, nil
}


func (b *blocksService) GetBlockReport(number string) (*blocks.Block, rest_errors.RestErr) {
	number = blocks.TrStr(number)
	dao := &blocks.Block{Number: number}

	if err := dao.Get(); err != nil {
		return nil, err

	}

	return dao, nil
}