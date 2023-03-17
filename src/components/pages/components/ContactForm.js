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
    marginBottom: '30px',
    borderRadius: '18px',
    border: 'none',
    padding: '20px',
    width: '100%',
    // height: '15px'
  },
  inputFormMessage : {
    marginBottom: '30px',
    borderRadius: '18px',
    border: 'none',
    padding: '20px',
    width: '500px',
    height: '300px'
  },
  button: {  
    backgroundColor:'#18165A',
    color: 'white',
    marginBottom: '30px',
    borderRadius: '18px',
    border: 'none',
    padding: '5px'
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
    color: '#18165A',
    fontStyle: 'italic'
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

      console.log(name,email,msg)
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

    };
    return (
      <>
      <div className='row' >
        <div className="mx-auto p-lg-4 border-radius-card"  style={styles.contactForm}>
          <div className="row text-center card-title-size" style={styles.contactName}>Contact</div>
          <form ref={form} className="form justify-content-center mx-auto" style={{fontSize: "28px"}} onSubmit={handleFormSubmit}>
            <div className='row'>Name</div>
            <input
              name="name"
              type="text"
              className='row'
              style={styles.inputForm}
              onBlur={handleBlur}
            />
            <div className='row'>Email</div>
           
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

            <div className='row'>Message</div>
            <input
              name="message"
              type="text"
              className='row'
              style={styles.inputFormMessage}
              onBlur={handleBlur}
            />
            
            {messageError && (<div className="text-center" style={styles.messageError}>All fields are required</div>)}

            <button style={styles.button} className="row mx-auto" type="submit">Submit</button>

            {emailSuccess && (<div className="text-center" style={styles.messageSuccess}>Email Submitted!</div>)}

          </form>

        </div>
        
      </div>
      </>
      
    );
  }
  