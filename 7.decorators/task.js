function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper (...args) {
    const hash = args.join(',')
    let idx = cache.findIndex((item)=> item.hash === hash)
    if(idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } else {
      let result = func(...args);
      cache.push({hash: args.join(','), value: result})
      if(cache.length > 5) {
        cache.splice(0,1);
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
    let checkFunction = false;
    return function() {
      if (checkFunction == false) {
        func();
        checkFunction = true;
        setTimeout(() => (checkFunction = false), ms);
      }      
  };
};

function debounceDecorator2(func) {  
  let checkFunction = false;
    function wrapper() {
      let index = index + 1;
      if (checkFunction == false) {
        func();
        checkFunction = true;
        wrapper.count.push(index)
        setTimeout(() => (checkFunction = false), ms);
      }      
  };
  wrapper.count = [];
  return wrapper
}
