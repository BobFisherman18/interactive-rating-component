const RATE1BUTTON = document.getElementById('rate1');
const RATE2BUTTON = document.getElementById('rate2');
const RATE3BUTTON = document.getElementById('rate3');
const RATE4BUTTON = document.getElementById('rate4');
const RATE5BUTTON = document.getElementById('rate5');
let buttonsClicked = document.querySelectorAll(`span`);


    for (let i = 0; i < buttonsClicked.length; i++) {
        buttonsClicked[i].addEventListener('click', event => {
            switch(buttonsClicked[i].textContent) {

                case "1":
                //Button 1 Clicked
                RATE1BUTTON.style.backgroundColor = "hsl(25, 97%, 53%)";
                RATE1BUTTON.style.color = " hsl(0, 0%, 100%)";
                localStorage.setItem("rating", "1");
                localStorage.setItem("rateDesc", "We're sorry about the poor experience. Please tell us what we can do to better ourselves.");
            
                //All Buttons NOT clicked
                RATE2BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE2BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE3BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE3BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE4BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE4BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE5BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE5BUTTON.style.color = "hsl(217, 12%, 63%)";
                break;

                case "2":
                //Button 2 Clicked
                RATE2BUTTON.style.backgroundColor = "hsl(25, 97%, 53%)";
                RATE2BUTTON.style.color = " hsl(0, 0%, 100%)";
                localStorage.setItem("rating", "2");
                localStorage.setItem("rateDesc", "We're sorry about the poor experience. Please tell us what we can do to better ourselves.");

                //All Buttons NOT clicked
                RATE1BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE1BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE3BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE3BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE4BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE4BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE5BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE5BUTTON.style.color = "hsl(217, 12%, 63%)";
                break;

                case "3":
                //Button 3 Clicked
                RATE3BUTTON.style.backgroundColor = "hsl(25, 97%, 53%)";
                RATE3BUTTON.style.color = " hsl(0, 0%, 100%)";
                localStorage.setItem("rating", "3");
                localStorage.setItem("rateDesc", "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!");
                

                //All Buttons NOT clicked
                RATE1BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE1BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE2BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE2BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE4BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE4BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE5BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE5BUTTON.style.color = "hsl(217, 12%, 63%)";
                break;

                case "4":
                //Button 4 Clicked
                RATE4BUTTON.style.backgroundColor = "hsl(25, 97%, 53%)";
                RATE4BUTTON.style.color = " hsl(0, 0%, 100%)";
                localStorage.setItem("rating", "4");
                localStorage.setItem("rateDesc", "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!");

                //All Buttons NOT clicked
                RATE1BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE1BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE2BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE2BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE3BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE3BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE5BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE5BUTTON.style.color = "hsl(217, 12%, 63%)";
                break;

                case "5":
                //Button 5 Clicked
                RATE5BUTTON.style.backgroundColor = "hsl(25, 97%, 53%)";
                RATE5BUTTON.style.color = " hsl(0, 0%, 100%)";
                localStorage.setItem("rating", "5");
                localStorage.setItem("rateDesc", "Thank you for the perfect score!! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!");

                //All Buttons NOT clicked
                RATE1BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE1BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE2BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE2BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE3BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE3BUTTON.style.color = "hsl(217, 12%, 63%)";
                RATE4BUTTON.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
                RATE4BUTTON.style.color = "hsl(217, 12%, 63%)";
                break;
            }
        })
    }