$(document).ready(function(){
  $(".slider").bxSlider();
});

let links = document.querySelectorAll(".scroll");
let targetID;
links.forEach(function (element) {
    element.addEventListener("click", function (event) {
        event.preventDefault();
        targetID = element.getAttribute("href");
        document.querySelector(targetID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

let acsolot = document.querySelector(".clicksolot");
let scoreNumber = document.querySelector(".score")

let score = 0
let clickPower = 1

acsolot.addEventListener("click", function () {
    score += clickPower;
    scoreNumber.innerHTML = "Счёт: " + score;
});

