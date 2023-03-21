import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';


const styles = {
  contactForm: {
    background: 'rgba(255,255,255,0.3)',
    color: 'rgba(255,255,255,1)',
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap'

  },
  contactName: {
    fontSize: '35px !important',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '10px',
    color: 'rgba(255,255,255,1)'
  },
  inputForm : {
    marginTop: '10px',
    marginBottom: '30px',
    borderRadius: '18px',
    border: 'none',
    padding: '20px',
    width: '100%',
    height: '15px'
  },
  inputFormMessage : {
    marginTop: '10px',
    marginBottom: '30px',
    borderRadius: '18px',
    border: 'none',
    padding: '20px',
    width: '100%',
    height: '300px'
  },
  button: {  
    backgroundColor:'#18165A',
    color: 'white',
    marginBottom: '30px',
    borderRadius: '18px',
    border: 'none',
    fontSize: '1.5rem',
    // padding: ''
  },
  emailError : {
    marginBottom: '30px',
    color: 'red'
  },
  messageError : {
    marginBottom: '30px',
    fontStyle: 'italic'
  },
  messageSuccess : {
    marginBottom: '30px',
    color: 'white',
    fontStyle: 'italic'
  },
  title: {
      width: "100%",
      fontSize: '2rem',
      color: 'white',
  },
  card : {
    background: 'rgba(4,22,90,0.5)',
    width: '40%',
    borderRadius: '4rem',
  },
  text: {
    color: 'white',
    fontSize: '2rem',
    width: '100%'
  }
}
export default function Contact() {
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);
    const form = useRef();


    const handleBlur = (e) => {
      const data = e.target.value;
      // checks if input fields are not empty
      if (data === ""){
        setMessageError(true)
      }
      else{
        setMessageError(false)
      }

      if (e.target.name === 'email')
      {
        // check if there is an @
        if (!e.target.value.includes("@")) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }
      }
   
    };

    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const msg = e.target.message.value;

      if (name && email && msg) {
        if (!emailError && !messageError)
        {
          emailjs.sendForm('service_x6f1kek', 'contact_form', form.current, '1gZVg86B90ynwsurj')
          .then((result) => {
              console.log(result)
              setEmailSuccess(true)
          }, (error) => {
              console.log(error)
              setEmailSuccess(false)
          });
        }
        else{
          console.log('dont submit')
        }

        setMessageError(false)
      }
      else {

        setMessageError(true)
      }
      

    };
    return (
      <>
       <div className="portfolio-container mx-auto m-5 p-4" style={styles.card}>
          <h1 className="text-center" style={styles.title}>Contact Me</h1>
          <form ref={form} className="form justify-content-center mx-auto" style={styles.text} onSubmit={handleFormSubmit}>
            <h4 className='row' >Name</h4>
            <input
              name="name"
              type="text"
              className='row'
              style={styles.inputForm}
              onBlur={handleBlur}
            />
            <h4 className='row'>Email</h4>
           
            <input
              name="email"
              type="email"
              className='row'
              style={styles.inputForm}
              onBlur={handleBlur}
            />
            {emailError && (
              <div style={styles.emailError}>Please add an "@" in email address!</div>
            )}

            <h4 className='row'>Message</h4>
            <input
              name="message"
              type="text"
              className='row'
              style={styles.inputFormMessage}
              onBlur={handleBlur}
            />
            
            {messageError && (<h4 className="text-center" style={styles.messageError}>* All fields are required</h4>)}

            <button style={styles.button} className="row mx-auto px-3 py-1" type="submit">Submit</button>

            {emailSuccess && (<h4 className="text-center" style={styles.messageSuccess}>Email Submitted!</h4>)}

          </form>
      </div>
      </>
      
    );
  }
  