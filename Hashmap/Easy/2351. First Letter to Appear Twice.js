/**
 * @param {string} words
 * @return {character}
 */

var repeatedCharacter = function(words) {

//created map
   const hashmap = new Map()

//we will populate the hashmap. 

   for(let word of words){

    hashmap.set(word, (hashmap.get(word) || 0 ) +1);

    if(hashmap.get(word) === 2){
        return word; 
        break; 
    }

   }
 
};
