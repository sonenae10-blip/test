document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const message = document.querySelector("#formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      message.classList.remove("hidden");
      form.reset();
      setTimeout(() => message.classList.add("hidden"), 3000);
    });
  }
});
