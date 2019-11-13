const request =require('request')
const geoCode =require('./utils/geo-code')
// const url="https://api.darksky.net/forecast/83ace5fd7a9e84a279514c64b8d903ec/37.8267,-122.4233"
// const geoUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZHVnZ3UxMjMiLCJhIjoiY2sydTJlZDg4MWRlbzNucWJ6bTZvNWcyZSJ9.jcn4aR2ezuWhdn0Xld4pNA"
//     if(error)
//     {
//         console.log('unable to connect to local service')
//     }
  
//     else{
//         const langitude=response.body.features[0].centre[1]
//         const longitude=response.body.features[0].centre[0] 
//         console.log(langitude,longitude)
//     }
// })
// request({url:geoUrl,json:true},(error,response)=>{
//     if(error)
//     {
//         console.log('unable to connect to local service')
//     }
  
//     else{
//         const langitude=response.body.features[0].center[1]
//         const longitude=response.body.features[0].center[0] 
//         console.log(langitude,longitude)
//     }
// })

     
     
geoCode('Boston',(error,data)=>
{
    console.log('error',error)
     console.log('data',data)
   
})