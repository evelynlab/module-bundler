const { AsyncParallelHook, SyncHook } = require('tapable')

class Car {
  constructor() {
    this.hooks = {
      accelarate: new AsyncParallelHook(['newSpeed']),
      brake: new SyncHook(),
    }
  }
}

const myCar = new Car()

myCar.hooks.accelarate.tapAsync('eventname1', (speed) => {
  console.log('speed cb 1:', speed)
  // process.nextTick
})

myCar.hooks.accelarate.tapAsync('eventname2', (speed) => { // 如果有上一个传递过来的值则取出，否则取出正常的参数
  // process.nextTick(() => {
  //   console.log('speed cb 2:', speed)
  // })
  setTimeout(() => {
    console.log('speed cb 2:', speed)
  }, 3000)
})

myCar.hooks.accelarate.callAsync(50, (err) => {
  console.log('end') // ?
})
