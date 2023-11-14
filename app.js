const choiceBtn = document.getElementById("colorBtn");
const containerDiv = document.querySelector(".container")

choiceBtn.addEventListener("click", function () {
    console.log("clicked")

    let chosenColor = handleColor()
    containerDiv.style.backgroundColor = chosenColor
    //console.log(choosenColor)
})


function handleColor() {

    //let color = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red},${green},${blue})`;

    return color;

}


