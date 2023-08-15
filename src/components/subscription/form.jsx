
import React, { useState } from 'react';
import './form.css' ;  
import './backgroundinscri.css';
const  MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('') ; 

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Submitted data:', { name, email , phone });

    
    setName('');
    setEmail('');
    setPhone (''); 
    
  };

  return (
    <div>
      <h2 className='pre'>préinscription</h2> 
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor="name" className='label'>Nom:</label>
          <input
            type="text" 
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className='label'>adresse mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required 
            className='email'
          />
        
          <div>
  <label htmlFor="phone" className='label'> Téléphone :</label>
  <input
    type="tel"
    id="phone"
    value={phone}
    onChange={handlePhoneChange}
    required
  />
</div>

          

        </div>
        <button type="submit" className='button'>Submit</button> 
      </form>
    </div>
  );
}; 



const FormContainer = () => {
  return (
    <div className="form-container">
      <div className="background-image"></div>
      <MyForm />
    </div>
  );
};

export default FormContainer;
