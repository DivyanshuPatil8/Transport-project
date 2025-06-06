function toggleMenu() {
  const navbar = document.getElementById("navbar");
  if (navbar.style.right === "0px") {
    navbar.style.right = "-250px";
  } else {
    navbar.style.right = "0px";
  }
}

// Close menu automatically when resizing to larger screen
window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    document.getElementById("navbar").style.right = "-250px";
  }
});
// Add smooth scrolling and interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Animate statistics when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  }, observerOptions);

  // Observe all service cards for animation
  document.querySelectorAll(".service-card").forEach((card) => {
    observer.observe(card);
  });

  // Add floating effect to city badges
  document.querySelectorAll(".city-badge").forEach((badge, index) => {
    badge.style.animationDelay = `${index * 0.1}s`;
  });
});

// Add interactive animations and effects
document.addEventListener("DOMContentLoaded", function () {
  const teamCards = document.querySelectorAll(".team-card");

  // Add parallax effect on mouse move
  document.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    teamCards.forEach((card, index) => {
      const speed = (index + 1) * 0.5;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;

      card.style.transform += ` translate(${x}px, ${y}px)`;
    });
  });

  // Add click animation
  teamCards.forEach((card) => {
    card.addEventListener("click", function () {
      this.style.transform += " scale(0.95)";
      setTimeout(() => {
        this.style.transform = this.style.transform.replace(" scale(0.95)", "");
      }, 150);
    });
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  teamCards.forEach((card) => {
    observer.observe(card);
  });

  // Add floating animation
  teamCards.forEach((card, index) => {
    const delay = index * 0.2;
    card.style.animation += `, float 6s ease-in-out infinite ${delay}s`;
  });

  // Add CSS for floating animation
  const style = document.createElement("style");
  style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `;
  document.head.appendChild(style);
});

// Add dynamic background particles
function createParticle() {
  const particle = document.createElement("div");
  particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: rgba(44, 62, 80, 0.1);
                border-radius: 50%;
                pointer-events: none;
                animation: particleFloat 15s linear infinite;
                left: ${Math.random() * 100}vw;
                top: 100vh;
                z-index: -1;
            `;

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 15000);
}

// Create particles periodically
setInterval(createParticle, 3000);

// Add particle animation
const particleStyle = document.createElement("style");
particleStyle.textContent = `
            @keyframes particleFloat {
                to {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(particleStyle);
