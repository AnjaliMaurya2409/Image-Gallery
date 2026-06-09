const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelector(".active")
        .classList.remove("active");

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {

            if(filter === "all" ||
               item.classList.contains(filter)){

                item.style.display = "block";
            }
            else{
                item.style.display = "none";
            }

        });

    });

});

const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

nextBtn.addEventListener("click",()=>{

    currentIndex=(currentIndex+1)%images.length;

    lightboxImg.src=images[currentIndex].src;

});

prevBtn.addEventListener("click",()=>{

    currentIndex=
    (currentIndex-1+images.length)%images.length;

    lightboxImg.src=
    images[currentIndex].src;

});