const fs=require('fs')
const getNotes = function () {
    return 'Your notes...'
}

const addnote = function (title, body) {
const notes=loadNotes()
    notes.push({

    })
console.log(notes)

}

const loadNotes=function(){try {
    const dB=fs.readFileSync('notes.json')
  const dataJSON=dB.toString()
  return JSON.parse(dataJSON)

} catch (e) {
    
}
}

module.exports = {
    getNotes: getNotes, addnote: addnote,
}