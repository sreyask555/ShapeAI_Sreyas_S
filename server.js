const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result1 = n1 + n2;
    var result2 = n1/(n1*n2)
    console.log(req.body);
    res.send("The result of calculation (Addition): " + result1 + "\n\nThe result of calculation (BMI): " + result2);
});



app.listen(3000, function(){
    console.log("Server started on port 3000");
});