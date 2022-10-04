

//**Burger */

const burgerButton = document.getElementById("burger");
const navigation = document.querySelector("nav");
burgerButton.addEventListener("click", () => {
    if (navigation.className === "closed") {
        navigation.className = "opened";
    } else {
        navigation.className = "closed";
    }

});
/*Realisation partie FAQ*/

const accordeonItemHeaders = document.querySelectorAll(".accordeon-item-header");
accordeonItemHeaders.forEach(accordeonItemHeader => {
    accordeonItemHeader.addEventListener("click", function (event) {
        const currentlyActiveAccordeonItemHeader = document.querySelector(".accordeon-item-header.active");
        if (currentlyActiveAccordeonItemHeader && currentlyActiveAccordeonItemHeader !== accordeonItemHeader) {
            currentlyActiveAccordeonItemHeader.classList.toggle("active");
            currentlyActiveAccordeonItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordeonItemHeader.classList.toggle("active")
        const accordeonItemBody = accordeonItemHeader.nextElementSibling;
        if (accordeonItemHeader.classList.contains("active")) {
            accordeonItemBody.style.maxHeight = accordeonItemBody.scrollHeight + "px";
        }
        else {
            accordeonItemBody.style.maxHeight = 0;
        }
    });
});


/****Carousel */

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})