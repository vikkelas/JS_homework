function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper (...args) {
    const hash = args.join(',')
    let idx = cache.findIndex((item)=> item.hash === hash)
    if(idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    }
      let result = func(...args);
      cache.push({hash: args.join(','), value: result})
      if(cache.length > 5) {
        cache.splice(0,1);
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
    let checkFunction = false;
    return function(...args) {
      if (checkFunction == false) {
        func(...args);
        checkFunction = true;
        setTimeout(() => {checkFunction = false, func(...args)}, ms);
      }      
  };
};

function debounceDecorator2(func) {  
  let checkFunction = false;
    function wrapper(...args) {
      wrapper.count++;
       if (checkFunction == false) {
        func(...args);
        checkFunction = true;
        wrapper.count.push(i+=1)
        setTimeout(() => {checkFunction = false,func(...args)}, ms);
      }      
  };
  wrapper.count = 0;
  return wrapper
}
