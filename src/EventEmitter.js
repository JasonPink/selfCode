/*
 * @Descripttion: 一个简单的发布订阅模式
 * @Author: JasonPink
 * @Date: 2020-06-09 10:36:45
 * @LastEditors: JasonPink
 * @LastEditTime: 2020-06-09 11:13:35
 */

export default class EventEmiitter {
  constructor () {
    this._events = {}
  }

  on (event, fn) {
    ;(this._events[event] || this._events[event] = []).push(fn)
  }

  emit (event, ...args) {
    this._events[event] &&
      this._events[event].forEach(cb => {
        cb(args)
      })
  }

  off (event, fn) {
    let cbs = this._events[event]
    let i = cbs.length
    let cb
    if (cbs) {
      while (i--) {
        cb = cbs[i]
        if (cb === fn) {
          cbs.splice(i, 1)
          break
        }
      }
    }
  }

  once (event, onceCb) {
    const cb = (...args) => {
      onceCb(args)
      this.off(event, onceCb)
    }
    this.on(event, cb)
  }
}
