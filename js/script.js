const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

if (lightbox && lightboxImg && lightboxClose) {
  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      const originalSrc = img.getAttribute("src");
      const wideSrc = originalSrc.replace(/(\.[\w]+)$/, "-p$1");

      lightboxImg.classList.remove("loaded");
      lightbox.classList.add("active");

      const preload = new Image();
      preload.onload = () => {
        lightboxImg.src = wideSrc;
        lightboxImg.classList.add("loaded");
      };
      preload.src = wideSrc;
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
    }
  });
}
