// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
const {MongoClient,ObjectID}=require('mongodb')
const database='task-manager'
const connectionUrl='mongodb://127.0.0.1:27017'
MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>
{
   if(error)
   {
       return 'there is error while connecting'
   }
   const db=client.db(database)
//    db.collection('users').insertMany([
//       { name:'bhaskar',
//        age:12
//        },{
// name:'yash',
//        age:35
//        }]
//    ,(error,data)=>{
//         if(error)

//         {
//         return    console.log('error')
//     }
//     console.log(data.ops)
// })
//  db.collection('tasks').insertMany([
//      {
//          description:'describe',
//    completed:true
//      },{
// description:'hello',
//    completed:false
//      }],(error,data)=>{
//          if(error)

//         {
//         return    console.log('error in task')
//     }
     
//     console.log(data.ops)
//      }
//      )
db.collection('users').updateOne({ _id:new ObjectID("5de9ea73a6cf9f3c68ba7f20")},
{
    $set:{
name:'dzfbgdgb',
        age:45
    }
    
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
      console.log(error)
}
)


db.collection('users').findOne({ _id:new ObjectID("5de9ea73a6cf9f3c68ba7f20")},((error,data)=>{
    if(error)
    console.log('error')
    else console.log(data)
}

)


)
}
)


  

