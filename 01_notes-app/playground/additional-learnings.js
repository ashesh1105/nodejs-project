// const chalk = require('chalk')

// log('process.argv:', process.argv) // Shows output that are not user friendly, especially --title
// log('\n')

// Shows output as: yargs.argv: { _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }
// But because we added yargs.command above - add, if we run the app as node app.js --help,
// we will see the describe part printed there so users can pass 'add' as option command line arg
// Running app.js with add command, like 'node app.js add', will print the describe part of add command
// log('yargs.argv:', yargs.argv)


// Some commented exercises done that you might want to look at:
// const add = require('./utils.js')
// const command = process.argv[2]

// const sum = add(2,3)

// console.log(sum)

// let email = 'ashesh@something..com'
// let url = 'https://mead.io/'

// // Notice how chalk and validator packages are used here!
// log(chalk.blue(email, 'is valid?', validator.isEmail(email)))   // prints false
// log(chalk.magenta(url), chalk.bgWhiteBright('is valid?'), validator.isURL(url)) // prints true

// log(chalk.red.bgYellow.bold('Printing via chalk! .. chalk.red.bgYellow.bold')) // order doesn't matter here

// Accessing command line arguments
// Run this file as node app.js Ashesh Singh, to get two inputs printed to console
// if (command === 'add') {
//     log('Adding note!')
// } else if (command === 'remove') {
//     log('Removing note!')
// }   // This will print "Removing note!" if run command in terminal is: node app.js remove

