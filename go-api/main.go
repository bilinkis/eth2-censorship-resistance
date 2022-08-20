package main

import (
	"block-tracker/app"
	"block-tracker/cron"
)

func main() {
	go cron.ExecutePriceCronJob()
	app.StartApp()
}