//const intentsArray = require("../chatbotAssetsassets");
const macKawara = require("../assets/mackawara");
const chatBot = (intents, entity, confidence) => {
  for (const any of Object.keys(macKawara)) {
    const keysRegex = new RegExp(any, "i");
    const values=macKawara[any]
    const valuesRegex=new RegExp(values,"i")
    /* if(keysRegex.test(intents)){
} */
    intents.forEach((intent) => {
      if (keysRegex.test(intent.name)) {
        if(valuesRegex.test())
        console.log(`These are my ${any}: ${macKawara[any]}`);
      } else console.log("no match was found");
    });
  }
};
module.exports = chatBot;
