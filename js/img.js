document.addEventListener("DOMContentLoaded", function () {
  const gambarContainer = document.getElementById("gambar-container");

  const gambarList = [
      { src: "https://photos.idnfinancials.com/static/web/2025/lonsum%201.JPG", caption: "PT. Perusahaan Perkebunan London Sumatra Indonesia, Tbk" , link: "perusahaan/lonsum.html"},
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5s1e76QR_Np2F62F-lDZjEktVOr5dXlf2g&s", caption: "PT. Dami Mas Sejahtera" , link: "perusahaan/dami.html"},
      { src: "https://www.indoconnex.com/public/uploads/pbd_business/655d6abc50525.jpg", caption: "PT. ASD-Bakrie Oil Palm Seed Indonesia" , link: "perusahaan/asd.html"},
      { src: "image/ehsan.webp", caption: "PT. Sasaran Ehsan Mekarsari" , link: "perusahaan/ehsan.html"},
      { src: "image/yunus.webp", caption: "PT. Tunggal Yunus Estate" , link: "perusahaan/yunus.html"},
      { src: "https://lokermedan.net/wp-content/uploads/2024/07/PT-Sampoerna-Agro-Tbk.webp", caption: "PT. Bina Sawit Makmur" , link: "perusahaan/bina.html"},
      { src: "https://cakapinterview.com/wp-content/uploads/2020/06/Pusat-Penelitian-Kelapa-Sawit-PPKS.jpg", caption: "PT. Pusat Penelitian Kelapa Sawit (PPKS)" , link: "perusahaan/ppks.html"},
      { src: "https://media.licdn.com/dms/image/v2/C560BAQGtsS0-ZXcISQ/company-logo_200_200/company-logo_200_200/0/1631376548272?e=2147483647&v=beta&t=_MSAzoKgaIYNv8Z3vYN4X2XxGBhwwJS5XfzioGV9744", caption: "PT. Socfin Indonesia" , link: "perusahaan/socfin.html"},
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbA-x2dsmVkjIbPyppyYWHF9SsT460ncC8w&s", caption: "PT Mitra Agro Servindo" , link: "perusahaan/mitra.html"},
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Bso9ALW4nD-Qmg9YqPRkCAIoHL7V8C_vzw&s", caption: "PT. Bakti Tani Nusantara" , link: "perusahaan/tani.html"},
      { src: "https://media.licdn.com/dms/image/v2/C561BAQEYi-g_95yN3g/company-background_10000/company-background_10000/0/1644287863801/verdantbioscience_cover?e=2147483647&v=beta&t=Fg2J4gplJWpCae3GQh58rvG4DdAjOcu5KvCoBWrZiqs", caption: "PT. Timbang Deli Indonesia" , link: "perusahaan/deli.html"},
      { src: "https://ugc.production.linktr.ee/A5HUEFQPeu2ncs6RhgiH_5Xym5aZ8TkFQnXjy?io=true&size=avatar-v3_0", caption: "PT. Palma Inti Lestari" , link: "perusahaan/palma.html"},
      { src: "https://loker.pasarpanduan.com/wp-content/uploads/2022/02/Lowongan-Kerja-PT-Tania-Selatan.jpg", caption: "PT. Tania Selatan : Oil Palm Plantation" , link: "perusahaan/tania.html"},
      { src: "https://www.bersamabumn.com/wp-content/uploads/2024/09/Lowongan-Kerja-BUMN-PT-Perkebunan-Nusantara-IV.webp", caption: "PTPN IV" , link: "perusahaan/ptp.html"},
      { src: "https://www.cakerja.com/wp-content/uploads/2023/12/Lowongan-Kerja-PT-Sawit-Lestari-Group.webp", caption: "PT. Aneka Sawit Lestari " , link: "perusahaan/aneka.html"},
      { src: "https://media.licdn.com/dms/image/v2/C560BAQHhTd4S4lVp4Q/company-logo_200_200/company-logo_200_200/0/1674794808318?e=2147483647&v=beta&t=2K_Inh8rhdjhFf5Ti2EXGGGqY7mnsNoIjxozoZoy-nI", caption: "PT.AAR Indonesia" , link: "perusahaan/aar.html"},
      { src: "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akurat/gallerybiro/2023/02/big/img_63f571326e6f40-15478173-64159872.jpg", caption: "PT.Panca Surya Garden" , link: "perusahaan/panca.html"},
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
