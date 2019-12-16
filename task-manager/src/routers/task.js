const express = require('express')
const Task= require('../models/task')
const auth= require('../middleware/auth')
const router= new express.Router()

router.get('/task',auth,async (req,res)=>{
    const match={}
    if(req.query.completed)
    {
        match.completed= req.query.completed==='true'
    }

    try{
await req.user.populate({
    path:'tasks',
    match,
    options:{
        limit:parseInt(req.query.limit),
        skip:parseInt(req.query.skip)
    }
}).execPopulate() 
    res.send(req.user.tasks)
    }catch(e){
        res.status(500).send(e)
    }
})
router.get('/task/:id',auth,async (req,res)=>{
  
    try{
   const task= await Task.findOne({_id:req.params.id,owner:req.user._id})
        if(!task){
        res.status(404).send()
        }
   
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete('/task/:id',auth,async (req,res)=>{
   
    try{
   const task= await Task.findOneAndDelete({_id:req.params._id,owner:req.user._id})
     
   
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

router.post('/task',auth,async (req,res)=>{
  const task=new Task({
       ...req.body,owner : req.user._id})
    try{
       
  await task.save()
      res.status(201).send(task)    
  }catch(e){
     res.status(400).send(e)
  }

})
router.patch('/task/:id',auth,async (req,res)=>{
      const updates=Object.keys(req.body)
      const validateArray=['completed','description']
      const isValid=updates.every((update)=>
          validateArray.includes(update)
        )
          if(!isValid)
          {
              return res.status(400).send({error:'not found in array'})
          }
          
      
      try{
        //   const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        const task=await Task.findOne({_id:req.params.id,owner:req.user._id})
     
          if(!task)
          {
               res.status(404).send()
          }
             updates.forEach((update)=>{
            task[update]=req.body[update]
        })
        await task.save()
          res.send(task)
      }
      catch(e){
          res.status(500).send(e)
      }
})
module.exports=router