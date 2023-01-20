function pintar(elemento, color = "green") {
    //ele = document.getElementById("ele1")
    elemento.style.backgroundColor = color
}

ele = document.getElementById("ele1")
ele.addEventListener("click", function () {
    pintar(ele, "yellow")
})
