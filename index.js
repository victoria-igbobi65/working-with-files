// This repl is intended to solidify knowledge on this weeks content working with fs module
const fs = require('fs')
const path = require('path')


const namesFilePath = path.join(__dirname, 'names.txt')
let name = prompt('Enter your name... ')

 
if (namesFilePath) {
  fs.appendFile(namesFilePath, `${name}\n`, (err) => {
    if (err) {
      return
    }
    console.log('Name added successfully!')
  })
}

else {
  fs.writeFile(namesFilePath, `${name}`, (err) => {
    if (err) {
      console.log(`An error occured while handlng this request: ${err}`)
    }
    console.log('Name added succesfully!')
  })
}

// accessing names.txt file and manipulating the input

//fs.readFile(namesFilePath, 'utf8', (err, data) => {
//  if (err){
//    console.log(err)
// }
//  console.log(((data.trim()).split('\n')).length)
//})


//var require