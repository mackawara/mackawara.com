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
    const role = entity.entityRole,
      value = entity.entityValue,
      entityName = entity.entityName;
    const leadIam = `I am`;
    const hChU = `How can I help you`;
    console.log(role, value, entityName);
    console.log("hi how are you");
    if (intent === "greeting") {
      return "Hi , I am good thanks, how can I help you";
    } else if (intent === "pricing") {
      return "Thank you, for your enquiry, We can get back to you with a quote once the scope of work is fully established . Please leave your details so that my human can get back to you";
    } else if (intent === "projects") {
      if (value === "current projects")
        return `I am currently working on these projects ${macKawara.projects.inProgress} `;
      else if (value == "completed projects") {
        `Checkout these completed  projects from my repo ${macKawara.projects.completed} `;
      } else {
        `I have a few games that I have built are ${macKawara.projects.games}`;
      }
    } else if (intent === "identity") {
      return `Hi, I am ${macKawara.identity.name} from ${macKawara.identity.location} .${hChU}`;
    } else if (intent === "strengths") {
      return `My strengths are ${macKawara.ability}`;
    } else if (intent === "job_opportunities") `${macKawara.jobOpportunities}`;
    // console.log(reqProps);
  }
  return sendRes(intent, entity);
};
module.exports = chatBot;
