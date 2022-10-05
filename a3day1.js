function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
    
}

var a = prompt("enter the string");
var result = reverseString(a);

alert("the reversed string is" + result);