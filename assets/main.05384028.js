import "./modulepreload-polyfill.b7f2da20.js";
document.querySelectorAll("button").forEach((t => {
    t.addEventListener("click", (() => {
        t.classList.contains("active") || (document.querySelector("iframe").setAttribute("src", t.getAttribute("data-url")), document.querySelector("button.active").classList.remove("active"), t.classList.add("active"))
    }))
}));