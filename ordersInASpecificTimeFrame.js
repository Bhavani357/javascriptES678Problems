const customerData = { 
    "id": 123, 
    "name": "David", 
    "orders": [ 
      { "id": 1, "date": "2024-05-20" }, 
      { "id": 2, "date": "2024-12-01" }, 
      { "id": 3, "date": "2024-012-15" } 
    ] 
  }; 
 
const {orders} = customerData // O(1)
const pDate = orders.map((each)=>new Date(each.date)) // O(n)
let result = null
for(let i=0;i<pDate.length-1;i++){ // O(n)
    if(pDate[i]<pDate[i+1]){
        result = true
    }else{ 
        result = false
        break 
    }
}
console.log(result)