package blocks

import (
	"block-tracker/datasources/mysql/blocks_db"
	"block-tracker/utils/rest_errors"
	"fmt"
)

const (
	querySaveBlock = "INSERT INTO blocks (number, miner, orphan) VALUES (?, ?, ?)"
	queryGetBlock = "SELECT number, miner, orphan FROM blocks WHERE number = ?"
	queryFindByMinerAndStatus = "SELECT number FROM blocks WHERE miner = ? AND orphan = ?"
)

func (block *Block) Save() rest_errors.RestErr {
	stmt, err := blocks_db.Client.Prepare(querySaveBlock)
	if err != nil {
		return rest_errors.NewInternalServerError("error when trying to prepare save block statement", err)
	}
	defer stmt.Close()
	
	_, err = stmt.Exec(block.Number, block.Miner, block.Orphan)
	if err != nil {
		return rest_errors.NewInternalServerError("error when trying to save block", err)
	}

	return nil
}

func (block *Block) Get() rest_errors.RestErr {
	stmt, err := blocks_db.Client.Prepare(queryGetBlock)
	if err != nil {
		return rest_errors.NewInternalServerError("error when trying to prepare get block statement", err)
	}
	defer stmt.Close()
	
	result := stmt.QueryRow(block.Number)
	if err != nil {
		return rest_errors.NewInternalServerError("error when trying to get block", err)
	}
	
	if err := result.Scan(&block.Number, &block.Miner, &block.Orphan); err != nil {
		return rest_errors.NewInternalServerError("error when trying to scan block row", err)
	}
	
	return nil
}

func (block *Block) FindByMinerAndStatus(miner string, orphan bool) ([]Block, rest_errors.RestErr) {
	miner = trAstr(miner)
	
	stmt, err := blocks_db.Client.Prepare(queryFindByMinerAndStatus)
	if err != nil {
		return nil, rest_errors.NewInternalServerError("error when trying to prepare get block statement", err)
	}
	defer stmt.Close()

	rows, err := stmt.Query(miner, orphan)
	if err != nil {
		return nil, rest_errors.NewInternalServerError("error when trying to get blocks", err)
	}
	defer rows.Close()


	results := make([]Block, 0)
	for rows.Next() {
		var block Block
		block.Miner = miner
		block.Orphan = orphan
		if err := rows.Scan(&block.Number); err != nil {
			return nil, rest_errors.NewInternalServerError("error when trying to scan block row", err)
		}
		results = append(results, block)
	}

	if len(results) == 0 {
		errMsg := "orphan"
		if !orphan {
			errMsg = "no-orphan"
		}
		return nil, rest_errors.NewNotFoundError(fmt.Sprintf("no %s blocks found for miner %s", errMsg, miner))
	}

	return results, nil
}