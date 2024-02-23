const video = document.getElementById('myVideo');
const playButton = document.getElementById('playBtn');
const pauseButton = document.getElementById('pauseBtn');
const stopButton = document.getElementById('stopBtn');
const forwardButton = document.getElementById('forwardBtn');
const backwardButton = document.getElementById('backwardBtn');
const volumeButton = document.getElementById('volumeBtn');
const speedButton = document.getElementById('speedBtn');

playButton.addEventListener('click', () => {
    video.play();
});

pauseButton.addEventListener('click', () => {
    video.pause();
});

stopButton.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
});

forwardButton.addEventListener('click', () => {
    video.currentTime += 10;
});

backwardButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

volumeButton.addEventListener('input', () => {
    video.volume = volumeButton.value / 100;
});

speedButton.addEventListener('click', () => {
    if (video.playbackRate === 1) {
        video.playbackRate = 2;
    } else {
        video.playbackRate = 1;
    }
});