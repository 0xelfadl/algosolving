function capitalize(str) {
    const str1=str.toLowerCase();
    const words=str1.split(" ");
    let capital="";
    for(let word of words){
        const first = word.charAt(0).toUpperCase() + word.slice(1);
        capital+=first+ " ";
    }
    return capital.trim();
}
module.exports = capitalize;