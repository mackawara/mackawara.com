//const intentsArray = require("../chatbotAssetsassets");
const macKawara = require("../assets/mackawara");
const chatBot = (intents, entities, confidence) => {
  const reqProps = {};
  let entityArray = [];
  for (const any of Object.keys(entities)) {
    //extract the name role and value from entity object
    reqProps.entity = {};
    reqProps.entity.name = entities[any][0].name;
    reqProps.entity.role = entities[any][0].role;
    reqProps.entity.value = entities[any][0].value;
  }

  intents.forEach((intent) => {
    reqProps.intent = intent.name;
  });
  console.log(reqProps);
};
module.exports = chatBot;
