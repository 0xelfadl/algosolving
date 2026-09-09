function fib(n) {
  const Error ="Input must be a positive number";
    if(n < 0){
        return Error;
    }
    if(n<2){
        return n;
    }
    let previous=0;
    let now=1;
    
    for(let i=2;i<=n;i++){
        const next = previous + now;
        previous=now;
        now=next;
    }
    return now;
    
}

module.exports = fib;