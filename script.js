function revealLetter() {
    let letter = document.getElementById("letter");
    letter.style.display = "block";
    setTimeout(() => {
        letter.style.opacity = "1";
    }, 100);
}

// Heart Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
