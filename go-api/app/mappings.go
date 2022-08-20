package app

import (
	// "github.com/gin-gonic/gin"
	// "net/http"

	"block-tracker/controllers/status"
)

func mapUrls() {
	// notImplemented := func(c *gin.Context) { c.String(http.StatusOK, "Not implemented yet.") }
	// _ = notImplemented
	
	router.GET("/", status.Status)
}