const { SyncWaterfallHook, SyncHook } = require('tapable')

class Car {
  constructor() {
    this.hooks = {
      accelarate: new SyncWaterfallHook(['newSpeed']),
      brake: new SyncHook(),
    }
  }
}

const myCar = new Car()

myCar.hooks.accelarate.tap('eventname1', (speed) => {
  console.log('speed cb 1:', speed)
  return 1
})

myCar.hooks.accelarate.tap('eventname2', (speed) => { // 如果有上一个传递过来的值则取出，否则取出正常的参数
  console.log('speed cb 2:', speed)
  return 3
})

myCar.hooks.accelarate.call(50)
