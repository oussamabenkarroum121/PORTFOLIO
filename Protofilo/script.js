const footer = document.getElementById("footer-text");
const year = new Date().getFullYear();

footer.innerHTML += ` © ${year}`;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
