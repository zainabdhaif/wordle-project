const keys = document.querySelectorAll(".letter-key");
const letterBox = document.querySelectorAll(".letter-box");
const enterKey = document.querySelector(".enter-key");
const deleteKey = document.querySelector(".delete-key");
let wordlist = ["HAPPY", "FIRST", "TODAY"];
const wordOfTheDay = wordlist[Math.floor(Math.random() * wordlist.length)];

let noOfGuesses = 0;
let enterClicked = false;
let counterKey = 0;

deleteKey.addEventListener("click", event => {
    if (enterClicked === false) {
        let lastNonEmptyIndex = -1;
        for (let i = 0; i < letterBox.length; i++) {
            if (letterBox[i].innerText !== "") {
                lastNonEmptyIndex = i;
            }
        }

        if (lastNonEmptyIndex !== -1) {
            letterBox[lastNonEmptyIndex].innerText = "";
            letterBox[lastNonEmptyIndex].style.backgroundColor = "";
            counterKey--;
        }
    }
});

keys.forEach((key) => {
    key.addEventListener("click", event => {
        if (enterClicked) return; // Prevent key clicks after Enter is pressed

        const keyValue = event.target.innerHTML;
        if (counterKey < (noOfGuesses + 1) * 5) { // Ensure input within current guess row
            letterBox[counterKey].innerText = keyValue;
            counterKey++;
        }
    });
});

enterKey.addEventListener("click", event => {
    if (enterClicked) return;
    
    enterClicked = true;
    const start = noOfGuesses * 5;
    const end = start + 5;

    for (let i = start; i < end; i++) {
        const letter = letterBox[i].innerText;
        if (letter === wordOfTheDay.charAt(i % 5)) {
            letterBox[i].style.backgroundColor = "green";
        } else if (wordOfTheDay.includes(letter)) {
            letterBox[i].style.backgroundColor = "yellow";
        } else {
            letterBox[i].style.backgroundColor = "grey";
        }
    }

    noOfGuesses++;
    enterClicked = false; // Allow inputs for the next guess
});