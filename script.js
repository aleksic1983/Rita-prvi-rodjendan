const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".next-btn");

const pageTurnSound = new Audio("audio/page-turn.mp3");

pageTurnSound.volume = 0.10;


const backgroundMusic = new Audio("audio/background-music.mp3");

backgroundMusic.volume = 0.05;
backgroundMusic.loop = true;


nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        const nextPageId = button.dataset.next;

        const currentPage = button.closest(".page");
        const nextPage = document.querySelector(`#${nextPageId}`);

            if (currentPage.id === "page1") {
            backgroundMusic.play();
        }
        

        if (nextPageId === "page5") {

            setTimeout(() => {
                fadeOutMusic();
            }, 8000);

}

        pageTurnSound.currentTime = 0;
        pageTurnSound.play();

        currentPage.classList.add("turning");

        setTimeout(() => {

            currentPage.classList.remove("active", "turning");

            nextPage.classList.add("active", "entering");

            setTimeout(() => {
                nextPage.classList.remove("entering");
            }, 3500);

        }, 500);

    });

});

function fadeOutMusic() {

    const fadeInterval = setInterval(() => {

        if (backgroundMusic.volume > 0.02) {
            backgroundMusic.volume -= 0.01;
        } else {
            clearInterval(fadeInterval);

            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
            backgroundMusic.volume = 0.12;
        }

    }, 100);

}