import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
const Contact = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_2fuuh5q' ,'template_uduy71k', e. target ,'7nJVgsVNuINo2c3yt')
    .then((result) => {
    console.log( 'Email successfully sent! ' ,result.text);
    alert("message Sent")   
    },(error) => {
    console.log( 'Failed to send email: ' ,error.text) ;
    })
    }

  return (
    <>
    <div className="Contact">
    <div className="heading-color-1">Contact</div>
    <div className="heading-color-0"> <span className="heading-color-2">Let's</span> Work Together</div>

    <form className="contact-form" onSubmit={handleSubmit}>
< input type= 'text' name="from_name" placeholder= 'Name' className='input-filed-text' />
< input type= 'email' name="from_email" placeholder= 'Email' className='input-filed-text' />
<textarea  name="message" placeholder='Enter Message' className='input-filed-text-msg'/>
<input type= 'submit'   className="contact-submit" />
</form>

    </div>
    
    </>
  )
}

export default Contact