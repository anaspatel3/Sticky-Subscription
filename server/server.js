require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const UserInfoRoutes = require('./Routes/userInfo')
require("./userDetails");
const app = express()
app.use(express.json())
const cors = require("cors");
app.use(cors());
const jwt = require("jsonwebtoken");

//const bcrypt = require("bcryptjs");
//Express App

// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next();
// })

const JWT_SEC = "sdjhfbdfbsfreferg";

app.get('/', (req, res) => {
    res.json({mssg: 'welcom'})
})

app.post('/post', async(req,res) =>{
    console.log(req.body);
})


app.use('/api/userInfo',UserInfoRoutes)





 
const user = mongoose.model("userDetails")





//Register API
app.post("/register", async(req,res) => {

    const {firstName,lastName,contact,email,password} = req.body;

    //const encryptedPass = await bcrypt.hash(password,8);
    try {
        const oldUser = await user.findOne({email});

        if(oldUser){
            return res.send({error: "User Already Exist"})
        }
        await user.create({
            firstName,
            lastName,
            contact,
            email,
            password,
        });
        res.send({status:"ok"})
    } catch (error) {
        res.send({status:"error"})
    }
}); 
    

//Login API
app.post("/login", async(req, res) => {

    const {email, password} = req.body

    try {
        const Euser = await user.findOne({ email });
        if(!Euser){
            
             return res.json({status:"noData", error: "User Not Found"})
        }
        const token = jwt.sign({}, JWT_SEC);

        if(Euser.password == password){
            return res.json({status: "ok", data: token})
            
             
        }
        else{
            return res.json({status:"invalidPass", error:"Invalid Pass"});
            
            
        }
        
        
    } catch (error) {
        return res.json({status:"error"});
    }
        
        
 
    

    
    
    
});



//Connect to DB
mongoose.connect(process.env.MONGO_URI,{
}).then(() => {
    //Listen for request
    app.listen(process.env.PORT, () => {
        console.log('Connected To DB and Listening on 4000!!')
    })

})
.catch((error) => {
    console.log("Error occured",error) 
})