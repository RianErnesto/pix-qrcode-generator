import { CronJob } from "cron"

export const scheduleQRCodeGeneration = (cron, callback) => {
    const job = new CronJob(cron, () => {
        callback()
    })
    job.start()
}