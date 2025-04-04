/* Yeswanth code: JavaScript for event handling */

// Yeswanth code: Toggle hidden details in Company Insights
document.addEventListener('DOMContentLoaded', () => {
  const insightCards = document.querySelectorAll('.insight-card');

  insightCards.forEach(card => {
    card.addEventListener('click', () => {
      const hiddenDetails = card.querySelector('.hidden-details');
      if (hiddenDetails.style.display === 'block') {
        hiddenDetails.style.display = 'none';
      } else {
        hiddenDetails.style.display = 'block';
      }
    });
  });
});

// Yeswanth code: "Register/Login" button -> redirect
const registerBtn = document.querySelector(".register-btn");
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    window.location.href = "https://yashedhala.github.io/Yesrayjobportal/";
  });
}

// Yeswanth code: "Get Started" CTA button in hero
const ctaBtn = document.querySelector(".cta-btn");
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    alert("Let’s get you started with YesRay!");
    // Could redirect or open a signup modal
  });
}

// Yeswanth code: Handle the contact form submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks for reaching out! We’ll respond as soon as possible.");
    contactForm.reset();
  });
}
