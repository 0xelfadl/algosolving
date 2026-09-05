function steps(n) {
    for(let i=0;i<n;i++){
        let stair="";
        for(let j=0;j<n;j++){
            if(j<=i){
                stair+="#";
            }else{
                stair+=" ";
            }
        }
        console.log(stair);
    }
}

module.exports = steps;