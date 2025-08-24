// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Highlight active nav link on scroll
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-links a");

  sections.forEach((section, i) => {
    let top = section.offsetTop - 50;
    let bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      navLinks.forEach(link => link.classList.remove("active"));
      navLinks[i].classList.add("active");
    }
  });
});
