// Overlay Gambar Struktur Organisasi
document.addEventListener("DOMContentLoaded", function () {
  const strukturImage = document.getElementById("strukturImage");
  const imageOverlay = document.getElementById("imageOverlay");
  const closeOverlay = document.getElementById("closeOverlay");

  if (strukturImage && imageOverlay && closeOverlay) {
    strukturImage.addEventListener("click", () => {
      imageOverlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });

    closeOverlay.addEventListener("click", () => {
      imageOverlay.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }
});
