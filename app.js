const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
//const multer = require("multer");
const { dirname } = require("path");
const axios = require("axios").default;
require("dotenv").config();

// server config
const app = express();
const PORT = process.env.PORT || 5000;

//validation
const { validationRules, validate } = require("./middleware/validation");
const { identity } = require("./assets/mackawara");

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
const serverToken = process.env.WITSERVERACCESSTOKEN;

const chatBot = require("./middleware/chatBot"),
testIntents=["jobs","identity"],
testEntities= {
  ability :[
      {
          "id": "1111046773150240",
          "name": "ability",
          "role": "ability",
          "start": 49,
          "end": 61,
          "body": "are you good",
          "confidence": 1,
          "entities": {},
          "value": "Are you good",
          "type": "value"
      }
  ],
  techinical_skill: [
      {
          "id": "616654010080680",
          "name": "techinical_skill",
          "role": "library",
          "start": 39,
          "end": 48,
          "body": "languages",
          "confidence": 1,
          "entities": {},
          "value": "languages",
          "type": "value"
      }
  ]
}

//chatBot(testIntents,testEntities)
app.post(
  "/chatmessage",
  validationRules(),
  validate,
  async (req, res, next) => {
    console.log(req.body);

    const encodedChat = encodeURIComponent(req.body.message);
    const uri = "https://api.wit.ai/message?v=20220707&q=" + encodedChat;
    const auth = "Bearer " + serverToken;

    /* const chat = await fetch(uri, { headers: { Authorization: auth } })
  console.log(chat.json())
 */
   
    const send = async () => {
      axios(uri, {
        method: "GET", // Required, HTTP method, a string, e.g. POST, GET
        headers: { Authorization: auth },
      })
        .then((data) => {
          console.log("message sent successfuly");
         // console.log(toString(data.data.intents.map((element)=>element.name)));
          const intents = data.data.intents;
          console.log(intents)
          res.send(data.data)
        //  const intent=intents.forEach((element)=> {return element.name});
          const entities = data.data.entities
          const traits = data.data.traits;
          chatBot(intents,entities);
        })
        .catch((err) => {
          console.log("there was an error");
          console.log(err);
          res.send({message: "There was an error on the server , please  try again"});
        });
    };
    send();

    //res.status(200).send(chat);
  }
);
