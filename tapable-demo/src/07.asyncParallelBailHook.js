const { AsyncParallelBailHook, SyncHook } = require('tapable')

class Car {
  constructor() {
    this.hooks = {
      accelarate: new AsyncParallelBailHook(['newSpeed']),
      brake: new SyncHook(),
    }
  }
}

const myCar = new Car()

myCar.hooks.accelarate.tapAsync('eventname1', (speed) => {
  console.log('speed cb 1:', speed)
  return 'stop'
})

myCar.hooks.accelarate.tap('eventname2', (speed) => { // 如果有上一个传递过来的值则取出，否则取出正常的参数
  setTimeout(() => {
    console.log('speed cb 2:', speed)
  }, 2000)
})

myCar.hooks.accelarate.callAsync(50, (err) => {
  console.log('end') // ? 只有在tap时才有效
})

