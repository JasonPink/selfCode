/**
 * 时间戳版节流
 * @method throttle
 * @param { Function, number} 需要节流处理的方法、时间间隔(毫秒数)
 * @return { Function }
 */
export function throttle1 (fn, wait) {
  let previous = 0
  return function () {
    let context = this
    let args = arguments
    let now = +new Date()

    if (now - previous > wait) {
      fn.apply(context, args)
      previous = now
    }
  }
}

/**
 * 定时器版节流
 * @method throttle
 * @param { Function, number} 需要节流处理的方法、时间间隔(毫秒数)
 * @return { Function }
 */
export function throttle2 (fn, wait) {
  let timer = null
  return function () {
    let context = this
    let args = arguments

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      }, wait)
    }
  }
}

/**
 * 双剑合璧版节流
 * @method throttle
 * @param { Function, number} 需要节流处理的方法、时间间隔(毫秒数)
 * @return { Function }
 */
export default function throttle (fn, wait) {
  let previous = 0
  let result, timer

  return function () {
    let context = this
    let args = arguments
    let now = +new Date()

    let remaining = wait - (now - previous)
    // 如果没有剩余的时间了或者你改了系统时间
    if (remaining < 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      fn.apply(context, args)
    } else if (!timer) {
      timer = setTimeout(() => {
        previous = +new Date()
        timer = null
        fn.apply(context, args)
      }, remaining)
    }
  }
}
