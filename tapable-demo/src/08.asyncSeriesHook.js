const { AsyncSeriesHook, SyncHook } = require('tapable')

class Car {
  constructor() {
    this.hooks = {
      accelarate: new AsyncSeriesHook(['newSpeed']),
      brake: new SyncHook(),
    }
  }
}

const myCar = new Car()

myCar.hooks.accelarate.tap('eventname1', (speed) => {
  (async function() {
    console.log('speed cb 1:', speed)
    await Promise.resolve('')
  }())
})

myCar.hooks.accelarate.tap('eventname2', (speed) => {
  console.log('speed cb 2:', speed)
})

myCar.hooks.accelarate.callAsync(50, (err) => {
  console.log('end') // ?
})

