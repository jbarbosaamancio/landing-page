var p = prompt("Digite seu nome");
var h1 = document.createElement("h1");
var home = document.getElementById("home");

h1.innerText = p;
home.appendChild(h1);
