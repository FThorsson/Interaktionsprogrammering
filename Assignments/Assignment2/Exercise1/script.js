let currentIndex = 1;
imageSlide(currentIndex);

function nextImage(direction) {
    imageSlide(currentIndex += direction);
}

/* function currentSlide(n) {
    imageSlide(currentIndex = n);
} */

function imageSlide(n) {
    let images = document.getElementsByClassName("imageContainer");
    if (n > images.length) {
        currentIndex = 1;
    }
    if (n < 1) {
        currentIndex = images.length;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[currentIndex-1].style.display = "block";
}


//element.classList.add("namn på klass")
//element.classList.remove("namn på klass")

//<div class="class2 class1">