document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");

    keys.forEach(key => {
        key.addEventListener("click", () => playSound(key));
    });

    document.addEventListener("keydown", (e) => {
        const key = document.querySelector(`.key[data-key="${e.key.toUpperCase()}"]`);
        if (key) playSound(key);
    });

    function playSound(key) {
        const sound = new Audio(key.getAttribute("data-sound"));
        sound.currentTime = 0; // Restart sound on repeated press
        sound.play();
        key.classList.add("active");
        setTimeout(() => key.classList.remove("active"), 200);
    }
});