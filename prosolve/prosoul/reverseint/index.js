function reverseInt(n) {
    let reversed =0;
    while (n !== 0) {
        const digit = n % 10;
        reversed = reversed * 10 + digit;
        n = (n - digit) / 10;
    }
    return reversed;
}

module.exports = reverseInt;