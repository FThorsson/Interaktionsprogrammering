let currentIndex = 1;
imageSlide(currentIndex);

function nextImage(direction) {
    imageSlide(currentIndex += direction);
}

function currentSlide(n) {
    imageSlide(currentIndex = n);
}

function imageSlide(n) {
    let images = document.getElementsByClassName("imageContainer");
    let smallImages = document.getElementsByClassName("miniSlideImg");
    if (n > images.length) {
        currentIndex = 1;
    }
    if (n < 1) {
        currentIndex = images.length;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    
    for (let i = 0; i < smallImages.length; i++) {
        smallImages[i].classList.remove("active");
    }
    images[currentIndex-1].style.display = "block";
    smallImages[currentIndex-1].classList.add("active");
}