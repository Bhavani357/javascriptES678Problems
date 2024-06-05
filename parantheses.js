// Given a string s containing parentheses ((), {}, and []), check if the parentheses are balanced and properly nested. Each opening parenthesis must have a closing parenthesis of the same type in the correct order. 
// Example 1: 
// Input: s = "()" 
// Output: true 
// Example 2: 
// Input: s = "()[]{}" 
// Output: true 
// Example 3: 
// Input: s = "(]" 
// Output: false 
  
const string = "(]"
let result = true
for(let i=0;i<string.length-1;i++){
    if(string[i]==="("){
        if(string[i+1]===")"){

            continue
        }else{
            result = false
            break
        }
    }else if(string[i]==="{"){
        if(string[i+1]==="}"){

            continue
        }else{
            result = false
            break
        }
    }else if(string[i]==="["){
        if(string[i+1]==="]"){

            continue
        }else{
            result = false
            break
        }
    }
}
console.log(result)