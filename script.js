document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slideshow img");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
            slide.style.zIndex = i === index ? "1" : "0";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 2000);

    // Expandable Box Debugging
    let expandBtn = document.querySelector(".expand-btn");
    let expandableContent = document.querySelector(".expandable-content");
    if (!expandBtn || !expandableContent) {
        console.error("Expandable box elements not found.");
        return;
    }

    expandBtn.addEventListener("click", function () {
        console.log("clicked expand button");
        if (expandableContent.style.display === "none" || expandableContent.style.display === "") {
            expandableContent.style.display = "block";
            expandBtn.textContent = "Hide Text";
        } else {
            expandableContent.style.display = "none";
            expandBtn.textContent = "View Full Text";
        }
    });
});
console.log("test");