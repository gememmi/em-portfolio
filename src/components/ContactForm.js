import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1995jun3s3v3n', 'template_1995jun3s3v3n', form.current, 'eeZ_8VbzfeTHUtfhv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
};



    return (
        <div>
            <form ref= { form } onSubmit={ sendEmail } className="contact-form">
                <input type="text" placeholder="Your Name" name="user_name"></input>
                <input type="email" placeholder="Your email" name="user_email"></input>
                <textarea type="text" placeholder="Your Message" name="message"></textarea>
                <input type="submit" value="Send"></input>
            </form>
        

        </div>
    )
}

export default ContactForm 