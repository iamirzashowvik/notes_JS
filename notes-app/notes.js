const fs = require('fs')
const getNotes = function () {
    return 'Your notes...'
}

const addnote = function (title, body) {

    const notes = loadNotes()
    const duplicateNotes=notes.filter(function(note){
 return note.title===title
    })

    if (duplicateNotes.length ===0) {
        notes.push({
            title: title,
            body: body
        })
        SaveNotes(notes)
        console.log('New note Added!')
    }
else{
    console.log(' note title Already taken!')
}   

}



const loadNotes = function () {
    try {
        const dB = fs.readFileSync('notes.json')
        const dataJSON = dB.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
return []
    }
}

module.exports = {
    getNotes: getNotes, addnote: addnote,
}


const SaveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}