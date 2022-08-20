package app

import (
	"github.com/gin-gonic/gin"
	"os"
)

var (
	router = gin.Default()
)

func StartApp() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	mapUrls()
	router.Run(":"+ port)
}
