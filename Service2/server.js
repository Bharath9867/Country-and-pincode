const express = require("express");
var request = require('request');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
const port= 3002;

app.get("/api/pincode/625003",(req, res) => {
    var name = req.params.id;
    console.log(name);
    
    const url = "https://api.postalpincode.in/pincode/"+name;
    console.log(url)
    request( url,
  
      function (error, response, body) {
  
          if (!error && response.statusCode == 200) {
  
              res.send(body);
  
          } else {
  
              res.send(body);
  
          }
  
      });
      app.get("/",(req, res) => {
          console.log("here");
      })
app.listen(3008,'0.0.0.0', function () {
  console.log('Example app listening at http://localhost:3008')
})