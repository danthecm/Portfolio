const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const main = document.body;

const toTop = () => {
    check = main.classList.contains("nav-open");
    if (check === false) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
    console.log(check);
}

let check = false;

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
    toTop();
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        toTop();
    })
});

// BACK TO TOP
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 500 && check == false) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
})