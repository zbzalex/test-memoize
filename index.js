function eqCheck(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function memoize(fn) {
  let oldArgs = []
    return function(...args) {
      if (!eqCheck(oldArgs, args)) {
          fn.call(null, args)
      }
      
      oldArgs = args
    }
}

let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
    return a + b;
  })
 
 memoizedFn(2, 3)
 memoizedFn(2, 3)
 memoizedFn(3, 4)
 memoizedFn(3, 4)
 
 console.log(callCount)
