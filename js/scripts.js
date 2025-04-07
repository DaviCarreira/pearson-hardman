// Selecionando elementos do menu Mobile
const menuBtn = document.querySelector("#menu") ;
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");


//Selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner");
// 
const dots = document.querySelectorAll(".dot");
//variavel de controle
let slideIndex = 1;

function showSlides(){
    console.log(slides)
    for(let i=0; i < slides.length; i++){
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    }

    slidesIndex++; // avançando a variavel
    if (slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex -1].classList.add("active")
    dots[slideIndex -1].classList.add("active")

    setTimeout(showSlides, 3000)
}

// Ativar menu-mobile
// arrow function
// () => {
// Function default
// Function () {
// })
menuBtn.addEventListener("click", (e) =>{
    menu.classList.add("menu-active")
});

closeMenuBtn.addEventListener("click", (e) =>{
    menu.classList.remove("menu-active")
});

[menuBtn, closeMenuBtn].forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        menu.classList.toggle("menu-active")-
    })
})

// Inicialização dos slides
showSlides()

















// DOM
// Navegar no documento html
//const brand = document.querySelector("#brand");

//brand.addEventListener('click', function(event){
    //  console.log("Testando o click");
    // console.log(event.target)
//    event.target.style.color ="blue";
//})