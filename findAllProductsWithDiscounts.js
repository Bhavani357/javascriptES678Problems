const data = { 
    "products": [ 
      { "id": 1, "name": "Shirt", "price": 20, "discount": 10 }, 
      { "id": 2, "name": "Hat", "price": 15 }, 
      { "id": 3, "categories": ["Clothing", "Winter"], "price": 30, "discount": 5 } 
    ] 
  }; 

function findProductsWithDiscounts(each){ //O(1)
    if(each.discount){
        return each
    }
}
const {products} = data 
const result = products.filter((each)=>findProductsWithDiscounts(each)) // O(n)
console.log(result) //O(1)