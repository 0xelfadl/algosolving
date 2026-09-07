function vowels(str) {
    const vowls=["a","e","i","o","u"];
    const Arr=str.toLowerCase().split("");
    let k=0;
    for(let char of Arr){
      const found = vowls.includes(char);
       if(found){
           k++;
       }
    }
    
    return k;
    
}

module.exports = vowels;