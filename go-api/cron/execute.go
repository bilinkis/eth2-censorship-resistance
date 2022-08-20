package cron

import (
	"github.com/jasonlvhit/gocron"
)

func ExecutePriceCronJob() {
    gocron.Every(12).Seconds().Do(checkBlock)
    <- gocron.Start()
}