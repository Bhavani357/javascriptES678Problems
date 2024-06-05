// Imagine you have a box of jumbled letters for each word. If you can rearrange the letters in one box to get the same letters as another box, those are anagrams! 
// For example, the letters in "eat" can be rearranged to form "tea". So, "eat" and "tea" are anagrams. 
// Your task is to take a bunch of words and group them together based on whether they're made of the same jumbled letters. The order you return the groups in doesn't matter. 
// Example 1: 
// Input: strs = ["eat","tea","tan","ate","nat","bat"] 
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]] 
 
// Example 2: 
// Input: strs = [""] 
// Output: [[""]] 
// Example 3: 
// Input: strs = ["a"] 
// Output: [["a"]] 
 
function findAnagramWords(input){
    const mapObj = new Map()
    for(let word of input){ //O(n)
        let key = word.split('').sort().join("") //O(klogk) for every word sorting
        if(! mapObj.has(key)){
            mapObj.set(key,[word])
        }else{
            mapObj.get(key).push(word)

        }
    }
    console.log(Array.from(mapObj.values()))
}

const input = ["eat","tea","tan","ate","nat","bat"] 
const result = findAnagramWords(input) 

// time complexity = O(n.klogk)