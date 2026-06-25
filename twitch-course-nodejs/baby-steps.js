//  Write a program that accepts one or more numbers as command-line arguments
//  and prints the sum of those numbers to the console (stdout).
const args = process.argv.slice(2)

let result = 0
args.map(arg => {
  result += Number(arg)
})
console.log(result)