
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const auth = async (req,res,next)=>{
    try
    {
    const token =await req.header('Authorization').replace('Bearer ','')
    console.log(token)
    const decoded= await jwt.verify(token ,'My')
    const user =await User.findOne({ _id : decoded._id,'tokens.token': token})
    if(!user)
    {
        throw new Error()
    }
    req.token=token
    req.user=user
  await req.user.save()
    next()
}
catch(e)
{
  res.status(401).send(e)
}
}
module.exports = auth
