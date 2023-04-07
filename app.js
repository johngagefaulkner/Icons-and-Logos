const fetchData = async () => {
  try {
    const response = await fetch("https://raw.githubusercontent.com/johngagefaulkner/Icons-and-Logos/main/SuiteUX-Shell-AppIcons.json");
    const data = await response.json();
    return data["SuiteUX-Shell-AppIcons"];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const displayImages = (images) => {
  const imageContainer = document.getElementById("image-container");
  images.forEach((image) => {
    const imageCard = document.createElement("div");
    imageCard.className = "image-card";

    const img = document.createElement("img");
    img.src = image.Data;
    img.alt = `Image ${image.Id}`;
    img.style.width = "100%";

    const imageTitle = document.createElement("div");
    imageTitle.className = "image-title";
    imageTitle.innerText = image.Id;

    imageCard.appendChild(img);
    imageCard.appendChild(imageTitle);
    imageContainer.appendChild(imageCard);
  });
};

(async () => {
  const images = await fetchData();
  displayImages(images);
})();
