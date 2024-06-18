document.addEventListener("DOMContentLoaded", function() {
    var overlayImages = document.querySelectorAll(".overlay-image img");

    overlayImages.forEach(function(image) {
        image.addEventListener("touchstart", function() {
            // Remove the active class from all images
            overlayImages.forEach(function(img) {
                img.classList.remove("active");
            });
            // Add the active class to the touched image
            image.classList.add("active");
        });
    });
});
