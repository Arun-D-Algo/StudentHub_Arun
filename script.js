const button = document.getElementById("initiateButton");

button.addEventListener("click", () => {

    document.body.classList.add("active");

    button.innerText = "Student Hub Online";

    button.style.backgroundColor = "cyan";
    button.style.color = "black";

});