let display = document.querySelector('.display')
let nextButton = document.querySelector('#next');
let fizzButton = document.querySelector('#fizz');
let buzzButton = document.querySelector('#buzz');
let FizzBuzzButton = document.querySelector('#fizzBuzz');
let restart = document.querySelector('#restart');

let currentNumber = 0

function isFizz() {
    return currentNumber % 3 === 0 && currentNumber !== 0;
}

function isBuzz() {
    return currentNumber % 5 === 0 && currentNumber !== 0
}

// innerText change from "Start" to "Next"
nextButton.addEventListener("click", function () {
    nextButton.textContent = "Next"
})

restart.addEventListener("click", function () {
    currentNumber = 1;
    display.innerHTML = currentNumber;
})

nextButton.addEventListener("click", function increment() {
    if (
        isFizz() || isBuzz()
    )
        fail();
    else {
        currentNumber++;
        display.innerHTML = currentNumber;
        console.log(currentNumber);
    }
});
// if the shown number is fizz or buzz or fizzbuzz and the correct button gets hit
fizzButton.addEventListener("click", function () {
    if (isFizz() && isBuzz()) {
        fail();
    }
    else if (isFizz()) {
        success();
    }
    else {
        fail();
    }
});

buzzButton.addEventListener("click", function () {
    if (isFizz() && isBuzz()) {
        fail();
    }
    else if (isBuzz()) {
        success();
    }
    else {
        fail();
    }
});

FizzBuzzButton.addEventListener("click", function () {
    if (isFizz() && isBuzz()) {
        success();
    }
    else {
        fail();
    }
});


let timer;


function success() {
    display.innerHTML = "👌"
    confetti();
    clearTimeout(timer);
    timer = setTimeout(() => {
        currentNumber++;
        display.innerHTML = currentNumber;
    }, 1000);
}

function fail() {
    display.innerHTML = "💩";
    clearTimeout(timer);
    timer = setTimeout(() => {
        display.innerHTML = currentNumber;
    }, 1000);

}

