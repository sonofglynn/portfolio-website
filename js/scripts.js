

function showBackgroundImage(squares) {
    console.log(squares.id);
    switch (squares.id) {
        case "left-squares":
            document.getElementById("main-image").src = "images/bee-crape-myrtle.jpg";
            fadeInElement(document.getElementById("main-image"));
            break;
        case "right-squares":
            document.getElementById("main-image").src = "images/Shoes-Forged.png";
            fadeInElement(document.getElementById("main-image"));
    }

}

function hideBackgroundImage() {
    fadeOutElement(document.getElementById("main-image"));
}

function fadeInElement(element) {
    element.style.opacity = 0;
    let fadeSpeed = 5;
    
    let opacityNum = 0;
    let intervalId = setInterval(addOpacity, 20 / fadeSpeed);

    function addOpacity() {
        if (element.style.opacity < 1) {
            element.style.opacity = opacityNum;
            opacityNum += 0.1;
        } else {
            clearInterval(intervalId);
        }
    }
}

function fadeOutElement(element) {
    let fadeSpeed = 1;
    
    let opacityNum = 1;
    let intervalId = setInterval(reduceOpacity, 20 / fadeSpeed);

    function reduceOpacity() {
        if (element.style.opacity > 0) {
            element.style.opacity = opacityNum;
            opacityNum -= 0.1;
        } else {
            clearInterval(intervalId);
        }
    }
}