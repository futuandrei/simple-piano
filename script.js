document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");

    // Preload sounds into a dictionary
    const sounds = {};
    keys.forEach(key => {
        const soundSrc = key.getAttribute("data-sound");
        sounds[key.dataset.key] = new Audio(soundSrc);
    });

    keys.forEach(key => {
        key.addEventListener("click", () => playSound(key.dataset.key));
    });

    document.addEventListener("keydown", (e) => {
        if (sounds[e.key.toUpperCase()]) {
            playSound(e.key.toUpperCase());
        }
    });

    function playSound(key) {
        const sound = sounds[key];
        if (sound) {
            sound.currentTime = 0; // Restart the sound instantly
            sound.play();
        }
    }
});