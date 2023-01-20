let color = "black"

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        /* Cambiar a color 1 */
        color = "aqua"
    }
    else if (event.key === 's') {
        /* Cambiar a color 2 */
        color = "salmon"
    }
    else if (event.key === 'd') {
        /* Cambiar a color 3 */
        color = "darkcyan"
    }
})

let uno = document.querySelector("#uno")
let dos = document.querySelector("#dos")
let tres = document.querySelector("#tres")
let cuatro = document.querySelector("#cuatro")

uno.addEventListener("click", () => uno.style.backgroundColor = color)
dos.addEventListener("click", () => dos.style.backgroundColor = color)
tres.addEventListener("click", () => tres.style.backgroundColor = color)
cuatro.addEventListener("click", () => cuatro.style.backgroundColor = color)