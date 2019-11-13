console.log('Hello node')
const fs=require('fs')
const getNotes=function(){
    return 'hello'
}
const addNotes=function(title,body){
    const load=loadNotes()
    const duplicateNotes=load.filter(function(node){
        return node.title===title
})
if(duplicateNotes.length===0)
{
     
    load.push(
        {
            title:title,
            body:body

        }
    )
    
saveNotes(load)
}
else{
    console.log('qdd')
}
}


const saveNotes=function(notes){
    const note=JSON.stringify(notes)
   fs.writeFileSync('notes.json',note)
   
}
const loadNotes=function(){
    try{
    const read=fs.readFileSync('notes.json')
    const convert =read.toString()
    return JSON.parse(convert)
}
catch(e){
    return []
}
}
module.exports={
    addNotes:addNotes,
    getNotes:getNotes

}