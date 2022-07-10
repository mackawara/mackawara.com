//const intentsArray = require("../chatbotAssetsassets");
const macKawara = require("../assets/mackawara");
//const greeting = require("./");
const chatBot = (intents, entities, confidence) => {
  const entity = {};
  let entityArray = [];
  let entityName, entityRole, entityValue, intent;
  for (const any of Object.keys(entities)) {
    //extract the name role and value from entity object
    // reqProps.entity = {};
    entityName = entities[any][0].name;
    entityRole = entities[any][0].role;
    entityValue = entities[any][0].value;
  }
  entity.entityName = entityName;
  entity.entityRole = entityRole;
  entity.entityValue = entityValue;

  intents.forEach((intentElement) => {
    intent = intentElement.name;
  });
  async function sendRes(intent, entity) {
    console.log("hi how are you");
    if (intent === "greeting") {
      return "Hi , I am good thanks, how can I help you";
    }
  }
  return sendRes(intent, entity);
  // console.log(reqProps);
};
module.exports = chatBot;
