require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const subRoutes = require('./Routes/subscriptions')
const userRoutes = require('./Routes/user')

const userDat = require("./models/userDetails")

const app = express()
const cors = require("cors");
app.use(cors());
//Bcrypt
const bcrypt = require("bcryptjs");
//Json Web Token
const jwt = require("jsonwebtoken");
//Middleware
app.use(express.json())













const JWT_SEC = "sdjhfbdfbsfrq3243fss()YT6rdrgeferg";

app.post('/post', async(req,res) =>{
    console.log(req.body);
})


app.use('/api/subscriptions',subRoutes)
app.use('/api/user',userRoutes)





//Redis 
const redis = require('redis');

const redisClient = redis.createClient(6379,'127.0.0.1');

redisClient.connect().then(() =>{
    redisClient.on('error', (err) => {
        console.log("Error occured while connecting Redis")
    })
    console.log("Listening on Redis also"); // OK

 
});




 
const user = mongoose.model("userDetails")

//Register API
app.post("/register", async(req,res) => {

    const {firstName,lastName,contact,email,password} = req.body;

    const encryptedPass = await bcrypt.hash(password,8);
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
            password:encryptedPass,
        });

           
        redisClient.set('firstname', firstName, function(err, reply) {
          });
          console.log("Data cached successfully")
          res.send({status:"ok"})

    } catch (error) {
        res.send({status:"error"})
    }
}); 
    

//Login API
app.post("/login", async(req, res) => {

    const {email, password} = req.body

    const Euser = await user.findOne({ email });
    if(!Euser){
        
            return res.json({status:"error", error: "User Not Found"})
    }
    

    if(await bcrypt.compare(password, Euser.password)){
        console.log("Passward correct")
        const token = jwt.sign({email: Euser.email}, JWT_SEC);  
        
        if(res.status(201)){
            return res.json({status: "ok", data: token})
        }
        else{
            return res.json({status: "error", error:"Error"})
        }
    }
    res.json({status:"Invalid", error:"Invalid Pass"});   
});


//Homepage API
app.post("/homepage", async(req, res) =>{
    const{token} = req.body;
    try {
        const huser = jwt.verify(token, JWT_SEC);
        const userEmail = huser.email;
        user.findOne({email: userEmail}).then((data) => {
            res.send({status: "ok", data: data});
            
        })
        .catch((error) =>{
            res.send({status: "error", data: error});
        })
    } catch (error) {
        
    }
})





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
