
// sort and create anagram from string
var sort = (str) => {
    const word = str.split('').sort().join('');
    return word;
}

var isAnagram = function(strA, strB) {
    if (sort(strA) === sort(strB)) {
        return true;
    } else {
        return false;
    } 
};