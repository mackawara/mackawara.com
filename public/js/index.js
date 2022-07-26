window.addEventListener("DOMContentLoaded", async () => {
  //const test = fetch("/chat", "<script>console.log(hacked)</script>");

  const chatbotFormWrapper = document.getElementById("chatbotForm");
  document.getElementById("chatbot").addEventListener("click", () => {
    chatbotFormWrapper.style.display = "flex";
  });
  document.getElementById("closeChat").addEventListener("click", () => {
    chatbotFormWrapper.style.display = "none";
  });

  const chatForm = document.getElementById("chatForm");
  chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const message = chatForm.querySelector("textarea").value;
    const wrapper = document.querySelector(".chat-wrapper");
    const user = document.querySelector("#user");
    user.style.display = "grid";
    document.querySelector("#user-msg").innerText = message;
    const time = new Date.UTC();
    document.querySelector(".time-left").innerText = "11:02";

    // chatBot.innerHTML = "<h4>MAc</h4>";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      redirect: "follow",
      body: JSON.stringify({ message: message }),
    };
    const responseMsg = await fetch("/chat", options).then((res) => res.json());
    const botres = document.getElementById("response");
    const chatBot = document.getElementById("chatBot");
    chatBot.style.display = "grid";
    botres.innerText = responseMsg.response;

    console.log(responseMsg.response);
    /*  const CLIENT_TOKEN = "R2ZXCPRCKAE7KG6I4QKS2GYAQ4FAMAPN";

    const encodedChat = encodeURIComponent(message);
    const uri = "https://api.wit.ai/message?v=20220622&q=" + encodedChat;
    const auth = "Bearer " + CLIENT_TOKEN;
    fetch(uri, { headers: { Authorization: auth } })
      .then((res) => {
        res.json();
        console.log(res.json());
      })
      .then((res) =>
        res.intents.forEach((intentloop) => {
          console.log(res.intents);
          const intent = intentloop.name;
          console.log(intent);
          if (intent === "identity") {
            response.innerText = "my name is Mac Kawara";
          } else if (intent === "pricing") {
            console.log(
              "My pricing is competetive but actual figures can only be arrived at after consultation and scope are discussed"
            );
          }
        })
      )
      .catch((err) => console.log(err)); */
  });
});
