const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
//const multer = require("multer");
const { dirname } = require("path");


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


app.post("/chatmessage", validationRules(), validate, (req, res, next) => {
  console.log(req.body);
  res.status(200).send({ response: "thank you for your message ." });

  const encodedChat = encodeURIComponent(req.body.message);
    const uri = "https://api.wit.ai/message?v=20220622&q=" + encodedChat;
    const auth = "Bearer " + serverToken;
    const chat = fetch(uri, { headers: { Authorization: auth } })
      .then((res) => res.json())
      .then((res) => console.log(res))

});
