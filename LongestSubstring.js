/**
 * @param {string} 
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    return getLetters(s, s.length);
};

let getLetters = (string, stringLength) => {
    let letters = new Set(); 
    let counter = 0, i = 0, j = 0;
    while(i < stringLength && j < stringLength){    
        if(!letters.has(string[j])){
            letters.add(string[j++]);
            counter = Math.max(counter, j-i);
        } else {
            letters.delete(string[i++]);
        }
    }
    return counter;
}


console.log(lengthOfLongestSubstring("aaaa"));
