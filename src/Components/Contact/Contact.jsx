import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'  
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f1dqzba', 'template_zgj9449', form.current, '0YhDn5jWkIdsTX8CV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contect me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Akashsuman2580@gmail.com</h5>
            <a href="mailto:luckysuman9351@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/ak.stayle" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 9352752998</h5>
            <a href="https://api.whatsapp.com/send?phone=919352752998" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of the contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your full name' id='inputfield' required />
          <input type="email" name='email' placeholder='your mail' id='inputfield' required/>
          <textarea name="message" rows="7" placeholder='your message' id='inputfield' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default Contact