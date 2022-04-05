
// Script para parecer e desaparecer Acesso Logado
const acesso = document.querySelector("#show-acesso")
const hiddenAcesso = document.querySelector("#hidden-acesso")
console.log("Acesso", acesso)
console.log("hidden", hiddenAcesso)

acesso.addEventListener("click", function(){
    hiddenAcesso.classList.remove("hidden")
    acesso.classList.add("hidden")
})

// mudar para o botão X do Acesso Logado
hiddenAcesso.addEventListener("click", function(){
    hiddenAcesso.classList.add("hidden")
    acesso.classList.remove("hidden")

})

//Scrip de timer e rotação do banner
let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)