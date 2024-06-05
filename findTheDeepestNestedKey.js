const data = { 
    "level1": { 
      "level2": { 
        "level3": "This is the deepest value" 
      } 
    }, 
    "anotherKey": "Not the deepest" 
  }; 

function findDeepestKey(data,key){
  // console.log(data,key)
  if(typeof data === 'object'){
    key = Object.keys(data)[0]
    findDeepestKey(data[key],key)
  }else{
    console.log(key)
  }
}
let key = Object.keys(data)[0]
const result = findDeepestKey(data[key],key)
// time complexity = O(d) here d is the depth of the obj