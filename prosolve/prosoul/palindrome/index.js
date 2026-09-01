function palindrome(str) {
    const reversed = [];
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        const char = strArr[strArr.length - 1 - i];
        reversed.push(char);
    }
    const reversedStr = reversed.join('');

    if (str === reversedStr) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindrome;