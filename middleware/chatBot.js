//const intentsArray = require("../chatbotAssetsassets");
const macKawara = require("../assets/mackawara");
const chatBot = (intents, entities, confidence) => {
  let entityArray = [];
  for (const any of Object.keys(entities)) {
    entityArray.push(entities[any][0].name);
  }
  console.log(entityArray);

  for (const any of Object.keys(macKawara)) {
    const keysRegex = new RegExp(any, "i");
    const values = macKawara[any];
    const valuesRegex = new RegExp(values, "i");
    /* if(keysRegex.test(intents)){
} */
    entityArray.forEach((entity) => {
      if (keysRegex.test(entity) || valuesRegex.test(entity)) {
        console.log( `These are my ${any}: ${macKawara[any]}`);
        return
      }
    });
    intents.forEach((intent) => {
      if (keysRegex.test(intent.name) || valuesRegex.test(intent.name)) {
        console.log( `These are my2 ${any}: ${macKawara[any]}`);
      }
    });
  }
};

module.exports = chatBot;
