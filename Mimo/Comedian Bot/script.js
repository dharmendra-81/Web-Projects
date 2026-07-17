let jokeButton = document.getElementById('requestJokeButton');
let jokeIndex = 0;
let jokes = [
  ["What did 0 say to 8?", "Nice belt."],
   ["If the internet is a boat, where would they park it?", "Google doc."]
];
let chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText){
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  chatContent.appendChild(messageDiv);
  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  messageDiv.appendChild(avatar);
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.appendChild(contentDiv);
}

appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");

function requestJoke(){
  appendUserMessage();
  setTimeout(function() {
    appendBotMessage("Ok, got one.");
  }, 1000);
  setTimeout(function(){
    appendBotMessage(jokes[jokeIndex][0]);
  }, 1500);
  setTimeout(function(){
    appendBotMessage(jokes[jokeIndex][1]);
    jokeButton.style.display = "inline-block";
    jokeIndex++;
  }, 2000);
  if(jokeIndex >= jokes.length){
    appendBotMessage("Sorry, I'm out of jokes for now!");
    return;
  }
  jokeButton.style.display = "none";
} 

function appendUserMessage(){
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  chatContent.appendChild(messageDiv);
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  messageDiv.appendChild(avatar);
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";
  messageDiv.appendChild(contentDiv);
}
