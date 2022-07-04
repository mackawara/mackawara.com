const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
//const multer = require("multer");
const { dirname } = require("path");
const axios=require("axios").default


// server config
const app = express();
const PORT = process.env.PORT || 5000;

//validation
const { validationRules, validate } = require("./middleware/validation");

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//wit ai
const serverToken=process.env.WITSERVERACCESSTOKEN


app.post("/chatmessage", validationRules(), validate, async (req, res, next) => {
  console.log(req.body);
  
  const encodedChat = encodeURIComponent(req.body.message);
  const uri = "https://api.wit.ai/message?v=20220622&q=" + encodedChat;
  const auth = "Bearer " + serverToken;
  const chat = await fetch(uri, { headers: { Authorization: auth } })
  console.log(chat.json())


  const send = async () => {
    axios({
      method: "POST", // Required, HTTP method, a string, e.g. POST, GET
      url:uri,
      data:encodedChat,
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        console.log("message sent successfuly");
        console.log(data.headers);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  
  res.status(200).send(chat);

});
