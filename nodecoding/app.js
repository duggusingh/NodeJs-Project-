const node=require('./node.js')

// const chalk=require('chalk')
const yargs=require('yargs')
// console.log(chalk.blue('Durgesh singh'))
// console.log(chalk.red.inverse('Durgesh singh'))
// const validator=require('validator')
// const fs=require('fs')
// fs.writeFileSync('file.txt','Hello file')
// console.log(validator.isEmail('ds1914289@gmail.com'))

yargs.command({
    command :'add',
    describe :'Hi durgesh ',
       builder:{
            title:{
                describe:'Note title',
                demandOption:'true',
                type:'string'
            },
              body:{
                describe:'Body part',
                demandOption:'true',
                type:'string'
            }
          
        },
     handler:function(argv){
        node.addNotes(argv.title,argv.body)}
})
    

yargs.command(
    {
        command:'remove',
        describe:'Removing item',
        builder:{
            title:{
                describe:'Note title',
                damandOption:'true',
                type:'string'
            },
              body:{
                describe:'Body part',
                demandOption:'true',
                type:'string'
            }
          
        },
        handler:function(argv){
         node.addNotes(argv.title,argv.body)

        }

    })
    yargs.parse()