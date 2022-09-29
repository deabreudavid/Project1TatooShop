const burgerButton = document.getElementById("burger");
const navigation = document.querySelector("nav");
burgerButton.addEventListener("click", () => {
    if (navigation.className === "closed") {
        navigation.className = "opened";
    }else {
        navigation.className = "closed";
    }

});
