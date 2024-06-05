const order = { 
    "items": [ 
      { "id": 1, "name": "Book", "price": 10, "quantity": 2 }, 
      { "id": 2, "name": "Pen", "price": 2, "quantity": 3 }, 
    ], 
    "taxRate": 0.08 
  }; 

const {items,taxRate} = order 

let total = 0
for(let obj of items){  //O(n)
    const{price,quantity} = obj
    total += price*quantity
}
let tax = total + (total*taxRate)
console.log(tax)