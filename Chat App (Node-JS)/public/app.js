let socket = io();
let form = document.getElementById("form");
let myname = document.getElementById("myname");
let message = document.getElementById("message");
let messageArea = document.getElementById("messageArea");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (message.value) {
    socket.emit("send name", myname.value);
    socket.emit("send message", message.value);
    message.value = "";
  }
});

socket.on("send name", (username) => {
  let name = document.createElement("span");
  name.style.width = "content-fit";
  name.style.textAlign = "center";
  name.style.color = "#a1a1aa";
  name.style.fontWeight = "600";
  name.textContent = username + " :";
  messageArea.appendChild(name);
});

socket.on("send message", (chat) => {
  let chatContent = document.createElement("p");
  chatContent.textContent = chat;
  chatContent.style.color = "white";
  messageArea.appendChild(chatContent);
});
