window.onload = function () {
  document.getElementById("title").style.fontSize = "60px";
};

headerClick = document.querySelector("#titleBanner h1");

headerClick.onclick = function () {
  headerClick.classList.toggle("click");
};

liClick = document.querySelector("div#ingredients");
liClick.onclick = function () {
  liClick.classList.toggle("ingClicked");
};

liClick2 = document.querySelector("div#equipment");
liClick2.onclick = function () {
  liClick2.classList.toggle("equipClicked");
};

liClick3 = document.querySelector("div#directions");
liClick3.onclick = function () {
  liClick3.classList.toggle("dirClicked");
};

x = document.getElementById("thanks");
x.innerHTML = "Hope you enjoy your meal!";
x.style.fontSize = "50px";
x.style.fontFamily = "Bebas Neue";
x.style.textAlign = "center";
