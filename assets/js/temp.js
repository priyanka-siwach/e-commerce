let str="8888888888888888"
let num2=str.split("")
console.log(num2)
num2.splice(4,0,"-")
num2.splice(9,0,"-")
num2.splice(14,0,"-")
console.log(num2.join(""))
// console.log(str.split(''))
