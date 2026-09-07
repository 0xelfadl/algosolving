function pyramid(n) {
    for(let i=0;i<n;i++){
        let stair="";
           for(let j=0;j<n-i-1;j++){
             stair+=" ";
           }
           for(let j=0;j<2*i+1;j++){
             stair+="#";
          }
          for(let j=0;j<n-i-1;j++){
            stair+=" ";
        }
        console.log(stair)
    }
}

module.exports = pyramid;