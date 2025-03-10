document.addEventListener("DOMContentLoaded", function () {
  const sawitContainer = document.getElementById("sawit-container");

  const gambarList = [
      "image/p1.webp",
      "image/p2.webp",
      "image/p3.webp",
      "image/p4.webp",
      "image/p5.webp",
      "image/p6.webp"
  ];

  gambarList.forEach(src => {
      const imgElement = document.createElement("img");
      imgElement.src = src;
      imgElement.alt = "Gambar Sawit";
      imgElement.classList.add("gambar-sawit");

      sawitContainer.appendChild(imgElement);
  });
});

