// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
// function reverseString(str) {
//     return 'Let\'s Start'
//    }
function reverseString(str) {
    // On convertie str en string
    let string = str.toString()
    return string.split("").reverse().join("");
}
// reverseString('Hello');
exports.reverseString = reverseString;