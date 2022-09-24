// Make connection
var socket = io.connect("wss://shanay-chatapp.herokuapp.com/");

// Query DOM
var message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  output = document.getElementById("output");
chatWindow = document.getElementById("chat-window");

// Emit events
btn.addEventListener("click", function () {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
    hours: hour,
    minutes: minute,
  });
  message.value = "";
});

// Listen for events
socket.on("chat", function (data) {
  output.innerHTML +=
    "<p><strong>" +
    data.handle +
    ": </strong>" +
    data.message +
    "</p><p>" +
    data.hours +
    ": " +
    data.minutes +
    "</p><br>";
  chatWindow.scrollTop = 16000;
});
