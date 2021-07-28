var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("bodyId");
var h3 = document.getElementById("colorValue");

function changeColor(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    // h3.innerHTML = body.style.background;
    //or
    h3.textContent = body.style.background;
}

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);