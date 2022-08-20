package app

import (
	// "github.com/gin-gonic/gin"
	// "net/http"

	"block-tracker/controllers/status"
	blocks "block-tracker/controllers/blocks"
)

func mapUrls() {
	// notImplemented := func(c *gin.Context) { c.String(http.StatusOK, "Not implemented yet.") }
	// _ = notImplemented
	
	router.GET("/", status.Status)
	router.GET("/report/block/:block", blocks.GetBlockReport)
	router.GET("/report/miner/:miner", blocks.GetMinerReport)
}