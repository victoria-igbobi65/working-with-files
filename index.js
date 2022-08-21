// This repl is intended to solidify knowledge on this weeks content working with fs module
const fs = require('fs')
const path = require('path')

// obtain filepath of the text file
const namesFilePath = path.join(__dirname, 'names.txt')
let name = prompt('Enter your name... ')


//Checks if file exists, if it does append user name to gthe file
if (namesFilePath) {
  fs.appendFile(namesFilePath, `${name}\n`, (err) => {
    if (err) {
      return
    }
    
    console.log('Name added successfully!')
  })
}

  // Else create the file and write the name to the file
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