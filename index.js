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