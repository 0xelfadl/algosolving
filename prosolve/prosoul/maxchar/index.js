function maxChar(str) {
    const count ={};
    for(let i=0;i<str.length;i++){
     const char = str[i];
     if(count[char]){
         count[char]++;
     } else{
         count[char]=1;
     }
    }
    let maxcount=0;
    let maxchar='';
    for(const char in count){
        if(count[char]>maxcount){
            maxcount=count[char];
            maxchar = char;
        }
    }
    return maxchar;
}

module.exports = maxChar;