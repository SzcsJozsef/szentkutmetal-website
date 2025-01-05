

const thumnailContainer = document.getElementById("thumbnail-container");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");
let modalText = document.getElementById("modal-text");

const images = [{thumb: "gallery/sales/20211117_073021_thumbnail.jpg", full: "gallery/sales/20211117_073021.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20211117_111750_thumbnail.jpg", full: "gallery/sales/20211117_111750.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20211117_111802_thumbnail.jpg", full: "gallery/sales/20211117_111802.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220215_084207_thumbnail.jpg", full: "gallery/sales/20220215_084207.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220215_084257_thumbnail.jpg", full: "gallery/sales/20220215_084257.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220215_085855_thumbnail.jpg", full: "gallery/sales/20220215_085855.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220215_085903_thumbnail.jpg", full: "gallery/sales/20220215_085903.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220308_095644_thumbnail.jpg", full: "gallery/sales/20220308_095644.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220328_083626_thumbnail.jpg", full: "gallery/sales/20220328_083626.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220328_084907_thumbnail.jpg", full: "gallery/sales/20220328_084907.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220408_134106_thumbnail.jpg", full: "gallery/sales/20220408_134106.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220409_110255_thumbnail.jpg", full: "gallery/sales/20220409_110255.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220409_110444_thumbnail.jpg", full: "gallery/sales/20220409_110444.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220409_111205_thumbnail.jpg", full: "gallery/sales/20220409_111205.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220908_150512_thumbnail.jpg", full: "gallery/sales/20220908_150512.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20220908_161217_thumbnail.jpg", full: "gallery/sales/20220908_161217.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20221207_073103_thumbnail.jpg", full: "gallery/sales/20221207_073103.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20221207_073109_thumbnail.jpg", full: "gallery/sales/20221207_073109.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20230216_120048_thumbnail.jpg", full: "gallery/sales/20230216_120048.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20230216_121835_thumbnail.jpg", full: "gallery/sales/20230216_121835.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20230831_083131_thumbnail.jpg", full: "gallery/sales/20230831_083131.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20230901_161145_thumbnail.jpg", full: "gallery/sales/20230901_161145.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20230901_161240_thumbnail.jpg", full: "gallery/sales/20230901_161240.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20230906_162910_thumbnail.jpg", full: "gallery/sales/20230906_162910.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20230907_081157_thumbnail.jpg", full: "gallery/sales/20230907_081157.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20230907_081205_thumbnail.jpg", full: "gallery/sales/20230907_081205.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240604_112307_thumbnail.jpg", full: "gallery/sales/20240604_112307.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240604_112327_thumbnail.jpg", full: "gallery/sales/20240604_112327.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240604_112342_thumbnail.jpg", full: "gallery/sales/20240604_112342.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_113620_thumbnail.jpg", full: "gallery/sales/20240920_113620.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_113700_thumbnail.jpg", full: "gallery/sales/20240920_113700.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_113805_thumbnail.jpg", full: "gallery/sales/20240920_113805.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_113848_thumbnail.jpg", full: "gallery/sales/20240920_113848.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_113928_thumbnail.jpg", full: "gallery/sales/20240920_113928.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_113938_thumbnail.jpg", full: "gallery/sales/20240920_113938.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114026_thumbnail.jpg", full: "gallery/sales/20240920_114026.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114042_thumbnail.jpg", full: "gallery/sales/20240920_114042.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114045_thumbnail.jpg", full: "gallery/sales/20240920_114045.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114157_thumbnail.jpg", full: "gallery/sales/20240920_114157.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114423_thumbnail.jpg", full: "gallery/sales/20240920_114423.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114447_thumbnail.jpg", full: "gallery/sales/20240920_114447.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114524_thumbnail.jpg", full: "gallery/sales/20240920_114524.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114531_thumbnail.jpg", full: "gallery/sales/20240920_114531.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114555_thumbnail.jpg", full: "gallery/sales/20240920_114555.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114858_thumbnail.jpg", full: "gallery/sales/20240920_114858.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114859_thumbnail.jpg", full: "gallery/sales/20240920_114859.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_114914_thumbnail.jpg", full: "gallery/sales/20240920_114914.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_115021_thumbnail.jpg", full: "gallery/sales/20240920_115021.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_115201_thumbnail.jpg", full: "gallery/sales/20240920_115201.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_115208_thumbnail.jpg", full: "gallery/sales/20240920_115208.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_115332_thumbnail.jpg", full: "gallery/sales/20240920_115332.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_115352_thumbnail.jpg", full: "gallery/sales/20240920_115352.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/20240920_115353_thumbnail.jpg", full: "gallery/sales/20240920_115353.jpg", alt: "csarnok"},
    {thumb: "gallery/sales/received_1828353900891371_thumbnail.jpg", full: "gallery/sales/received_1828353900891371.jpeg", alt: "csarnok"},
    {thumb: "gallery/sales/received_327127842082230_thumbnail.jpg", full: "gallery/sales/received_327127842082230.jpeg", alt: "csarnok"},
    {thumb: "gallery/sales/received_3290465194616898_thumbnail.jpg", full: "gallery/sales/received_3290465194616898.jpeg", alt: "csarnok"}    
    
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






