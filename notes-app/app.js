const yargs=require('yargs')
const chalk =require('chalk')
const notes=require('./notes.js')
yargs.version('1.2')
yargs.command({
    command:'add',
    discribe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        },
    },
    
    handler:function(argv)
    {notes.addnote(argv.title,argv.title)
}
})

yargs.command({
    command:'remove',
    discribe:'removing a note',
    handler:function(){
        console.log('removing a note!!')
    }
})

yargs.command({
    command:'list',
    discribe:'listing a note',
    handler:function(){
        console.log('listing  note!!')
    }
})

yargs.command({
    command:'read',
    discribe:'rreading a note',
   
    handler:function(argv){
        console.log('aading a  note!!',argv)
    }
})

 console.log(yargs.argv.title)