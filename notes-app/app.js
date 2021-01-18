const yargs=require('yargs')
const chalk =require('chalk')
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
    {console.log('Title: '+argv.title)
     console.log('Body: '+argv.body)
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