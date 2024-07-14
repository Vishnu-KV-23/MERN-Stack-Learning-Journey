//print 1 to 5
// for loop
for(let i=1;i<=5;i++)
  {
    console.log(i)
  }
  console.log("---------------------")
let numbers=[1,4,7,9,3]
for(let i=0;i<numbers.length;i++)
  {
    console.log(numbers[i])
  }
  //while loop
  console.log("---------")
  let i=0
  while(i<numbers.length)
    {
      console.log(numbers[i])
      i++
    }
    // do while loop
    console.log("---------")
    let k=0
    do
    {
      console.log(numbers[k])
      k++
    }
    while(k<numbers.length)

      //sum using loops
      var sum=0
      for(let a=0;a<numbers.length;a++)
        {
           sum=sum+numbers[a]
        }
        console.log(`sum is ${sum}`)