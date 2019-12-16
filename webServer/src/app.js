const path=require('path')
const express=require('express')
const hbs=require('hbs')

app=express()

publicDirectory=path.join(__dirname,'../public')
publicDirectory1=path.join(__dirname,'../templates/views')
partialPath=path.join(__dirname,'../templates/partials')
app.use(express.static(publicDirectory))

app.set('view engine','hbs')
app.set('views',publicDirectory1)
hbs.registerPartials(partialPath)

// app.get('',(req,res)=>
// {
//     res.send('Hi this is home page')
// })
// app.get('/',(req,res)=>
// {
//     res.render('index',{
//         header:'index page',
//         forecast:'Hi this is forecast index report',
//         location:'Hi this is location index string',
//           footer:'duggu singh'
//     })
// })
// app.get('/products',(req,res)=>
// {
//       if(!req.query.address)
//       {
//          return res.send({
//               error:'Error while finding address'
//           })
//       }
//   res.send({
//     address:req.query.address
//   })
// })
// app.get('/about',(req,res)=>
// {
//     res.render('about',{
//           header:'about page',
//         forecast:'Hi this is forecast about report',
//         location:'Hi this is about location string',
//         footer:'duggu singh'
//     })
// })
// app.get('/help',(req,res)=>
// {
//     res.render('help',{
//           header:'help page',
//         forecast:'Hi this is forecast help report',
//         location:'Hi this is help location string',
//           footer:'duggu singh'
         
//     })
// })

// app.get('/help',(req,res)=>
// {
//     res.send({
//         forecast:'Hi this is forecast report',
//         location:'Hi this is location string'
//     })
// })
// app.get('/about',(req,res)=>
// {
//     res.send('<h>Duggu</h>')
// })
// app.get('*',(req,res)=>
// {
//     res.render('404',{
//         header:'error page',
//           footer:'type something else'
//     })
// })
// app.get('/help/*',(req,res)=>
// {
//     res.render('404',{
//            header:'404',
//           footer:'type something else'
//     })
// })
app.get('/weather',(req,res)=>
{
    if(!req.query.search)
    {
         return res.send({
            error:'please provide query'
        })
    }
    res.send({
        forecast:'nice weather',
        query:req.query.search

    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address)
    return res.send({

        error:'provide address'
    
    })
    res.send({
        forecast:'wecdvw',   
        address:req.query.address
    })
})
app.listen(3000,()=>{
    console.log('Hi you are on')
})