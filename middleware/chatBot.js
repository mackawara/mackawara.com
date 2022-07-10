//const intentsArray = require("../chatbotAssetsassets");
const macKawara = require("../assets/mackawara");
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
    console.log(intent);
    console.log(entity.entityName, entity.entityRole, entity.entityValue);
  }
  sendRes(intent, entity);
  // console.log(reqProps);
};
module.exports = chatBot;
