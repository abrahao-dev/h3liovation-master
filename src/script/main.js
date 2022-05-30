const hamburger = document.querySelector(".hamburger");
const edAlert = document.querySelector(".edAlert");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    edAlert.classList.toggle("active");
})


document.querySelectorAll("nav-bar").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    edAlert.classList.remove("active");
}))
