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
    <div className="career c">Contact</div>
    <div className="educationHeading ch"> <span className="eduh">Let's</span> Work Together</div>

    <form className="contactForm" onSubmit={handleSubmit}>
< input type= 'text' name="from_name" placeholder= 'Name' className='inputFiledText' />
< input type= 'email' name="from_email" placeholder= 'Email' className='inputFiledText' />
<textarea  name="message" placeholder='Enter Message' className='inputFiledTextMessage'/>
<input type= 'submit'   className="submitContact" />
</form>

    </div>
    
    </>
  )
}

export default Contact