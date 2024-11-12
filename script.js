document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );
  
    sections.forEach(section => observer.observe(section));
  });
  