//to load another file into the existing file 

//const addition  = require('./utils.js')

//after this the utils file will be added to the existing file; loading of a file 

//const sum = addition(4,7)

// console.log(firstName)
//console.log(sum)

//loading of another notes function


//import chalk from 'chalk'
//const getNotes = require('./notes')

//console.log(getNotes)

// another way to call the function that is in the another file 


//const msg = getNotes()

//console.log(msg)

//const greenMsg = chalk.green('Success')

//console.log(greenMsg)

//"type": "module" to run the chalk this must be inculed in json terminal


//const command = process.argv[2]
//console.log(process.argv[2])

/*console.log(process.argv)
if (command === 'add') {
    console.log('adding a new note')
}
else if (command === 'remove' ){
    console.log('removing an existing note')
}
else {
    console.log('command not defined')
}*/



const yargs = require('yargs') //to run the yargs new version this must be included
const {hideBin} = require('yargs/helpers')


//console.log(process.argv)


// to customize yargs version 
//yargs.version('version number that we want to use ')


// for the note app we need add,remove,read,list

//add 

yargs.version('1.1.0') //to specify any particular version

//yargs(hideBin(process.argv)).command({ //for new versions it must be included 
yargs.command({

    command:'add',
    describe: 'This is the add command',
    builder :{
        title: { //title property
            describe: 'Note title of add command',
            demandOption: true,// when title not mentioned it intakes the boolean value
            type: 'string',//to make sure that the title is of the same datatype mentioned 
            //demandOption: true // used for same datatype is matched or not in form of a bool function
        },

        body: { //body property
            describe: "Note body",
            demandOption: true, 
            type: 'string',

        }
     },
    handler: function(argv){
        console.log('Title: '+argv.title) // argv.title incorporates the sub heading with the given title in terminal
        console.log('Body: '+argv.body)// same as in the case of head


    }
}).command(
{ 
    //remove command 
    command: 'remove',
    describe: 'to remove command',
    builder: {
        title: {
            describe: 'Note title of remove command',
        },
    },
    handler:function(argv) {
        console.log('remove working',argv);
    }
}).command(
{

    //list command 
    command: 'list',
    describe: 'adding a new list',
    handler: function(){
     console.log('list working');
    }
}). command ({
    //read command
    command: 'read',
    describe: 'reading the note',
    handler: ()=> {
        console.log('read working'); 
    }
})

// end of the challenge - yargs 

// in the commands there are 2 parts the title and the body , both are included in the builder window of the code 


yargs.parse()




//console.log(yargs.argv)





// challenge : wireup list command 






