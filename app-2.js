const fetchData = async () => {
    try {
        const response = await fetch("https://api.github.com/repos/johngagefaulkner/Icons-and-Logos/contents/src/svg/Microsoft/Azure/Azure-Public-Service-Icons-v18");
        const data = await response.json();
        return data;
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
        img.src = image.download_url
        img.style.width = "100%";

        imageCard.appendChild(img);
        imageContainer.appendChild(imageCard);
    });
};

(async () => {
    const images = await fetchData();
    displayImages(images);
})();
