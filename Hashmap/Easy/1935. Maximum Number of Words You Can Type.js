/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    
    let words = text.split(''), count = 0, flag 
    
    
    for (let word of words){
        flag = true 
        for(let letter of brokenLetters){
                if(word.includes(letter)){
                    flag = false
                    break 
                }
        }

        if(flag){
            count++ 
        }
    }

    return count 
};