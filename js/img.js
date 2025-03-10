document.addEventListener("DOMContentLoaded", function () {
  const gambarContainer = document.getElementById("gambar-container");

  const gambarList = [
      { src: "image/lonsum.jpeg", caption: "PT. Perusahaan Perkebunan London Sumatra Indonesia, Tbk" , link: "perusahaan/lonsum.html"},
      { src: "image/dami.png", caption: "PT. Dami Mas Sejahtera" , link: "perusahaan/dami.html"},
      { src: "image/bakrie.jpg", caption: "PT. ASD-Bakrie Oil Palm Seed Indonesia" , link: "perusahaan/asd.html"},
      { src: "image/ehsan.png", caption: "PT. Sasaran Ehsan Mekarsari" , link: "perusahaan/ehsan.html"},
      { src: "image/yunus.jpg", caption: "PT. Tunggal Yunus Estate" , link: "perusahaan/yunus.html"},
      { src: "image/bina.jpeg", caption: "PT. Bina Sawit Makmur" , link: "perusahaan/bina.html"},
      { src: "image/ppks.jpg", caption: "PT. Pusat Penelitian Kelapa Sawit (PPKS)" , link: "perusahaan/ppks.html"},
      { src: "image/socfin.jpg", caption: "PT. Socfin Indonesia" , link: "perusahaan/socfin.html"},
      { src: "image/MITRA AGRO.jpg", caption: "PT Mitra Agro Servindo" , link: "perusahaan/mitra.html"},
      { src: "image/BAKTI TANI.jpg", caption: "PT. Bakti Tani Nusantara" , link: "perusahaan/tani.html"},
      { src: "image/Deli.jpg", caption: "PT. Timbang Deli Indonesia" , link: "perusahaan/deli.html"},
      { src: "image/palma.jpg", caption: "PT. Palma Inti Lestari" , link: "perusahaan/palma.html"},
      { src: "image/Tania.jpg", caption: "PT. Tania Selatan : Oil Palm Plantation" , link: "perusahaan/tania.html"},
      { src: "image/PTPNIV.jpg", caption: "PTPN IV" , link: "perusahaan/ptp.html"},
      { src: "image/SLG.jpg", caption: "PT. Aneka Sawit Lestari " , link: "perusahaan/aneka.html"},
      { src: "image/AAR.jpg", caption: "PT.AAR Indonesia" , link: "perusahaan/aar.html"},
      { src: "image/PANCA SURYA.jpg", caption: "PT.Panca Surya Garden" , link: "perusahaan/panca.html"},
      { src: "image/MITRA AGRO.jpg", caption: "PT.Mitra Agro Servindo" , link: "perusahaan/mitra.html"},
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
