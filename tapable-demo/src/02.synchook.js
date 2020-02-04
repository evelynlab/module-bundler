const { SyncHook } = require('tapable')

// const hook = new SyncHook(['arg11', 'arg12'])

// hook.tap('eventname', (arg1, arg2, arg3) => {
//   console.log(arg1, arg2, arg3)
// })

// hook.call(1, 2, 3)

// 和event emit 不一样，call不传事件名.  eventname是个必传参数, eventname有什么用呢？标识不同的监听器，因为一个钩子可以有多个监听器

// new SyncHook时 接受一个可选参数，是个数组，里面是字符串形式的参数名

class Car {
  constructor() {
    this.hooks = {
      accelarate: new SyncHook(['newSpeed']),
      brake: new SyncHook(),
    }
  }
}

const myCar = new Car()

myCar.hooks.accelarate.tap('eventname1', (speed) => {
  console.log('speed cb 1:', speed)
})

myCar.hooks.accelarate.tap('eventname2', (speed) => {
  console.log('speed cb 2:', speed)
})

myCar.hooks.accelarate.call(50) // createCall时，已经根据之前tap，生成了call时的代码。 call执行时，会依次执行callback代码
