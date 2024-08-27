document.getElementById("send-button").addEventListener("click", sendMessage);

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value;

    if (message) {
        appendMessage("user", message);
        userInput.value = '';
        getResponse(message);
    }
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getResponse(message) {
    let response = "I'm sorry you feel that. I hope you feel better soon. I'd recommend talking to your closed ones";

    if (message.toLowerCase().includes("hi")) {
        response = "Hi! How can I help you?";
    } 
    
    if (message.toLowerCase().includes("sad")) {
        response = "It's okay to feel sad sometimes. Talking to someone can help.";
    } else if (message.toLowerCase().includes("anxious")) {
        response = "Anxiety can be tough. Have you tried deep breathing exercises?";
    } else if (message.toLowerCase().includes("depressed")) {
        response = "I’m really sorry to hear that. Please consider talking to a professional.";
    } else if (message.toLowerCase().includes("help")) {
        response = "I'm here for you. Can you tell me more about what's bothering you?";
    }
    
    setTimeout(() => {
        appendMessage("bot", response);
    }, 1000); // Simulate a delay in response
}