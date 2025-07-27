document.addEventListener("DOMContentLoaded", () => {
  // Overlay Gambar Struktur Organisasi
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

  // Fetch data profil dari JSON
  fetch("data/data.json")
    .then(response => response.json())
    .then(data => {
      console.log("Data profil.json berhasil dimuat:", data);

      // Visi
      const visiEl = document.getElementById("visi");
      if (visiEl && data.visi) visiEl.textContent = data.visi;

      // Misi
      const misiList = document.getElementById("misi");
      if (misiList && Array.isArray(data.misi)) {
        data.misi.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          misiList.appendChild(li);
        });
      }

      // Struktur Organisasi
      if (strukturImage && data.strukturOrganisasi) {
        strukturImage.src = data.strukturOrganisasi;
      }

      // Luas Wilayah dan Jumlah Penduduk
      const luasEl = document.getElementById("luasWilayah");
      const pendudukEl = document.getElementById("jumlahPenduduk");

      if (luasEl && data.luasWilayah !== undefined) {
        luasEl.textContent = `± ${data.luasWilayah.toLocaleString("id-ID")} ha`;
      }

      if (pendudukEl && data.jumlahPenduduk !== undefined) {
        pendudukEl.textContent = `± ${data.jumlahPenduduk.toLocaleString("id-ID")} jiwa`;
      }

    })
    .catch(error => {
      console.error("Gagal mengambil data profil:", error);
    });
});
