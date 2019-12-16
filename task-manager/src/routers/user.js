const express =require('express')
const User=require('../models/user')
const router=new express.Router()
const auth=require('../middleware/auth')
router.post('/users',async (req,res)=>{
  const user=new User(req.body)
  try{
      const token=await user.getToken()
      res.status(201).send({user,token})

    
  }catch(e){
     res.status(400).send(e)
  }

})
router.post('/users/login',async (req,res)=>{
    try{

    const user=await User.findByCredentials(req.body.email,req.body.password)
    const token=await user.getToken()
      await user.save()
    res.send({user,token})
 
    }catch(e){
        res.status(400).send({email:'wrong'})
    }
    
})
router.post('/users/logout', auth ,async (req,res)=>{
    try{
    req.user.tokens=req.user.tokens.filter((token)=>{
        return token.token!==req.token
  
    })
     await req.user.save()
   res.send({logout:'logout'})
}catch(e){
       res.status(500).send()
}
})
router.post('/users/logoutAll',auth,async (req,res)=>{
    try{
    req.user.tokens=[]
    await req.user.save()
    res.send({logoutAll:'logout'})
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/users',async (req,res)=>{
    try {
    const user= await User.find({})
        if(!user){
        res.status(404).send()
    }
       res.send(user)
    }catch(e)
   
     {
  
        res.status(500).send(e)
    }
})
router.get('/users/me', auth , async (req,res)=>{
    res.send(req.user)
})
router.get('/users/:id',auth,async (req,res)=>{
    const _id=req.params.id
    try{
  const user= await User.findById(_id)
        if(!user){
        res.status(404).send()
        }
   
        res.send(user)
    }
    catch(e){
        res.status(500).send(e)
    }
})
router.delete('/users/me',auth,async (req,res)=>{

  try{
   
        req.user.remove()
        // await sendGrid(req.user.email,req.user.name)
        res.send(req.user)
    }catch(e){
        res.status(500).send(e)
    }
})
router.patch('/users/me',auth,async (req,res)=>{
      const updates=Object.keys(req.body)
      const validateArray=['name','age','password','email']
      const isValid=updates.every((update)=>
          validateArray.includes(update)
        )
          if(!isValid)
          {
              return res.status(400).send({error:'not found in array'})
          }
        
      
      try{
        //   const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        // const user=await User.findByIdAndUpdate(req.params.id)
 updates.forEach((update)=>{
          req.user[update]=req.body[update]
 })
await req.user.save()
          if(!req.user)
          {
               res.status(404).send()
          }
          res.send(req.user)
      }
      catch(e){
          res.status(500).send(e)
      }
})

const multer=require('multer')
const upload=multer({
    limits:{
        fileSize:1000000,

    },fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(doc|docx)$/))
        {
            return cd(new Error('please upload docx file'))
        }
        cb(undefined,true)
    }
})
router.post('/users/me/avatar',auth,upload.single('avatar'),async (req,res)=>{
    req.user.avatar=req.file.buffer
    await req.user.save()
    res.send()
})
router.delete('/users/me/delete',auth,upload.single('avatar'),async (req,res)=>{
    req.user.avatar=undefined

    await req.user.save()
  
    res.send()
} )


module.exports=router