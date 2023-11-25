let count = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;  // To keep track of the interval

let startTimer = () => {
    count++;
    minutes = Math.floor(count / 6000);
    seconds = Math.floor((count / 100) % 60);
    milliseconds = count % 100;

    document.querySelector('#minutes').innerText = (minutes < 10 ? '0' : '') + minutes;
    document.querySelector('#seconds').innerText = (seconds < 10 ? '0' : '') + seconds;
    document.querySelector('#m-seconds').innerText = (milliseconds < 10 ? '0' : '') + milliseconds;
};

let startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', () => {
    intervalId = setInterval(startTimer, 10);
    startButton.disabled = true;  // Disable the "Start" button when the timer is running
});

let stopButton = document.querySelector('#stop-btn');
stopButton.addEventListener('click', () => {
    clearInterval(intervalId);  // Stop the timer when the "Stop" button is clicked
    startButton.disabled = false;  // Re-enable the "Start" button
});

let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    startButton.disabled = false;

    // Reset the timer values and update the display
    count = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.querySelector('#minutes').innerText = '00';
    document.querySelector('#seconds').innerText = '00';
    document.querySelector('#m-seconds').innerText = '00';
});