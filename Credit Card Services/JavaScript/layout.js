// ✅ Load Header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const header = document.querySelector(".main-header");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 80 && currentScroll > lastScroll) {
        header.classList.add("is-sticky");
      } else if (currentScroll < 40) {
        header.classList.remove("is-sticky");
      }

      lastScroll = currentScroll;
    });
  });

// ✅ Load Footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
