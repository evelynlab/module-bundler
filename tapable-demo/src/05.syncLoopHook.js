const { SyncLoopHook, SyncHook } = require('tapable')

class Car {
  constructor() {
    this.hooks = {
      accelarate: new SyncLoopHook(['newSpeed']),
      brake: new SyncHook(),
    }
  }
}

const myCar = new Car()

let count = 0
myCar.hooks.accelarate.tap('eventname1', (speed) => {
  if (count < 9) {
    count ++
    console.log('count', count)
    return true
  }
  return // will stop until return undefined
})

myCar.hooks.accelarate.call(50)
