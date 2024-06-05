const company = { 
    "departments": [ 
      { "name": "Marketing", "employees": [ 
        { "id": 1, "name": "John", "role": "Manager" }, 
        { "id": 2, "name": "Jane", "role": "Developer" } 
      ] }, 
      { "name": "Sales", "employees": [ 
        { "id": 3, "name": "Alice", "role": "Salesperson" }, 
        { "id": 4, "name": "Bob", "role": "Manager" } 
      ] } 
    ] 
  }; 

const {departments} = company // O(1) for obj destructuring
function findUsersWithRole(each){
    const {employees} = each
    function findUser(each){
        const {name,role} = each 
        console.log(`${name}: ${role}`)
    }
    employees.forEach((each)=>findUser(each))
}
departments.forEach((each)=>findUsersWithRole(each)) // O(n)
    