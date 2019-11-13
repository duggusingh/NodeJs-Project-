const request =require('request')
const geoCode=(address,callback)=>
{
    
     geoUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiZHVnZ3UxMjMiLCJhIjoiY2sydTJlZDg4MWRlbzNucWJ6bTZvNWcyZSJ9.jcn4aR2ezuWhdn0Xld4pNA"
     request({url:geoUrl,json:true},(error,response)=>{
         
    if(error)
    {
        callback('unable to connect to local service',undefined)
    }
    else if(response.body.error){
callback('unable to load',undefined)
    }
  
    else{
        callback(undefined,{
             langitude:response.body.features[0].center[1],
             longitude:response.body.features[0].center[0]   
})
}
     })
}
module.exports=geoCode