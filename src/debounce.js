/**
 * 防抖
 * @method debounce
 * @param { Function, number, boolean} 需要防抖处理的方法、时间间隔(毫秒数)、是否立即执行一次
 * @return { Function } 
 */
export default function debounce (fn, ms, immediate) {
  let timer
  return function () {
    let context = this
    let args = arguments

    if (timer) clearTimeout(timer)
    if (immediate) {
      let callNow = !timer
      timer = setTimeout(function () {
        timer = null
      }, ms)
      if (callNow) fn.apply(context, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, ms)
    }
  }
}
