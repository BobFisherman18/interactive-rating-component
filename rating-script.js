const RATE1 = document.getElementById(`rate1`);
const RATE2 = document.getElementById(`rate2`);
const RATE3 = document.getElementById(`rate3`);
const RATE4 = document.getElementById(`rate4`);
const RATE5 = document.getElementById(`rate5`);
let rateClicked = false;

RATE1.onclick = function rating1Function() {
    RATE1.style.backgroundColor = "hsl(25, 97%, 53%)";
    RATE1.style.color = " hsl(0, 0%, 100%)";
    rateClicked = true;
    if(rateClicked = true) {
        RATE2.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
        RATE2.style.color = "hsl(217, 12%, 63%)";
    }
    else if (rateClicked = true) {
        RATE3.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
        RATE3.style.color = "hsl(217, 12%, 63%)";
    }
}
RATE2.onclick = function rating2Function() {
    RATE2.style.backgroundColor = "hsl(25, 97%, 53%)";
    RATE2.style.color = " hsl(0, 0%, 100%)";
    if(rateClicked = true) {
        RATE1.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
        RATE1.style.color = "hsl(217, 12%, 63%)";
    }
    else if (rateClicked = true) {
        RATE3.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
        RATE3.style.color = "hsl(217, 12%, 63%)";
    }
}
RATE3.onclick = function rating3Function() {
    RATE3.style.backgroundColor = "hsl(25, 97%, 53%)";
    RATE3.style.color = " hsl(0, 0%, 100%)";
    if(rateClicked = true) {
        RATE1.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
        RATE1.style.color = "hsl(217, 12%, 63%)";
    }
    else if (rateClicked = true) {
        RATE2.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
        RATE2.style.color = "hsl(217, 12%, 63%)";
    }
}