import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //       process.env.REACT_APP_SERVICE_ID,
  //       process.env.REACT_APP_TEMPLATE_ID,
  //       form.current,
  //       process.env.REACT_APP_USER_ID
  //     )
  //     .then(
  //       (result) => console.log(result.text),
  //       (error) => console.log.apply(error.text)
  //     );
  //   e.target.reset();
  // };

  useEffect(() => {
    // Initialize emailjs with your public key
    emailjs.init('eeZ_8VbzfeTHUtfhv');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Call emailjs.sendForm to send the form data
    emailjs.sendForm('contact_service', 'contact_form', form.current)
      .then(function(response) {
        console.log('SUCCESS!', response);
        console.log('respone data: ', response.status, response.data);
      }, function(error) {
        console.log('FAILED...', error);
      });
      e.target.reset();
  };

  return (
    <div className="form-div">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          className="input-name"
          type="text"
          placeholder="Your Name"
          name="user_name"
          required
        ></input>
        <input
          className="input-email"
          type="email"
          placeholder="Your email"
          name="user_email"
          required
        ></input>
        <textarea
          type="text"
          placeholder="Your Message"
          name="message"
          required
        ></textarea>
        <input type="submit" value="Send"></input>
      </form>
    </div>
  );
}

export default ContactForm;
