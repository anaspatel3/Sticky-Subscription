import React, {  Component } from "react";

export default class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        console.log(email,password);

        fetch("http://localhost:4000/Login",{
            method:"POST",
            crossDomain: true,
            headers:{
                "content-type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":""
            },
            body: JSON.stringify({
                email,
                password,
            }),

        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userRegister");
            if(data.status === "ok") {
                alert("login Success")
                window.localStorage.setItem("token",data.data)
                
                window.location.href="/Homepage";

            }
            else if(data.status === "error"){
                alert("User Not Found")
            }
            else if(data.status === "Invalid"){
                alert("Invalid Password")
            }
        });

    }
    render(){
        return(
            <div className="auto-form-container">
                <h1>Login Form</h1>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input   
                        onChange={(e) => this.setState({email:e.target.value})} 
                        type="email" 
                        placeholder="anas3@gmail.com" 
                        id="emial" 
                        name="email"
                        required/>

                    <label>Password</label>
                    <input  
                        onChange={(e) => this.setState({password:e.target.value})} 
                        type="password" 
                        placeholder="***********" 
                        
                        
                        required/>

                    <button className="button1" type="submit">Log In</button>

                    {/* <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Dont have an acount</button> */}
                    <p><a href="/Register">Dont Have an Account</a></p>
                </form>
                
            </div>
        
        );
    }

}