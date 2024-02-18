const a = document.querySelector(".login-up1");
const b = document.querySelector(".divmax-w-md");
const c= document.querySelector(".union-icon");

a.addEventListener("click", () => {
    b.classList.remove("loginhide");
});
c.addEventListener("click", () => {
    b.classList.add("loginhide");
});