package cron

import (
	"github.com/jasonlvhit/gocron"
)

func ExecuteCronJob() {
    gocron.Every(12).Seconds().Do(blockTask)
    <- gocron.Start()
}