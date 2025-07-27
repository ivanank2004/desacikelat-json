document.addEventListener("DOMContentLoaded", () => {
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

  // Fetch profil.json
  fetch("data/profil.json")
    .then(response => response.json())
    .then(data => {
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

      // Luas Wilayah
      const luasEl = document.getElementById("luasWilayah");
      if (luasEl && data.luasWilayah !== undefined) {
        luasEl.textContent = `± ${data.luasWilayah.toLocaleString("id-ID")} ha`;
      }
    })
    .catch(error => {
      console.error("Gagal mengambil data profil:", error);
    });

  // Fetch statistik.json (untuk jumlah penduduk saja)
  fetch("data/statistik.json")
    .then(response => response.json())
    .then(data => {
      const pendudukEl = document.getElementById("jumlahPenduduk");
      if (pendudukEl && data.jumlahPenduduk !== undefined) {
        pendudukEl.textContent = `± ${data.jumlahPenduduk.toLocaleString("id-ID")} jiwa`;
      }
    })
    .catch(error => {
      console.error("Gagal mengambil data statistik:", error);
    });
});
