document.addEventListener("DOMContentLoaded", function () {
  const gambarContainer = document.getElementById("gambar-container");

  const gambarList = [
      { src: "image/lonsum.jpeg", caption: "PT. Perusahaan Perkebunan London Sumatra Indonesia, Tbk" , link: "perusahaan/lonsum.html"},
      { src: "image/dami.png", caption: "PT. Dami Mas Sejahtera" , link: "dami.html"},
      { src: "image/bakrie.jpg", caption: "PT. ASD-Bakrie Oil Palm Seed Indonesia" , link: "bakrie.html"},
      { src: "image/ehsan.png", caption: "PT. Sasaran Ehsan Mekarsari" , link: "ehsan.html"},
      { src: "image/yunus.jpg", caption: "PT. Tunggal Yunus Estate" , link: "yunus.html"},
      { src: "image/bina.jpeg", caption: "PT. Bina Sawit Makmur" , link: "bina.html"},
      { src: "image/ppks.jpg", caption: "PT. Pusat Penelitian Kelapa Sawit (PPKS)" , link: "ppks.html"},
      { src: "image/8.jpg", caption: "PT. Socfin Indonesia" , link: "socfin.html"},
      { src: "image/9.jpg", caption: "PT 9" , link: "pt1.html"},
      { src: "image/10.jpg", caption: "PT 10" , link: "pt1.html"},
      { src: "image/11.jpg", caption: "PT 11" , link: "pt1.html"},
      { src: "image/12.jpg", caption: "PT 12" , link: "pt1.html"},
      { src: "image/13.jpg", caption: "PT 13" , link: "pt1.html"},
      { src: "image/14.jpg", caption: "PT 14" , link: "pt1.html"},
      { src: "image/15.jpg", caption: "PT 15" , link: "pt1.html"},
      { src: "image/16.jpg", caption: "PT 16" , link: "pt1.html"},
      { src: "image/17.jpg", caption: "PT 17" , link: "pt1.html"},
      { src: "image/18.jpg", caption: "PT 18" , link: "pt1.html"},
      { src: "image/19.jpg", caption: "PT 19" , link: "pt1.html"},
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
