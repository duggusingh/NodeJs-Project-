const express =require('express')
const auth=require('./middleware/auth')
require('./db/mongoose')

const UserRoute=require('./routers/user')
const TaskRoute=require('./routers/task')
const app=express()

const port=process.env.PORT

app.use(express.json())
app.use(UserRoute)
app.use(TaskRoute)
// app.post('/users',(req,res)=>{
//   const user=new User(req.body)
//   user.save().then(()=>{
//       res.send(user)    
//   }).catch((e)=>{
//      res.status(400).send(e)
//   })

// })
// app.get('/users',(req,res)=>{
//     User.find({}).then((user)=>{
//         if(!user){
//         res.status(404).send()
//         }
   
//         res.send(user)
//     }).catch((e)=>{
//         res.status(500).send(e)
//     })
// })
// app.get('/users/:id',(req,res)=>{
//     const _id=req.params.id
//     User.findById(_id).then((user)=>{
//         if(!user){
//         res.status(404).send()
//         }
   
//         res.send(user)
//     }).catch((e)=>{
//         res.status(500).send(e)
//     })
// })
// app.get('/task',(req,res)=>{
//     Task.find({}).then((task)=>{
//         if(!task){
//         res.status(404).send()
//         }
   
//         res.send(task)
//     }).catch((e)=>{
//         res.status(500).send(e)
//     })
// })
// app.get('/task/:id',(req,res)=>{
//     const _id=req.params.id
//     Task.findById(_id).then((task)=>{
//         if(!task){
//         res.status(404).send()
//         }
   
//         res.send(task)
//     }).catch((e)=>{
//         res.status(500).send(e)
//     })
// })
// app.post('/task',(req,res)=>{
//   const task=new Task(req.body)
//   task.save().then(()=>{
//       res.status(201).send(task)    
//   }).catch((e)=>{
//      res.status(400).send(e)
//   })

// })
//using Async/await function



app.listen(port,()=>
{
    console.log('its available now '+port)
})
const User=require('./models/user')
const Task=require('./models/task')
// const main=async ()=>{
//    const task=await Task.findById('5df21bb98fd7ca1cb413a0ae')
//    console.log(task.owner)
// //    await user.populate('tasks').execPopulate() 
// //    await user.save()
// //    console.log(user.tasks)
// }
// main()
// const main1=async ()=>{
//    const user=await User.findById('5df2148c714b7c1970c1f465')
 
//    await user.populate('tasks').execPopulate() 
//    await user.save()
//    console.log(user)
//    console.log(user.tasks)
// }
// main1()