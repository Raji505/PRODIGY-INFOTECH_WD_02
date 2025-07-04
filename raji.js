window.addEventListener("scroll", () => {
  const navBar = document.getElementById("topbar");
  if (window.scrollY > 60) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});


