// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {
  // Fade-in sections on scroll
  const sections = document.querySelectorAll(".fade-in-section");

  const observerOptions = {
    threshold: 0.1,
  };

  const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    fadeInOnScroll.observe(section);
  });

  // Toggle more text sections
  function setupToggle(buttonId, textId) {
    const btn = document.getElementById(buttonId);
    const text = document.getElementById(textId);

    btn.addEventListener("click", () => {
      if (text.classList.contains("hidden")) {
        text.classList.remove("hidden");
        btn.textContent = "Show Less";
      } else {
        text.classList.add("hidden");
        btn.textContent = "Show More";
      }
    });
  }

  setupToggle("moreOverviewBtn", "moreOverview");
  setupToggle("moreQualifyBtn", "moreQualify");
  setupToggle("moreBenefitsBtn", "moreBenefits");
  setupToggle("moreApplyBtn", "moreApply");

  // Background color toggle
  const bgChangeBtn = document.getElementById("bgChangeBtn");
  const colors = ["#e6f2ff", "#cce0ff", "#99ccff", "#66b3ff", "#3399ff"]; // shades of blue
  let currentIndex = 0;

  // Load saved bg color from localStorage
  const savedColor = localStorage.getItem("bgColor");
  if (savedColor && colors.includes(savedColor)) {
    document.body.style.backgroundColor = savedColor;
    currentIndex = colors.indexOf(savedColor);
  }

  bgChangeBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentIndex];
    localStorage.setItem("bgColor", colors[currentIndex]);
  });
});
