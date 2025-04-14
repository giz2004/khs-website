
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').includes("#")) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1); 
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

document.querySelector("form")?.addEventListener("submit", function(event) {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (!name || !email || !message) {
    alert("Please fill in all fields before submitting.");
    event.preventDefault();
  } else {
    alert("Thank you for reaching out! Your message has been sent.");
  }
});
