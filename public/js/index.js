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
    const responseMsg = await (await fetch("/chatmessage", options)).json();
    const response = document.getElementById("response");
    response.innerText = responseMsg.response;
    console.log(responseMsg.response);
  });
  
});
