const { Scheduler } = require('task-scheduling')

const scheduler = new Scheduler()
scheduler.configure.setConfig({})

module.exports.Scheduler = scheduler
