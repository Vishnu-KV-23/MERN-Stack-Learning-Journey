//add
let a=10
let b=20
//concatenation shown here
console.log("Sum:",a+b)
//sub
console.log("diff:",a-b)
//multiply
console.log("mul:",a*b)
//division
console.log("div:",a/b)
//modulus
console.log("mod:",a%b)
//use tilde symbol and use ${a/b} whenever we want to put values
console.log(`The sum is ${a+b}`)
console.log("---------------------------------------------------")
//increment post/pre and decrement
//postfix
console.log("postfix")
let i=1
console.log(i)
let p=i++
console.log(p)
console.log(i)
//prefix
console.log("prefix")
let j=1
console.log(j)
let k=++j
console.log(k)
console.log(j)
//rules of increment and decrement operators applies here of pre and post operators
let x="2"
let y=2
// data type not checked in  == , only content checked
if (x==y)
  {
    console.log("both are equal,==")
  }
else
{
  console.log("both are not equal,==")
}
// data type checked in === 
if (x===y)
  {
    console.log("both are equal,===")
  }
else
{
  console.log("both are not equal,===")
}