let display = document.querySelector('.display')
let nextButton = document.querySelector('#next');
let fizzButton = document.querySelector('#fizz');
let buzzButton = document.querySelector('#buzz');
let FizzBuzzButton = document.querySelector('#fizzBuzz');



nextButton.addEventListener("click", function increment() {
    let currentNumber = display.value = parseInt(display.value) + 1;
    console.log(currentNumber)
});
// if the shown number is fizz or buzz or fizzbuzz and the correct button gets hit
fizzButton.addEventListener("click", function () {
    if (display.value % 3 === 0) { success(); }
    else (display.value = "Ouch")
    return
});

buzzButton.addEventListener("click", function () {
    if (display.value % 5 === 0) success();
    else (display.value = "Ouch")
});

FizzBuzzButton.addEventListener("click", function () {
    if (display.value % 3 === 0 && display.value % 5 === 0) success();
    else (display.value = "Ouch")
})


function success() {
    display.value = "Yay"
    confetti();
}

function fail() {
    display.value = "Ouch"
}


function fizzbuzz() {
    for (let i = 1; i <= 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) display.value = "FizzBuzz";
        else if (i % 5 === 0) display.value = "Buzz";
        else if (i % 3 === 0) display.value = "Fizz";
        else (display.value = i + " ");
    };
}
// fizzbuzz();

