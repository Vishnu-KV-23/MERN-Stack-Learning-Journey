// var can be reinitialised and used later and it will change output accordingly, var has global  scope
console.log("var demo");
var a=10;
console.log(a);
{
  var a=20
  console.log(a)
}
// OUTPUT
// PS D:\FSD-MERN-Internship\FSD-MERN\DAY1-JS> node .\script.js
// 10
// 20



//let has local scope.. but if its taken together it causes error
console.log("let demo")
let b=10;
console.log(b);
{
  let b=20;
  console.log(b)

}
// let demo
// 10
// 20
let b=22 //causes error since we cant reinitialise it
// D:\FSD-MERN-Internship\FSD-MERN\DAY1-JS\script.js:28
// let b=22
//     ^

// SyntaxError: Identifier 'b' has already been declared
//     at wrapSafe (node:internal/modules/cjs/loader:1281:20)
//     at Module._compile (node:internal/modules/cjs/loader:1321:27)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
//     at Module.load (node:internal/modules/cjs/loader:1208:32)
//     at Module._load (node:internal/modules/cjs/loader:1024:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.14.0

