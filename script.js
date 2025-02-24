document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");

    // Preload sounds
    const sounds = {};
    keys.forEach(key => {
        const soundSrc = key.getAttribute("data-sound");
        sounds[key.dataset.key] = new Audio(soundSrc);
    });

    function playSound(key) {
        const sound = sounds[key];
        if (sound) {
            sound.currentTime = 0; // Restart sound immediately
            sound.play();
        }
    }

    // Detect whether the user is on a touch device
    const isTouchDevice = "ontouchstart" in window;

    keys.forEach(key => {
        if (isTouchDevice) {
            key.addEventListener("touchstart", (e) => {
                e.preventDefault(); // Prevent additional click event
                playSound(key.dataset.key);
            });
        } else {
            key.addEventListener("click", () => playSound(key.dataset.key));
        }
    });

    document.addEventListener("keydown", (e) => {
        if (sounds[e.key.toUpperCase()]) {
            playSound(e.key.toUpperCase());
        }
    });
});