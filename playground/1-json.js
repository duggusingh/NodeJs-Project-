const fs=require('fs')
const book={
    title :'Duggu',
    description:'Hi Hello'
}
const Jsonform=JSON.stringify(book)
fs.writeFileSync('1-json.json',Jsonform)
const read=fs.readFileSync('1-json.json')
const convert=read.toString()

const parse=JSON.parse(convert)
parse.title='Durgesh'
parse.description='Bye!'
const Jsonform1=JSON.stringify(parse)
fs.writeFileSync('1-json.json',Jsonform1)


