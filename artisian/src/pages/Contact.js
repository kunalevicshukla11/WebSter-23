import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y2mnrea', 'template_lyr65x7', form.current, '6t_kDo7uQEGYqjMpK')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div style={containerStyle}>
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail} style={formStyle}>
        <label style={labelStyle}>Name</label>
        <input type="text" name="from_name" style={inputStyle} />
        <label style={labelStyle}>Email</label>
        <input type="email" name="from_email" style={inputStyle} />
        <label style={labelStyle}>Message</label>
        <textarea name="message" style={inputStyle} />
        <input type="submit" value="Send" style={buttonStyle} />
      </form>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  height: '100vh',
  margin: 'auto',
  backgroundColor: 'var(--background-color)',
  color: 'var(--text-color)',
};

const formStyle = {
  maxWidth: '400px',
  padding: '20px',
  border: '2px solid #333',  // Add a 2px solid border around the form
  borderRadius: '5px',
  backgroundColor: 'var(--form-background)',
};

const labelStyle = {
  display: 'block',
  margin: '10px 0',
  color: 'var(--text-color)',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  margin: '5px 0',
  boxSizing: 'border-box',
  border: '2px solid #333',
};

const buttonStyle = {
  backgroundColor: 'var(--button-background)',
  color: 'var(--button-text-color)',
  padding: '10px 15px',
  border: '2px solid #333',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Contact;
