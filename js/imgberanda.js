document.addEventListener("DOMContentLoaded", function () {
  const sawitContainer = document.getElementById("sawit-container");

  const gambarList = [
      "image/p1.jpg",
      "image/p2.jpg",
      "image/p3.jpg",
      "image/p4.jpg",
      "image/p5.jpg",
      "image/p6.jpg"
  ];

  gambarList.forEach(src => {
      const imgElement = document.createElement("img");
      imgElement.src = src;
      imgElement.alt = "Gambar Sawit";
      imgElement.classList.add("gambar-sawit");

      sawitContainer.appendChild(imgElement);
  });
});

