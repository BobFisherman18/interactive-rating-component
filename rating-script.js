const RATE1 = document.getElementById(`rate1`).textContent;
const RATE2 = document.getElementById(`rate2`).textContent;
const RATE3 = document.getElementById(`rate3`).textContent;
const RATE4 = document.getElementById(`rate4`).textContent;
const RATE5 = document.getElementById(`rate5`).textContent;

const RATE1BUTTON = document.getElementById('rate1');
const RATE2BUTTON = document.getElementById('rate2');
const RATE3BUTTON = document.getElementById('rate3');
const RATE4BUTTON = document.getElementById('rate4');
const RATE5BUTTON = document.getElementById('rate5');
let buttonsClicked = document.querySelectorAll(`span`);


console.log(buttonsClicked);

    for (let i = 0; i < buttonsClicked.length; i++) {
        buttonsClicked[i].addEventListener('click', event => {
            switch(buttonsClicked[i].textContent) {
                case "1":
                //Button 1 Clicked
                RATE1BUTTON.style.backgroundColor = "hsl(25, 97%, 53%)";
                RATE1BUTTON.style.color = " hsl(0, 0%, 100%)";
                localStorage.setItem("rating", "1");
            
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
    $(document).ready(function(){
        $("#rate2").click(function(){
            console.log("rate 2 Clicked");
        });
      });

      function myFunction() {
        var w2 = window.open("./thank-you.html");
        w2.document.getElementById('rateDesc').innerHTML = "Hi";
        console.log(w2.document.title);
        
      }


  

/*
switch(RATE2) {
    case "1":
        RATE1BUTTON.style.backgroundColor = "hsl(25, 97%, 53%)";
        RATE1BUTTON.style.color = " hsl(0, 0%, 100%)";
        break;
    case "2":
    RATE2BUTTON.style.backgroundColor = "hsl(25, 97%, 53%)";
    RATE2BUTTON.style.color = " hsl(0, 0%, 100%)";
    break;
}


/*
RATE1.onclick = function rating1Function() {
    RATE1.style.backgroundColor = "hsl(25, 97%, 53%)";
    RATE1.style.color = " hsl(0, 0%, 100%)";
    rateClicked = true;
    if(rateClicked = true) {
        RATE2.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
        RATE2.style.color = "hsl(217, 12%, 63%)";
    }
    /*
    else if (rateClicked = true) {
        RATE3.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
        RATE3.style.color = "hsl(217, 12%, 63%)";
    }
    */
   /*
}

RATE2.onclick = function rating2Function() {
    RATE2.style.backgroundColor = "hsl(25, 97%, 53%)";
    RATE2.style.color = " hsl(0, 0%, 100%)";
    if(rateClicked = true) {
        RATE1.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
        RATE1.style.color = "hsl(217, 12%, 63%)";
    }
    /*
    else if (rateClicked = true) {
        RATE3.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
        RATE3.style.color = "hsl(217, 12%, 63%)";
    }
    */
   /*
}
/*
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
*/