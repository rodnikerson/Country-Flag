const holdingContainer = document.getElementById('container-main');

const firstContainer = document.getElementById('container1');
const secondContainer = document.getElementById('container2');
const thirdContainer = document.getElementById('container3');

const formatButton = document.getElementById('btn');

const colors = ['white', 'yellow', 'orange', 'red', 'pink', 'purple', 'green', 'blue', 'brown', 'gray', 'black'];

let i = 0;
let j = 0;
let k = 0;

const changeColor = (e) => {
    console.log(secondContainer.style.backgroundColor)
    if(e.target.id === 'container1') {
        firstContainer.style.backgroundColor = colors[i%colors.length];
        i++;
    } else if(e.target.id === 'container2'){
        secondContainer.style.backgroundColor = colors[j%colors.length];
        j++;
    } else if(e.target.id === 'container3') {
        thirdContainer.style.backgroundColor = colors[k%colors.length];
        k++;
    }
}

firstContainer.addEventListener('click', changeColor)

secondContainer.addEventListener('click', changeColor)

thirdContainer.addEventListener('click', changeColor)

const changeFormat1 = () => {
    holdingContainer.style.flexDirection = "row";
    firstContainer.style.width = "33.3%";
    firstContainer.style.height = "100%";
    secondContainer.style.width = "33.4%";
    secondContainer.style.height = "100%";
    thirdContainer.style.width = "33.3%";
    thirdContainer.style.height = "100%";
}

const changeFormat2 = () => {
    holdingContainer.style.flexDirection = "column";
    firstContainer.style.width = "100%";
    firstContainer.style.height = "33.3%";
    secondContainer.style.width = "100%";
    secondContainer.style.height = "33.4%";
    thirdContainer.style.width = "100%";
    thirdContainer.style.height = "33.3%";
}

const formatSwitcher = () => {
    if(holdingContainer.style.flexDirection === "column") return changeFormat1();
    return changeFormat2();
}

btn.addEventListener('click', formatSwitcher)

const buttonWhite = () => {
    if(secondContainer.style.backgroundColor === "black") {
        formatButton.style.border = "2px solid white";
        formatButton.style.color = "white";
} else {
    formatButton.style.border = "2px solid black";
    formatButton.style.color = "black";
}
}

secondContainer.addEventListener('click', buttonWhite)