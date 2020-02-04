const { SyncBailHook, SyncHook } = require('tapable')

class Car {
  constructor() {
    this.hooks = {
      accelarate: new SyncBailHook(['newSpeed']),
      brake: new SyncHook(),
    }
  }
}

const myCar = new Car()

myCar.hooks.accelarate.tap('eventname1', (speed) => {
  console.log('speed cb 1:', speed)
  return 1 // 有返回值 后面的就不执行了
})

myCar.hooks.accelarate.tap('eventname2', (speed) => {
  console.log('speed cb 2:', speed)
})

myCar.hooks.accelarate.call(50)
