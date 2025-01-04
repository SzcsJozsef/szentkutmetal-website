

const thumnailContainer = document.getElementById("thumbnail-container");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");

const images = [
    { thumb: "gallery/accessories-9241057_1280_thumbnail.jpg", full: "gallery/accessories-9241057_1280.jpg", alt: "csarnok" },
    { thumb: "gallery/animal-7285346_1280_thumbnail.jpg", full: "gallery/animal-7285346_1280.jpg", alt: "csarnok" },
    { thumb: "gallery/bubble-8399795_1280_thumbnail.jpg", full: "gallery/bubble-8399795_1280.jpg", alt: "csarnok" },
    { thumb: "gallery/bus-8142339_1280_thumbnail.jpg", full: "gallery/bus-8142339_1280.jpg", alt: "csarnok" },
    { thumb: "gallery/fishing-9246365_1280_thumbnail.jpg", full: "gallery/fishing-9246365_1280.jpg", alt: "csarnok" },
    { thumb: "gallery/ireland-7374959_1280_thumbnail.jpg", full: "gallery/ireland-7374959_1280.jpg", alt: "csarnok" },
    { thumb: "gallery/trees-8482254_1280_thumbnail.jpg", full: "gallery/trees-8482254_1280.jpg", alt: "csarnok" }
];

const fragment = document.createDocumentFragment();
images.forEach(img => {
    const thumbnail = document.createElement("img");
    thumbnail.src = img.thumb;
    thumbnail.alt = img.alt;

    thumbnail.classList.add("thumbnail");
    thumbnail.loading = "lazy";
    thumbnail.dataset.full = img.full;
    fragment.appendChild(thumbnail);
});
thumnailContainer.appendChild(fragment);

thumnailContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains("thumbnail")) {
        openModal(e.target.dataset.full);
    }
});


function openModal(imgSrc) {
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

closeBtn.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = () => {

    modal.style.display = "none";

};




