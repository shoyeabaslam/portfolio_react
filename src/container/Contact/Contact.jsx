import {React,useState} from 'react'
import './Contact.scss'
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImLocation2 , ImCancelCircle } from 'react-icons/im';
import { HiMail, HiPhone } from 'react-icons/hi';
import { MdDoneAll} from 'react-icons/md';



const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form)
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxlV6kUGCU8iLmqKPJN8LIID2501-LyC4zV0Hl4NhhfcHtYhNKyLRJoPI8S2aRVZsY/exec';
      
        try {
            setSuccess('Loading...')
          const formData = new FormData(form);
          const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
          });
          
      
          if (response.ok) {
            console.log('Form submitted successfully!');
            setSuccess(<>Sent Succesfully <MdDoneAll/></>);
            setTimeout(()=>{
                setSuccess('');
                },4000);
            setName('');
            setEmail('');
            setMessage('');
          } else {
            console.error('Form submission failed.');
            setSuccess(<>Failed to Send <ImCancelCircle/></>);
            setTimeout(()=>{
            setSuccess('');
            },4000)
            setName('');
            setEmail('');
            setMessage('');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      }




    return (
        <div id='contact' className='contact-container'>
            <h1>Contact</h1>
            <div className="container">
                <span className="big-circle"></span>
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">Let's get in touch</h3>
                        <p className="text">
                            Whether you have a question about my projects, want to discuss a collaboration, or just want to say hello, I'm always happy to hear from you. Drop me a line and let's build something amazing together.
                        </p>

                        <div className="info">
                            <div className="information">

                                <p><ImLocation2 /> Hyderabad,India</p>
                            </div>
                            <div className="information">
                                <p><HiMail /> shoyeab07@gmail.com</p>
                            </div>
                            <div className="information">
                                <p><HiPhone /> +918309644110</p>
                            </div>
                        </div>

                        <div className="social-media">
                            <p>Connect With Me :</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/shoyeab/" target='_blank' rel="noreferrer">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://github.com/shoyeabaslam" target='_blank' rel="noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/princeshoyeab/" target='_blank' rel="noreferrer">
                                    <FaInstagram />
                                </a>
                                <a href="https://wa.me/+918309644110" target='_blank' rel="noreferrer">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form onSubmit={handleSubmit} autoComplete="off">
                            <h3 className="title">Contact Me :</h3>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="Name"
                                    className="input"
                                    placeholder="Name"
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                            </div>
                            <div className="input-container">
                                <input
                                    type="email"
                                    name="Email"
                                    className="input"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="input-container textarea">
                                <textarea
                                    name="Message"
                                    className="input"
                                    placeholder="Message"
                                    value={message}
                                    onChange={handleMessageChange}
                                    required
                                ></textarea>
                            </div>
                            <p className='form-status-display-class'>{success}</p>

                            <div className='form-submit-btn'>
                            <input type="submit" value="Send" className="btn" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact