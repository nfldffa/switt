document.addEventListener("DOMContentLoaded", function () {
  const sawitContainer = document.getElementById("sawit-container");

  const gambarList = [
      "https://st2.depositphotos.com/1015741/7809/i/450/depositphotos_78092108-stock-photo-palm-oil-tree.jpg",
      "https://beritainvestor.id/wp-content/uploads/2023/10/1683101596-1240x826-1.webp",
      "https://www.astra-agro.co.id/wp-content/uploads/2018/03/ash-pict-003-1080x675-1080x540.jpg",
      "https://asset.kompas.com/crops/JgcFK-JMIQgJMYjEP5Yzfw9rr9E=/115x0:964x566/1200x800/data/photo/2020/06/29/5ef940fe73ccc.jpg",
      "https://widya.ai/wp-content/uploads/2022/11/Buah-Kelapa-Sawit-1024x683.jpg",
      "https://www.asianagri.com/wp-content/uploads/2021/06/business-img-3.jpg"
  ];

  gambarList.forEach(src => {
      const imgElement = document.createElement("img");
      imgElement.src = src;
      imgElement.alt = "Gambar Sawit";
      imgElement.classList.add("gambar-sawit");

      sawitContainer.appendChild(imgElement);
  });
});

