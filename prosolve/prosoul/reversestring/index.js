function reverse(str) {
    const reversed = [];
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        const char = strArr[strArr.length - 1 - i];
        reversed.push(char);
    }
    return reversed.join('');
}

module.exports = reverse;