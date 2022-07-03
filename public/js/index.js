window.addEventListener("DOMContentLoaded", async () => {
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
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      redirect: "follow",
      body: JSON.stringify({ message: message }),
    };
    const responseMsg = await fetch("/chatmessage", options).then((res) =>
      res.json()
    );
    const response = document.getElementById("response");
    response.innerText = responseMsg.response;
    console.log(responseMsg.response);

    /*  const encodedChat = encodeURIComponent(message);
    const uri = "https://api.wit.ai/message?v=20220622&q=" + encodedChat;
    const auth = "Bearer " + CLIENT_TOKEN;
    const chat = fetch(uri, { headers: { Authorization: auth } })
      .then((res) => res.json())
      .then((res) => console.log(res.));*/
  });
});
