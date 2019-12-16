const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-API',{useNewUrlParser:true,useCreateIndex:true})
module.exports=mongoose
// const Task=mongoose.model('Task',{
//     description:{
//         type:String,
//         required:true
       
//     },
//     completed:{
//         type:Boolean,
        //    default:true
      
//     }
// })
// const task=new Task({
//     description:'This is description of task',
//     completed:true
// })
// task.save().then(()=>
// {
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })