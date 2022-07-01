window.addEventListener("DOMContentLoaded", async () => {
  const chatbotFormWrapper = document.getElementById("chatbotForm");
  document.getElementById("chatbot").addEventListener("click", () => {
    chatbotFormWrapper.style.display = "flex";
  });
  document.getElementById("closeChat").addEventListener("click", () => {
    chatbotFormWrapper.style.display = "none";
  });

  const chatForm = document.getElementById("chatForm");
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = chatForm.querySelector("textarea").value;
    console.log(message);
  });
});
