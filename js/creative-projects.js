let focusProjectExists = false;
let projectDescriptions = 
    ["Forged description",
    "Pullup description",
    "Jonn the Blob description",
    "Music description",
    "Photography description"];


function toFocusProject(projectThumbnail) {
    //chooses appropriate description
    let description;
    switch (projectThumbnail.alt) {
        case "Forged Illustrations link":
            description = projectDescriptions[0];
            break;
        case "Illustrations and Animations link":
            description = projectDescriptions[1];
            break;
        case "Jonn's Blob Game link":
            description = projectDescriptions[2];
            break;
        case "Music link":
            description = projectDescriptions[3];
            break;
        case "Photography link":
            description = projectDescriptions[4];
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
        addElement("focus-project-container", "div", "focus-project-description-container", description);
        focusProjectExists = true;
    } else {//edits project display
        //changes img src
        document.getElementById("focus-project-image").src = projectThumbnail.getAttribute("src");
        fadeInElement(document.getElementById("focus-project-image"));
        //changes project description
        document.getElementById("focus-project-description-container").innerHTML = description;
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

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
    
    let opacityNum = 0;
    let intervalId = setInterval(addOpacity, 20);

    function addOpacity() {
        if (element.style.opacity < 1) {
            element.style.opacity = opacityNum;
            opacityNum += 0.1;
        } else {
            clearInterval(intervalId);
        }
    }
}

//scrolls through images
function imageScroll() {
    
}