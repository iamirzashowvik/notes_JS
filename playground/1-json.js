const fs = require("fs")

// const book={
//     title:"Ego is the Enemy",
//     author:"mirza"
// }
// const bookJSON=JSON.stringify(book)
// console.log(bookJSON)
// const c= JSON.parse(bookJSON)
// console.log(c.title)
// fs.appendFileSync('./1-json.json', )
//writeFileSync('1-json.json',bookJSON)  playground\

const dB=fs.readFileSync('1-json.json')
const dataJSON= dB.toString()
const user=JSON.parse(dataJSON)
user.title='gg'
user.author='ss'
const uJ=JSON.stringify(user)
fs.writeFileSync('1-json.json',uJ )
console.log(user)