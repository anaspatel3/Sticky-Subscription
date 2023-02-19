import { useState } from "react";

function Register(props)  {

    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contact, setContact] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auto-form-container">
            <h1>Registration Form</h1>
            <form className="register-form" onSubmit={handleSubmit}>

                <label htmlFor="firstName">First Name</label>
                <input  value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="John" name="firstName" id="firstName"/>

                <label htmlFor="lastName">Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" name="lastName" id="lastName"/>
                
                <label htmlFor="contact">Contact</label>
                <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="1234567890" name="contact" id="contact"/>


                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="john3@gmail.com" id="emial" name="email"/>

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setpass(e.target.value)} type="password" placeholder="***********" id="password" name="password"/>

                <button className="button1" type="submit">Sign Up</button>

                <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an acount?</button>
            </form>
            
        </div>
        

        

    );

}

export default Register;