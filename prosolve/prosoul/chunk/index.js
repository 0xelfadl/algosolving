function chunk(array, size) {
    let subarr=[];
    const arrout=[];
    let k=0;
    for(let i=0;i<array.length;i++){
        if(k < size){
            subarr.push(array[i]);
            k++;
        }
        if (k === size) {
            arrout.push(subarr);
            subarr = [];
            k = 0;
        }
    }
     if (subarr.length > 0) {
        arrout.push(subarr);
    }
    
    return arrout;
    
}

module.exports = chunk;