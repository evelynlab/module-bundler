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

// 1. tap
// myCar.hooks.accelarate.tap('eventname1', (speed) => {
//   console.log('speed cb 1:', speed)
// })

// myCar.hooks.accelarate.tap('eventname2', (speed) => {
//   console.log('speed cb 2:', speed)
// })

// myCar.hooks.accelarate.callAsync(50, (err) => {
//   console.log('end') // 
// })

// 2. tapAsync
// myCar.hooks.accelarate.tapAsync('eventname1', (speed, cb) => {
//   setTimeout(() => {
//     console.log(1, speed);
//     cb();
// }, 1000);
// })

// myCar.hooks.accelarate.tapAsync('eventname2', (speed, cb) => {
//   setTimeout(() => {
//     console.log(2, speed);
//     cb();
// }, 2000);
// })

// myCar.hooks.accelarate.callAsync(50, () => {
//   console.log('end') // 
// })

// 3.tapPromise
myCar.hooks.accelarate.tapPromise('eventname1', (speed, cb) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log(1, speed);
        resolve();
    }, 1000);
  });
})

myCar.hooks.accelarate.tapPromise('eventname2', (speed, cb) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log(2, speed);
        resolve();
    }, 2000);
  });
})

myCar.hooks.accelarate.promise(50).then(() => {
  console.log('end')
})

