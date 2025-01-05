

const thumnailContainer = document.getElementById("thumbnail-container");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");
let modalText = document.getElementById("modal-text");

const images = [
    { thumb: "gallery/ipe/20221007_121730_thumbnail.jpg", full: "gallery/ipe/20221007_121730.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20230323_173800_thumbnail.jpg", full: "gallery/ipe/20230323_173800.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20230330_072308_thumbnail.jpg", full: "gallery/ipe/20230330_072308.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20230509_151958_thumbnail.jpg", full: "gallery/ipe/20230509_151958.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20230509_152010_thumbnail.jpg", full: "gallery/ipe/20230509_152010.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20230512_111617_thumbnail.jpg", full: "gallery/ipe/20230512_111617.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20230517_161017_thumbnail.jpg", full: "gallery/ipe/20230517_161017.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20230622_120855_thumbnail.jpg", full: "gallery/ipe/20230622_120855.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20230622_131548_thumbnail.jpg", full: "gallery/ipe/20230622_131548.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20230623_103104_thumbnail.jpg", full: "gallery/ipe/20230623_103104.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20230623_130123_thumbnail.jpg", full: "gallery/ipe/20230623_130123.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20230629_122951_thumbnail.jpg", full: "gallery/ipe/20230629_122951.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20231016_103355_thumbnail.jpg", full: "gallery/ipe/20231016_103355.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20231019_144645_thumbnail.jpg", full: "gallery/ipe/20231019_144645.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20231215_090223_thumbnail.jpg", full: "gallery/ipe/20231215_090223.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240105_145528_thumbnail.jpg", full: "gallery/ipe/20240105_145528.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240110_133128_thumbnail.jpg", full: "gallery/ipe/20240110_133128.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240131_134617_thumbnail.jpg", full: "gallery/ipe/20240131_134617.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240205_083429_thumbnail.jpg", full: "gallery/ipe/20240205_083429.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240205_083506_thumbnail.jpg", full: "gallery/ipe/20240205_083506.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240301_111521_thumbnail.jpg", full: "gallery/ipe/20240301_111521.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240301_111851_thumbnail.jpg", full: "gallery/ipe/20240301_111851.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240301_111915_thumbnail.jpg", full: "gallery/ipe/20240301_111915.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240304_121250_thumbnail.jpg", full: "gallery/ipe/20240304_121250.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240304_150551_thumbnail.jpg", full: "gallery/ipe/20240304_150551.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240304_150606_thumbnail.jpg", full: "gallery/ipe/20240304_150606.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240311_103552_thumbnail.jpg", full: "gallery/ipe/20240311_103552.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240502_165759_thumbnail.jpg", full: "gallery/ipe/20240502_165759.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240504_065729_thumbnail.jpg", full: "gallery/ipe/20240504_065729.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240521_191011_thumbnail.jpg", full: "gallery/ipe/20240521_191011.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240718_114221_thumbnail.jpg", full: "gallery/ipe/20240718_114221.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240805_110925_thumbnail.jpg", full: "gallery/ipe/20240805_110925.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240806_172254_thumbnail.jpg", full: "gallery/ipe/20240806_172254.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240807_114908_thumbnail.jpg", full: "gallery/ipe/20240807_114908.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240814_104807_thumbnail.jpg", full: "gallery/ipe/20240814_104807.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240814_111902_thumbnail.jpg", full: "gallery/ipe/20240814_111902.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240814_112148_thumbnail.jpg", full: "gallery/ipe/20240814_112148.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240814_112551_thumbnail.jpg", full: "gallery/ipe/20240814_112551.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240822_110914_thumbnail.jpg", full: "gallery/ipe/20240822_110914.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240822_110915_thumbnail.jpg", full: "gallery/ipe/20240822_110915.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240910_163713_thumbnail.jpg", full: "gallery/ipe/20240910_163713.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240912_085015_thumbnail.jpg", full: "gallery/ipe/20240912_085015.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240912_085405_thumbnail.jpg", full: "gallery/ipe/20240912_085405.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240912_091959_thumbnail.jpg", full: "gallery/ipe/20240912_091959.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20240912_092610_thumbnail.jpg", full: "gallery/ipe/20240912_092610.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241010_145533_thumbnail.jpg", full: "gallery/ipe/20241010_145533.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241011_143153_thumbnail.jpg", full: "gallery/ipe/20241011_143153.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241015_094012_thumbnail.jpg", full: "gallery/ipe/20241015_094012.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241015_113159_thumbnail.jpg", full: "gallery/ipe/20241015_113159.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241015_163516_thumbnail.jpg", full: "gallery/ipe/20241015_163516.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241015_163536_thumbnail.jpg", full: "gallery/ipe/20241015_163536.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241015_163606_thumbnail.jpg", full: "gallery/ipe/20241015_163606.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241015_171456_thumbnail.jpg", full: "gallery/ipe/20241015_171456.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241015_171647_thumbnail.jpg", full: "gallery/ipe/20241015_171647.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241016_112901_thumbnail.jpg", full: "gallery/ipe/20241016_112901.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241030_065203_thumbnail.jpg", full: "gallery/ipe/20241030_065203.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241031_100702_thumbnail.jpg", full: "gallery/ipe/20241031_100702.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241031_101311_thumbnail.jpg", full: "gallery/ipe/20241031_101311.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241031_101442_thumbnail.jpg", full: "gallery/ipe/20241031_101442.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241031_101444_thumbnail.jpg", full: "gallery/ipe/20241031_101444.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241031_101451_thumbnail.jpg", full: "gallery/ipe/20241031_101451.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241031_115822_thumbnail.jpg", full: "gallery/ipe/20241031_115822.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241111_163122_thumbnail.jpg", full: "gallery/ipe/20241111_163122.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241120_164047_thumbnail.jpg", full: "gallery/ipe/20241120_164047.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241123_081916(0)_thumbnail.jpg", full: "gallery/ipe/20241123_081916(0).jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241204_151915_thumbnail.jpg", full: "gallery/ipe/20241204_151915.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241205_152732_thumbnail.jpg", full: "gallery/ipe/20241205_152732.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241206_104701_thumbnail.jpg", full: "gallery/ipe/20241206_104701.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241206_112245_thumbnail.jpg", full: "gallery/ipe/20241206_112245.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241210_101652_thumbnail.jpg", full: "gallery/ipe/20241210_101652.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241210_160625_thumbnail.jpg", full: "gallery/ipe/20241210_160625.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241211_104827_thumbnail.jpg", full: "gallery/ipe/20241211_104827.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241212_100412_thumbnail.jpg", full: "gallery/ipe/20241212_100412.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241213_101320_thumbnail.jpg", full: "gallery/ipe/20241213_101320.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241213_115744_thumbnail.jpg", full: "gallery/ipe/20241213_115744.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241213_115839_thumbnail.jpg", full: "gallery/ipe/20241213_115839.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241213_153139_thumbnail.jpg", full: "gallery/ipe/20241213_153139.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241219_093012_thumbnail.jpg", full: "gallery/ipe/20241219_093012.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241219_135835_thumbnail.jpg", full: "gallery/ipe/20241219_135835.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241219_135952_thumbnail.jpg", full: "gallery/ipe/20241219_135952.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241219_140032_thumbnail.jpg", full: "gallery/ipe/20241219_140032.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241219_140033_thumbnail.jpg", full: "gallery/ipe/20241219_140033.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241219_142854_thumbnail.jpg", full: "gallery/ipe/20241219_142854.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241219_142902_thumbnail.jpg", full: "gallery/ipe/20241219_142902.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241219_143542_thumbnail.jpg", full: "gallery/ipe/20241219_143542.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241219_143600_thumbnail.jpg", full: "gallery/ipe/20241219_143600.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241219_143609_thumbnail.jpg", full: "gallery/ipe/20241219_143609.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/20241219_143628_thumbnail.jpg", full: "gallery/ipe/20241219_143628.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/IMG-398b6c6c2336060a963d24f5be7af81f-V_thumbnail.jpg", full: "gallery/ipe/IMG-398b6c6c2336060a963d24f5be7af81f-V.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/IMG-b5aec25b0561f80c86eea037ad797b4c-V_thumbnail.jpg", full: "gallery/ipe/IMG-b5aec25b0561f80c86eea037ad797b4c-V.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/IMG-e3047ef9c44f891d56fc44b888aee888-V_thumbnail.jpg", full: "gallery/ipe/IMG-e3047ef9c44f891d56fc44b888aee888-V.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/IMG_20211217_105636_thumbnail.jpg", full: "gallery/ipe/IMG_20211217_105636.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/IMG_20231022_161447_thumbnail.jpg", full: "gallery/ipe/IMG_20231022_161447.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/IMG_20231023_173525_thumbnail.jpg", full: "gallery/ipe/IMG_20231023_173525.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/IMG_20240116_165101_thumbnail.jpg", full: "gallery/ipe/IMG_20240116_165101.jpg", alt: "csarnok" },
    { thumb: "gallery/ipe/Messenger_creation_2E7E4714-03DE-4ABA-A9A9-C1C7142E80B1_thumbnail.jpg", full: "gallery/ipe/Messenger_creation_2E7E4714-03DE-4ABA-A9A9-C1C7142E80B1.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/Messenger_creation_514BB215-103E-48F2-95EA-28D900CC2D4B_thumbnail.jpg", full: "gallery/ipe/Messenger_creation_514BB215-103E-48F2-95EA-28D900CC2D4B.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/Messenger_creation_8CB7BF71-1DE5-4AF2-86BE-9AA89FA0865B_thumbnail.jpg", full: "gallery/ipe/Messenger_creation_8CB7BF71-1DE5-4AF2-86BE-9AA89FA0865B.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/Messenger_creation_8F0FFEAE-03E4-4EC2-AAF5-F9E85E883B68_thumbnail.jpg", full: "gallery/ipe/Messenger_creation_8F0FFEAE-03E4-4EC2-AAF5-F9E85E883B68.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/Messenger_creation_9B079866-0FA3-43AE-B522-4B3EA240A776_thumbnail.jpg", full: "gallery/ipe/Messenger_creation_9B079866-0FA3-43AE-B522-4B3EA240A776.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/Messenger_creation_AAC7022A-F55C-4A6D-8428-15BDFFCDF236_thumbnail.jpg", full: "gallery/ipe/Messenger_creation_AAC7022A-F55C-4A6D-8428-15BDFFCDF236.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/Messenger_creation_B95FAB29-36BE-4000-94C6-1B49DDEDF89F_thumbnail.jpg", full: "gallery/ipe/Messenger_creation_B95FAB29-36BE-4000-94C6-1B49DDEDF89F.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/Messenger_creation_D4E62A33-E05F-465E-8D61-B21104811ADB_thumbnail.jpg", full: "gallery/ipe/Messenger_creation_D4E62A33-E05F-465E-8D61-B21104811ADB.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_1081052639130644_thumbnail.jpg", full: "gallery/ipe/received_1081052639130644.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_1103901800197137_thumbnail.jpg", full: "gallery/ipe/received_1103901800197137.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_1221020321980446_thumbnail.jpg", full: "gallery/ipe/received_1221020321980446.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_2687737091538324_thumbnail.jpg", full: "gallery/ipe/received_2687737091538324.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_3104934303137068_thumbnail.jpg", full: "gallery/ipe/received_3104934303137068.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_321519357587096_thumbnail.jpg", full: "gallery/ipe/received_321519357587096.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_349925744694678_thumbnail.jpg", full: "gallery/ipe/received_349925744694678.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_552478430049264_thumbnail.jpg", full: "gallery/ipe/received_552478430049264.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_625350789699284_thumbnail.jpg", full: "gallery/ipe/received_625350789699284.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_633133181784927_thumbnail.jpg", full: "gallery/ipe/received_633133181784927.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_683086946887806_thumbnail.jpg", full: "gallery/ipe/received_683086946887806.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_779534789842559_thumbnail.jpg", full: "gallery/ipe/received_779534789842559.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_793784808576493_thumbnail.jpg", full: "gallery/ipe/received_793784808576493.jpeg", alt: "csarnok" },
    { thumb: "gallery/ipe/received_803750121536916_thumbnail.jpg", full: "gallery/ipe/received_803750121536916.jpeg", alt: "csarnok" }

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






