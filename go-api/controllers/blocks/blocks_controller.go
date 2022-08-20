package block_controller

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"

	"block-tracker/services"
)

func GetMinerReport(c *gin.Context) {
	miner := c.Param("miner")
	if miner == "" {
		c.JSON(400, "Empty request.")
	}

	var orphan bool
	oQ := c.Query("orphan")

	if oQ == "true" {
		orphan = true
	} else if oQ == "false" {
		orphan = false
	} else {
		c.JSON(400, "Invalid orphan query.")
	}

	blocks, getErr := services.BlocksService.GetMinerReport(miner, orphan)
	if getErr != nil {
		c.JSON(getErr.Status(), getErr)
		return
	}

	mBlocks := make([]interface{}, len(blocks))
	for i, block := range blocks {
		b, _ := json.Marshal(block)
		mBlocks[i] = b
	}

	c.JSON(http.StatusOK, mBlocks)
}

func GetBlockReport(c *gin.Context) {
	block := c.Param("block")
	if block == "" {
		c.JSON(400, "Empty request.")
	}

	blockR, getErr := services.BlocksService.GetBlockReport(block)
	if getErr != nil {
		c.JSON(getErr.Status(), getErr)
		return
	}

	b, _ := json.Marshal(blockR)

	c.JSON(http.StatusOK, b)
}