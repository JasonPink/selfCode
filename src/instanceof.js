/*
 * @Descripttion:
 * @Author: JasonPink
 * @Date: 2020-06-09 14:44:15
 * @LastEditors: JasonPink
 * @LastEditTime: 2020-06-09 14:55:47
 */
/*
 * 模拟实现instanceof的原理
 */

export default function selfInstanceof (left, right) {
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === null) return false
    if (proto === right.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(left)
  }
}

/*
 * 模拟实现new的原理
 */
export function selfNew (func, ...args) {
  let obj = Object.create(func.prototype)
  let result = func.apply(obj, args)
  return (typeof result === 'object' || typeof result === 'function') &&
    result !== null
    ? result
    : obj
}
