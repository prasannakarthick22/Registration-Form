var express=require("express")
var bodyPaser=require("body-parser")
var mongoose=require("mongoose")

const app=express()
 
app.use(bodyPaser.json())
app.use(express.static('public'))
app.use(bodyPaser.urlencoded({
    extenxded:true
}))

mongoose.connect('mongodb://localhost:27017/Database')
var db=mongoose.connection
db.on('error',()=> console.log("Error in connecting to database"))
db.once('open',()=> console.log("Connected to database"))

app.post("/Sign_up",(req,res)=> {
    var name=req.body.name
    var age=req.body.age
    var email=req.body.email
    var phonenumber=req.body.phonenumber
    var gender=req.body.gender
    var password=req.body.password

    var data={
        "name":name,
        "age":age,
        "email":email,
        "photo":photo,
        "gender":gender,
        "password":password
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record inserted Successfully")
    })
    return res.redirect('Signup_success.html')
})

app.get("/",(req,res) => {
    res.set({
        "allow-acces-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(3000);
 
 console.log("Listening on port 3000");

