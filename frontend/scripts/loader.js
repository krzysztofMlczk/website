window.onload = () => {
  document.documentElement.scrollTop = 0;
  document.body.style.overflowY = "auto";
  document.querySelector(".loader-overlay").classList.add("hidden");
  setupAnimations();
};
