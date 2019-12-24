// 1. Converting Objects to Json using JSON.stringify(obj) function
// 2. Converting a Json data back to an object using JSON.parse() function

const fs = require('fs')

// 1. Object -> Json
// Note, in an object, keys don't need quotes
// Single or Double quotes both work for values
const thingObj = {
    name: 'Dining Table',
    size: 'Pretty Big!'
}

const thingJson = JSON.stringify(thingObj)

// Save Json data to file
fs.writeFileSync('01_json.json', thingJson)

// Note in the result, both keys and values have double quotes
// console.log(thingJson)  // Prints {"name":"Dining Table","size":"Pretty Big!"}

// Also note that below, if you uncoment and run, it will get no results
// This is because it is Json data now and not an object anymore!
// console.log(thingJson.name) // prints undefined

// 2. Json -> Object

const dataBuffer = fs.readFileSync('01_json.json')  // Read data buffer from file
const dataJson = dataBuffer.toString()  // Convert data buffer to string (human readable form)
const data = JSON.parse(dataJson)   // Finally, convert Json to an Object

// Now, you can reach every attribute of data since it is an object now
console.log('parsedData.name:', data.name)    // prints parsedData.name: Dining Table

// Exercise: Read 02-json.json file, parse to object, change data and rewrite to same file
const newDataBuffer = fs.readFileSync('02-json.json')
let newDataJson = newDataBuffer.toString()
let newDataObj = JSON.parse(newDataJson)
// Change the object now:
newDataObj.name = 'Ashesh'
newDataObj.age = 00

// Write to File again and you're done!
fs.writeFileSync('02-json.json', JSON.stringify(newDataObj))



