//functions without return
function add(a,b){
  let c=a+b
  console.log(c)
}
add(3,2)
//functions with return
function addreturned(a,b){
  let c=a+b
  return c
}
console.log(addreturned(10,2))


//arrow function, can be used with let or const,more used in react and MERN 
let fullname=(firstname,lastname)=>{
  let full= `${firstname} ${lastname}`;
  console.log(full)
}
fullname("Vyshnavi","Krishnakumar")