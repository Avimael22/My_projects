window.addEventListener("DOMContentLoaded", (event)=>{
    const menuIcon = document.getElementById("hamburger-menu");
    menuIcon.addEventListener("click", openNav);
})

function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";}

const slideShowContainer = document.getElementById("slide-gallery");
let images = [];

const imageElements = slideShowContainer.getElementsByTagName("img");
console.log(imageElements);

Array.from(imageElements).forEach((p)=>{images.push(p.src)}) //this will push all image sources of the imageelements array to the images array
console.log(images);
let currentIndex = 0;
let startX = 0;
let endX = 0;

//function to open modal
function openModal(index){
    currentIndex = index;
    const modal = document.getElementById("modal")
    modal.focus();
    modal.style.display = "flex";
    updateImage(); //calls the update image when the open modal is triggered
}

//function to close modal
function closeModal(){
    document.getElementById("modal").style.display = "none";
}

//function to update image
function updateImage(){
    document.getElementById("modal-image").src = images[currentIndex];
}

//functions to navigate images
function nextImage(){
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}
function previousImage(){
    currentIndex = (currentIndex - 1 + images.length)% images.length;
    updateImage();
}

const modalImage = document.getElementById("modal-image");
modalImage.addEventListener('touchstart', (event)=>{
    startX = event.touches[0].clientX
});

modalImage.addEventListener("touchend", (event) => {
    endX = event.changedTouches[0].clientX; // Record ending touch point
  
    // Determine swipe direction
    if (startX - endX > 30) {
      nextImage(); // Swipe left
    } else if (endX - startX > 30) {
      previousImage(); // Swipe right
    }
  });

document.addEventListener("keydown", (e)=>{
    if (e.key === "ArrowLeft"){
        e.preventDefault();
        previousImage();
    }
    else if (e.key === "ArrowRight"){
        e.preventDefault();
        nextImage();
    }
    else if(e.key === "Escape"){
        closeModal();
    }
  })