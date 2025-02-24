

const thumnailContainer = document.getElementById("thumbnail-container");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");
let modalText = document.getElementById("modal-text");

const images = [
    { thumb: "gallery/square/20230814_091543_thumbnail.jpg", full: "gallery/square/20230814_091543.jpg", alt: "csarnok" },
    { thumb: "gallery/square/20230814_092946_thumbnail.jpg", full: "gallery/square/20230814_092946.jpg", alt: "csarnok" },
    { thumb: "gallery/square/20240521_191011_thumbnail.jpg", full: "gallery/square/20240521_191011.jpg", alt: "csarnok" },
    { thumb: "gallery/square/IMG_20211217_105639_thumbnail.jpg", full: "gallery/square/IMG_20211217_105639.jpg", alt: "csarnok" },
    { thumb: "gallery/square/IMG_20240118_134218_thumbnail.jpg", full: "gallery/square/IMG_20240118_134218.jpg", alt: "csarnok" },
    { thumb: "gallery/square/IMG_20240822_145016_thumbnail.jpg", full: "gallery/square/IMG_20240822_145016.jpg", alt: "csarnok" },
    { thumb: "gallery/square/Messenger_creation_7174426365345512627_thumbnail.jpg", full: "gallery/square/Messenger_creation_7174426365345512627.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/Messenger_creation_7174426365347004485_thumbnail.jpg", full: "gallery/square/Messenger_creation_7174426365347004485.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/Messenger_creation_769441441395580_thumbnail.jpg", full: "gallery/square/Messenger_creation_769441441395580.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/Messenger_creation_7d1fee2e-9d86-4c94-bb99-123f9ba11d76_thumbnail.jpg", full: "gallery/square/Messenger_creation_7d1fee2e-9d86-4c94-bb99-123f9ba11d76.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/Messenger_creation_b40facf7-b595-4d53-816a-15bbccf0f373_thumbnail.jpg", full: "gallery/square/Messenger_creation_b40facf7-b595-4d53-816a-15bbccf0f373.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_1114739592937745_thumbnail.jpg", full: "gallery/square/received_1114739592937745.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_1168263151234863_thumbnail.jpg", full: "gallery/square/received_1168263151234863.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_1213758122608567_thumbnail.jpg", full: "gallery/square/received_1213758122608567.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_1459656168114355_thumbnail.jpg", full: "gallery/square/received_1459656168114355.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_209470610699586_thumbnail.jpg", full: "gallery/square/received_209470610699586.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_215471646650970_thumbnail.jpg", full: "gallery/square/received_215471646650970.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_222863959726610_thumbnail.jpg", full: "gallery/square/received_222863959726610.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_242844963868136_thumbnail.jpg", full: "gallery/square/received_242844963868136.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_298019908894721_thumbnail.jpg", full: "gallery/square/received_298019908894721.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_315632720304116_thumbnail.jpg", full: "gallery/square/received_315632720304116.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_401108911346866_thumbnail.jpg", full: "gallery/square/received_401108911346866.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_439618147212702_thumbnail.jpg", full: "gallery/square/received_439618147212702.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_543390246670492_thumbnail.jpg", full: "gallery/square/received_543390246670492.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_587163239956203_thumbnail.jpg", full: "gallery/square/received_587163239956203.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_594521729101874_thumbnail.jpg", full: "gallery/square/received_594521729101874.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_644691026710021_thumbnail.jpg", full: "gallery/square/received_644691026710021.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_659681218551167_thumbnail.jpg", full: "gallery/square/received_659681218551167.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_759433708659190_thumbnail.jpg", full: "gallery/square/received_759433708659190.jpeg", alt: "csarnok" },
    { thumb: "gallery/square/received_859215324940990_thumbnail.jpg", full: "gallery/square/received_859215324940990.jpeg", alt: "csarnok" }

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

/* window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
      }

}; */

window.addEventListener("click",
    function (event) {
        /* document.querySelector(".checker").innerHTML = event.target.tagName + "---><---" + event.target.className; */
        /* document.querySelector(".checker2").innerHTML = event.target.classList; */
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
);






