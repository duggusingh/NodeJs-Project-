const mongoose=require('mongoose')
const jwt = require('jsonwebtoken')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const Task=require('../models/task')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
    required :true
    },
    age:{
        type:Number,
   validate(value)
        {
            if(value<0)
            {
               throw new Error('this is not valid')
            }
        }
    },
    email:{
        unique:true,
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value))
            throw new Error('please provide email correctly')
        }
    },
    password:{
        type:String,
  
        trim:true,
        minlength:1,
        validate(value){
            if(value.toLowerCase().includes('password'))
            {
                throw new Error('password should not contain Password word')
            }

        }


    },
    tokens:[{
     token:{
         type:String,
     
     }
    }],
    avatar:{
        type:Buffer
    }
},{
    timestamps:true
})
userSchema.virtual('tasks',{
    ref:'Task',
    localField:'_id',
    foreignField:'owner'
})
userSchema.methods.toJSON=function(){
    const user=this
    const userData=user.toObject()
    delete userData.password
    delete userData.tokens
    return userData
}
userSchema.methods.getToken=async function(){
    const user=this
    const token=jwt.sign({_id:user._id.toString()},'My')
    user.tokens=user.tokens.concat({token})
    await user.save()
    return token
}
userSchema.statics.findByCredentials= async (email,password)=>
{
    const user=await User.findOne({email})
    if(!user)
    {
        throw new error('unable to find user')
    }

    const pass=await bcrypt.compare(password,user.password)
    if(!pass)
    {
         throw new error('unable to find user')
    }
   return user
}
 userSchema.pre('save',async function(next){
     const user=this
     if(user.isModified('password')){
     user.password=await bcrypt.hash(user.password,8)
     next()
     }
})
userSchema.pre('remove',async function (next){
     const user=this
     await Task.deleteMany({owner:user._id})
     next()
})
const User=mongoose.model('User',userSchema)
    
// const user=new User({
//     name:'',
//     age:9,
//     email:'',
//     password:''
// })
// user.save().then(()=>{
//     console.log(user)
// }).catch((error)=>{
//     console.log(error)
// })
module.exports=User