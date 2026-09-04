function anagrams(stringA, stringB) {
    const cleanA=stringA.toLowerCase().replace(/[^a-z0-9]/g,"");
    const cleanB=stringB.toLowerCase().replace(/[^a-z0-9]/g,"");
    
    if(cleanA.length!==cleanB.length){
        return false;
    }
    const counter={};
    for(let char of cleanA){
        if(counter[char]){
            counter[char]++;
        }else{
            counter[char]=1;
        }
    }
    for(let char of cleanB){
        if(!counter[char]){
            return false;
        }
        counter[char]--;
    }
    return true;
   
}

module.exports = anagrams;