const validator = require('validator')  // allows lots of validations
const yargs = require('yargs')  // To access command line arguments
const chalk = require('chalk')
const notes = require('./notes.js')
const log = console.log

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title to be added",
            demandOption: true,  // meaning -title="something" must be supplied as command line arg
            type: 'string'  // ensures one can not just pass --title and need --title="something"
        },
        body: {
            describe: "Note body",
            demandOption: true, // default is false
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Note title to be deleted',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: "List out all the notes",
    handler: () => {
        notes.listNotes().forEach((note) => {
            log(chalk.blue.bold(note.title))
        })

    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: "Read a note",
    builder: {
        title: {
            describe: "Title of note to read",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        let note = notes.readNote(argv.title)
        if (note) {
            log(chalk.blue.bold('Title:', note.title))
            log(chalk.blue.bold('Body:', note.body))
        }
    }
})
yargs.argv





