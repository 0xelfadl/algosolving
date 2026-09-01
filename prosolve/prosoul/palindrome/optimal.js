function palindrome(str) {

    let right = 0;

    let left = str.length - 1;

    while (right < left) {

        if (str[right] === str[left]) {

            right++;

            left--;

        } else {

            return false;

        }

    }

    return true;

}

module.exports = palindrome;