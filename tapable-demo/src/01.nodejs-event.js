const event = require('events')

class EventEmitter extends event {
}

// const events = new event()
const events = new EventEmitter()

// 1.on emit basic demo
// events.on('login', (param) => {
//   console.log('triggered', param)
//   console.log(this === events) // false
// })

// // events.on('login', function(param){
// //   console.log('triggered', param)
// //   console.log(this === events) // true
// // })
// events.emit('login', 'success')

// // 2.once demo
// events.once('logout', function() {
//   console.log('logout triggered')
// })
// events.emit('logout')
// events.emit('logout')

// 3.async demo
events.on('testAsync', function(){
  setImmediate(() => {
    console.log('testAsync triggered 1')
  })
})

events.on('testAsync', function(){
  process.nextTick(() => {
    console.log('testAsync triggered 2')
  })
})

events.emit('testAsync')

// 1.如果给一个事件订阅了多个监听器，那么会按注册顺序执行
// 2.on emit once提供三个方法
// 3.异步怎么办，可以在监听器函数里使用process.nextTick 或setImmediate
// 一个事件注册了多个监听器，如何控制这些监听器的执行顺序？如何在监听器之间传递述职？如何中止某个监听器的执行？监听器有异步操作，想等异步操作都执行完了如何处理？
// 做不到。这时我们就来看看tapable
