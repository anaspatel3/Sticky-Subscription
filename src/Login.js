import { useState } from "react";

function Login(props)  {

    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auto-form-container">
            <h1>Login Form</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="anas3@gmail.com" id="emial" name="email"/>

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setpass(e.target.value)} type="password" placeholder="***********" id="password" name="password"/>

                <button className="button1" type="submit">Log In</button>

                <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Dont have an acount</button>
            </form>
            
        </div>
        
    );

}

export default Login;