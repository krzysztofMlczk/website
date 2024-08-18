const openNav = () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".nav-menu");
  let opened = false;

  const toggleNav = () => {
    opened = !opened;
    menu.classList.toggle("open");
  };

  burger.addEventListener("click", toggleNav);
  menu.addEventListener("click", toggleNav);
  window.addEventListener("resize", () => {
    if (opened && document.documentElement.clientWidth > 991) toggleNav();
  });
};

openNav();
