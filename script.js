  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.querySelector("i").classList.toggle("fa-times");
  });

  // Optional: close menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.querySelector("i").classList.remove("fa-times");
    });
  });
//Hero Section ;)

const phrases = [
   "Building stories with code 💻",
    "Crafting digital dreams 💖",
    "Turning ideas into experiences 🌸",
  ];

  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  const speed = 100;
  const typewriter = document.getElementById("typewriter");

  function loop() {
    typewriter.textContent = currentPhrase.join("");

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isDeleting = true;
      setTimeout(loop, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }

    setTimeout(loop, isDeleting ? speed / 2 : speed);
  }

  loop();

  //For the skills section

   window.addEventListener("scroll", () => {
    const skillsSection = document.querySelector(".skills-section");
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsTop < windowHeight - 100) {
      document.querySelectorAll(".fill").forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = 0;
        setTimeout(() => (bar.style.width = width), 200);
      });
    }
  });

  // for the projects

   const projectCards = document.querySelectorAll(".project-card");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    projectCards.forEach((card) => {
      const top = card.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        card.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);

  // Add animation style
  const style = document.createElement("style");
  style.textContent = `
    .project-card {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .project-card.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  //Contacts section

   const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert("💌 Message sent successfully! Thank you for reaching out, " + name + "!");
      form.reset();
    } else {
      alert("Please fill in all fields before sending.");
    }
  });