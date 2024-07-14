// collection of data is array, doesnt have to be similar datatype
let fruits=["apple","orange","mango",12,13.5,true]
console.log(fruits)
console.log(fruits[2])//counted from 0
//to find length
console.log(fruits.length)
// to add new element at end
fruits.push("watermelon")
console.log(fruits)
//add element at start
fruits.unshift("tomato")
console.log(fruits)
fruits.pop()//removes from the end
fruits.shift()//removes from the front
console.log(fruits)


// creation of arraay of objects is possible
let FSD=[
  {
    name:"Ajith",
    rollno:1
  },
  {
    name:"Akshay",
    rollno:2
  },
  {
    name:"Vyshnavi",
    rollno:56
  }
]
console.log(FSD[2])
console.log(FSD)
