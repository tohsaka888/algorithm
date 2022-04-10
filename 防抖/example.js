

/**
 * Description
 * @param {Function} fn
 * @returns {Function}
 */
function debounceJS(fn, flag, timeout) {
  // 不能返回箭头函数,箭头函数没有this!!!
  let timer = -1;
  return function (...args) {
    clearTimeout(timer)
    if (flag && timer === -1) {
      fn.apply(this, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, timeout)
    }
  }
}

const a = {
  a: 1
}

a.fn = debounce(function () {
  console.log(this.a)
  this.a++
}, false, 1000) 

let i = 0
setInterval(() => {
  i++
  console.log('i:', i)
  a.fn()
}, 500)