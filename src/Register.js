import React, {  Component } from "react";

export default class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName:"",
            lastName:"",
            contact:"",
            email:"",
            password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        const {firstName,lastName,contact,email,password} = this.state;
        console.log(firstName,lastName,contact,email,password);
        fetch("http://localhost:4000/Register",{
            method:"POST",
            crossDomain: true,
            headers:{
                "content-type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":""
            },
            body:JSON.stringify({
                firstName,
                lastName,
                contact,
                email,
                password,
            }),

        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userRegister");
            if(data.status === "ok"){
                alert("User Successfully Registered")
                const addToCache = (cacheName, url, response) => {
                    const data = new Response(JSON.stringify(response))

                    if('caches' in window){
                        caches.open(cacheName).then((cache) => {
                            cache.put(url, data);
                            alert("Cache")
                        });
                    }
                }
            }
            else{
                alert("User Already Exixt")
            }
        });
    }

    render(){
        return(
            <div className="auto-form-container">
                <h1>Registration Form</h1>
                <form className="register-form" onSubmit={this.handleSubmit}>
    
                    <label>First Name</label>
                    <input   
                        onChange={(e) => this.setState({firstName:e.target.value})} 
                        placeholder="John" 
                        name="firstName" 
                        id="firstName"
                        required/>
    
                    <label>Last Name</label>
                    <input  
                        onChange={(e) => this.setState({lastName:e.target.value})} 
                        placeholder="Doe" 
                        name="lastName" 
                        id="lastName"
                        required/>
                    
                    <label>Contact</label>
                    <input  
                        onChange={(e) => this.setState({contact:e.target.value})} 
                        placeholder="1234567890" 
                        name="contact" 
                        id="contact"
                        required/>
    
    
                    <label>Email</label>
                    <input  
                        onChange={(e) => this.setState({email:e.target.value})} 
                        type="email" 
                        placeholder="john3@gmail.com" 
                        id="emial" 
                        name="email"
                        required/>
    
                    <label>Password</label>
                    <input   
                        onChange={(e) => this.setState({password:e.target.value})} 
                        type="password" 
                        placeholder="***********" 
                        id="password" 
                        name="password"
                        required/>
    
                    <button className="button1" type="submit" onClick={() => this.addToCache('myCache','http://localhost:3000/Register','Sample')}>Sign Up</button>

                    <p><a href="/Sticky-Subscription">Already Have an Account</a></p>
    
                    {/* <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an acount?</button> */}
                </form>
            </div>
        );

    }
}



// function Register(props)  {

//     const [email, setEmail] = useState('');
//     const [pass, setpass] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [contact, setContact] = useState('');


   

    
// }
// export default Register;