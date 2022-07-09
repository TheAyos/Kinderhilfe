// *** Pages michael jackson scroll ***
const aboutPageCount = 4;
const helpPageCount = 4;

const stickyElements = [];
stickyElements.push(document.querySelector(".about-title"));
stickyElements.push(document.querySelector(".help-title"));

setInterval(() => {
    let y = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    stickyElements.forEach((e) => {
        const trigger = e.offsetTop;
        if (y >= trigger) {
            e.classList.add("stick");
        } else {
            if (e.classList.contains("stick")) e.classList.remove("stick");
        }
    });
}, 35);

// const abt = document.querySelector(".about-title");
// const trigger = abt.offsetTop;
// const blockSize = abt.offsetHeight;

// setInterval(() => {
//     let y = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//     if (y >= trigger) {
//         //&& y <= trigger + blockSize * (aboutPageCount - 1)) {
//         abt.classList.add("stick");
//     } else {
//         if (abt.classList.contains("stick")) abt.classList.remove("stick");
//     }
// }, 35);

function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: window.innerHeight * (aboutPageCount - 1),
        triggerElement: ".about-title",
        triggerHook: 0,
    })
        .setPin(".about-title")
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        duration: window.innerHeight * (helpPageCount - 1),
        triggerElement: ".help-title",
        triggerHook: 0,
    })
        .setPin(".help-title")
        // .addIndicators()
        .addTo(controller);
}

// splitScroll();

// *** Scrollbar ***
const track = document.getElementById("scrollbar-thumb");
let height = document.body.scrollHeight - window.innerHeight;
setInterval(() => {
    let thumbHeight = (window.pageYOffset / height) * 100;
    track.style.height = thumbHeight + "%";
}, 35);

// *** Carousel ***
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((b) => {
    b.addEventListener("click", () => {
        const offset = b.dataset.carouselButton === "next" ? 1 : -1;
        const slides = b.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        newIndex = newIndex < 0 ? slides.children.length - 1 : newIndex >= slides.children.length ? 0 : newIndex;
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

// *** Contact ***
function sendEmail() {
    Email.send({
        Host: "smtp.yourisp.com",
        Username: "username",
        Password: "password",
        To: "them@website.com",
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body",
    }).then((message) => alert(message));
}
