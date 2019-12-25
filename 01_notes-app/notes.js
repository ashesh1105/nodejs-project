const fs = require('fs')
const chalk = require('chalk')  // allows using text formatting with colors etc. (to console)

let log = console.log
const notesFile = './notes.json'

const listNotes = () => {
    return loadNotes()
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // Ensure no duplicate title is added, log an error if an attempt is made for it
    // Unlike filter function, find function stops when it finds one matching element
    let duplicateNote = notes.find((note) => note.title === title)

    // Using debugger and node inspect tool
    debugger

    if (!duplicateNote) {   // same as if(duplicateNote === undefined)
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        log(chalk.green('New note added with title:', title))   // chalk.red.inverse could give red background
    } else {
        log(chalk.red('Note with given title already exists!'))
    }
}

const readNote = (title) => {
    let notes = loadNotes()
    let note = notes.find((note) => note.title === title)
    if (note) {
        return note
    } else {
        log(chalk.red('Note not found with given title:', title))
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync(notesFile, JSON.stringify(notes))
}

const removeNote = (title) => {
    let notesList = loadNotes()

    // Get array of notes objects which does not include the one with given title
    let notesToKeep = notesList.filter((note) => note.title != title)

    // Rewrite the data to file if found duplicate
    if (notesList.length === notesToKeep.length) {
        log(chalk.red('Note does not exist with given title:', title))
    } else {
        saveNotes(notesToKeep)
        log(chalk.green('Note removed with given title:', title))
    }
}

const loadNotes = () => {

    try {
        let dataBuffer = fs.readFileSync(notesFile)
        let dataJson = dataBuffer.toString()
        let data = JSON.parse(dataJson)
        return data
    } catch (e) {
        return []
    }

}

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}