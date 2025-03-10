document.addEventListener("DOMContentLoaded", function () {
  const gambarContainer = document.getElementById("gambar-container");

  const gambarList = [
      { src: "image/lonsum.webp", caption: "PT. Perusahaan Perkebunan London Sumatra Indonesia, Tbk" , link: "perusahaan/lonsum.html"},
      { src: "image/dami.webp", caption: "PT. Dami Mas Sejahtera" , link: "perusahaan/dami.html"},
      { src: "image/bakrie.webp", caption: "PT. ASD-Bakrie Oil Palm Seed Indonesia" , link: "perusahaan/asd.html"},
      { src: "image/ehsan.webp", caption: "PT. Sasaran Ehsan Mekarsari" , link: "perusahaan/ehsan.html"},
      { src: "image/yunus.webp", caption: "PT. Tunggal Yunus Estate" , link: "perusahaan/yunus.html"},
      { src: "image/bina.webp", caption: "PT. Bina Sawit Makmur" , link: "perusahaan/bina.html"},
      { src: "image/ppks.webp", caption: "PT. Pusat Penelitian Kelapa Sawit (PPKS)" , link: "perusahaan/ppks.html"},
      { src: "image/Socfin.webp", caption: "PT. Socfin Indonesia" , link: "perusahaan/socfin.html"},
      { src: "image/MITRA AGRO.webp", caption: "PT Mitra Agro Servindo" , link: "perusahaan/mitra.html"},
      { src: "image/BAKTI TANI.webp", caption: "PT. Bakti Tani Nusantara" , link: "perusahaan/tani.html"},
      { src: "image/Deli.webp", caption: "PT. Timbang Deli Indonesia" , link: "perusahaan/deli.html"},
      { src: "image/Palma.webp", caption: "PT. Palma Inti Lestari" , link: "perusahaan/palma.html"},
      { src: "image/Tania.webp", caption: "PT. Tania Selatan : Oil Palm Plantation" , link: "perusahaan/tania.html"},
      { src: "image/PTPNIV.webp", caption: "PTPN IV" , link: "perusahaan/ptp.html"},
      { src: "image/SLG.webp", caption: "PT. Aneka Sawit Lestari " , link: "perusahaan/aneka.html"},
      { src: "image/AAR.webp", caption: "PT.AAR Indonesia" , link: "perusahaan/aar.html"},
      { src: "image/PANCA SURYA.webp", caption: "PT.Panca Surya Garden" , link: "perusahaan/panca.html"},
  ];

  gambarList.forEach(item => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figcaption = document.createElement("figcaption");

      img.src = item.src;
      img.alt = item.caption;
      figcaption.textContent = item.caption;
      figcaption.classList.add("label");

      figure.appendChild(img);
      figure.appendChild(figcaption);
      gambarContainer.appendChild(figure);

      img.onclick = function () {
        window.location.href = item.link;
    };
  });
});
