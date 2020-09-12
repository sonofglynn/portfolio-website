let focusProjectExists = false;
let projectHeadings = 
    ["Forged", "Illustration and Animation", "Video Game Design", "Music", "Photography"];
let projectDescriptions = 
    ["Currently, I am creating commissioned illustrations for Forged, a book being written by Edna King. Publication info to follow! (click image to scroll)",
    "For as long as I can remember, illustration and animation have been my favorite creative effort. I have worked in various programs and mediums including ClipStudio Paint, Autodesk Sketchbook, pencil, acrylic, and charcoal. (click image to scroll)",
    "Video game design is an expanding part of my portfolio, and one for which I have an intent interest. I have created code, sprites, and music for games both realized and unfinished. The convergence of art, animation, music, and story that is video game design excites my creative interest, and I look forward to developing more in this medium. (click image to scroll)",
    "Logic is my choice platform for producing music. My musical proficiencies include guitar (acoustic and electric), voice, and piano. (click image to scroll)",
    "Though by no means a professional, I take every change I can get to snap a photo when the time is right. Scroll throught to see my pics! (click image to scroll)"];
let imagesArrayIndex = 0;
let imagesArray;
let forgedImages = [
    "../images/forged/shoes.png",
    "../images/forged/belt.png",
    "../images/forged/breastplate.png"
];
let illAndAniImages = [
    "../images/illustrations-and-animations/pullup-bro.png",
    "../images/illustrations-and-animations/santa-clause-2018.jpg",
    "../images/illustrations-and-animations/warming-up.jpg"
];
let vgDevImages = [
    "../images/video-game-design/jonn-the-blob.png",
    "../images/video-game-design/rocker-rick.png",
    "../images/video-game-design/tameloc-battle-bg.png"
];
let musicImages = [
    "../images/logic-screenshot.png"
];
let photographyImages = [
    "../images/photography/bee-crape-myrtle.jpg",
    "../images/photography/athos-shore.jpg",
    "../images/photography/lizard.jpg"
];


function toFocusProject(projectThumbnail) {
    //chooses appropriate heading, description, and photo gallery array
    let description;
    let heading;
    imagesArrayIndex = 0;
    switch (projectThumbnail.alt) {
        case "Forged Illustrations link":
            heading = projectHeadings[0]
            description = projectDescriptions[0];
            imagesArray = forgedImages;
            break;
        case "Illustrations and Animations link":
            heading = projectHeadings[1]
            description = projectDescriptions[1];
            imagesArray = illAndAniImages;
            break;
        case "Jonn's Blob Game link":
            heading = projectHeadings[2]
            description = projectDescriptions[2];
            imagesArray = vgDevImages;
            break;
        case "Music link":
            heading = projectHeadings[3]
            description = projectDescriptions[3];
            imagesArray = musicImages;
            break;
        case "Photography link":
            heading = projectHeadings[4]
            description = projectDescriptions[4];
            imagesArray = photographyImages;
            break;
        default:
            description = "description"
    }
    //replaces or modifies elements
    if (!focusProjectExists) {//replaces header with project display
        //destroys header
        document.getElementsByTagName("header")[0].remove();
        //creates project img
        addElement("focus-project-container", "img", "focus-project-image", "");
        document.getElementById("focus-project-image").src = projectThumbnail.getAttribute("src");
        fadeInElement(document.getElementById("focus-project-image"));
        //creates project description
        addElement("focus-project-container", "div", "focus-project-description-container", "");
        addElement("focus-project-description-container", "h1", "focus-project-heading", heading);
        addElement("focus-project-description-container", "p", "focus-project-description", description);

        focusProjectExists = true;
    } else {//edits project display
        //changes img src
        document.getElementById("focus-project-image").src = projectThumbnail.getAttribute("src");
        fadeInElement(document.getElementById("focus-project-image"));
        //changes project description
        document.getElementById("focus-project-heading").innerHTML = heading;
        document.getElementById("focus-project-description").innerHTML = description;
    }
    //adds scroll feature
    document.getElementById("focus-project-image").onclick = scrollImages;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

function scrollImages() {
    imagesArrayIndex++;
    if(imagesArray[imagesArrayIndex] != undefined) {
        document.getElementById("focus-project-image").src = imagesArray[imagesArrayIndex];
    } else {
        imagesArrayIndex = 0;
        document.getElementById("focus-project-image").src = imagesArray[imagesArrayIndex];
    }
}

function addElement(parentId, elementTag, elementId, html) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function fadeInElement(element) {
    element.style.opacity = 0;
    let fadeSpeed = 1;
    
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