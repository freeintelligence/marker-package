const { BaseCommand, Flag } = require('task-scheduling')
const { Scheduler } = require('./helpers/scheduler')

class NoNameCommand extends BaseCommand {

  constructor() {
    super()

    this.flags = [
      new Flag('help', { alias: 'h', default: false, type: 'boolean' })
    ]
  }

  async run({ flags }) {
    if(flags.help.value) {
      console.log(Scheduler.help())
    }
    else {
      console.log('\n  --help\n')
    }
  }

}

module.exports.NoNameCommand = NoNameCommand
