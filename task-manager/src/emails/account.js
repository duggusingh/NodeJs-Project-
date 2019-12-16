const sgEmail=require('@sendgrid/mail')
const sgAPI='write Api key here'
sgMail.setApiiKey(sgAPI)
const sendGrid= (email,name)=>{
sgEmail.send({
    to:email,
    from:'ds1914289@gmail.com',
    subject:'Hi this is cancellation mail',
    text:`Cancellatin message ..${name}`
    

})
}