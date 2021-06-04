// Gets the "container" element so I can change it's proprieties later
let containerElement = document.getElementById("container");

// RGB function to be able to dynamically assign r, g, b values (made by 00 from the Programmers Valley discord server)
const rgb = (r, g, b) => `rgb(${r},${g},${b})`;

let r = undefined;
let g = undefined;
let b = undefined;

// Function to randomly output a value between 0 and 255
function randomValue() {
    let val = Math.floor(Math.random() *256);
    return val;
};

function randomAll() {
    randomR();
    randomG();
    randomB();
    containerElement.style.background = rgb(r, g, b);
    updateClrCodes();
};

function randomR() {
    r = randomValue();
    containerElement.style.background = rgb(r, g, b);
};

function randomG() {
    g = randomValue();
    containerElement.style.background = rgb(r, g, b);
};

function randomB() {
    b = randomValue();
    containerElement.style.background = rgb(r, g, b);
};

// Rave Party code :)

const btn = document.getElementById("rave");
let isRunning = true;
function onOfParty() {
    if (isRunning) {
        startParty();
    } else {
        stopParty();
    };
    isRunning = !isRunning;
}

btn.onclick = onOfParty;

const startParty = () => {
    setInterval(randomAll, 500);
};

const stopParty = () => {
    location.reload();
};

function getRGBColor() {
    const getRGBColor = window.getComputedStyle(document.getElementById("container")).getPropertyValue('background-color');
    return getRGBColor;
}

function rgbToHex(rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

function getHEXColor() {
    let hexR = rgbToHex(r);
    let hexG = rgbToHex(g);
    let hexB = rgbToHex(b);

    return "#" + hexR + hexG + hexB;
}

function updateClrCodes() {
    document.getElementById("textForRGB").innerHTML = getRGBColor();
    document.getElementById("textForHEX").innerHTML = getHEXColor();
};




function copyText(clrTypeRGB) {
    const COPY_TEXT_RGB = document.getElementById("textForRGB").textContent;
    const COPY_TEXT_HEX = document.getElementById("textForHEX").textContent;

    if (clrTypeRGB === true) {
        navigator.clipboard.writeText(COPY_TEXT_RGB);
    } else {
        navigator.clipboard.writeText(COPY_TEXT_HEX);
    };
    //Add a way to display that the text has been copied
    
}
