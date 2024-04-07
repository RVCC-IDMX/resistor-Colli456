import { getResistorOhms } from './resistor.js';


const Ban1 = document.getElementById("color0").addEventListener("click", changeColor);

const Ban2 = document.getElementById("color1").addEventListener("click", changeColor);

const Multi = document.getElementById("color2").addEventListener("click", changeColor);

const Tol = document.getElementById("color3").addEventListener("click", changeColor);

const b0 = document.querySelector("#b0");

const b1 = document.querySelector("#b1");

const b2 = document.querySelector("#b2");

const b3 = document.querySelector("#b3");

const answer = document.querySelector(".answer");

const bands = {
    color1: "red",
    color2: "green",
    multiplier: "violet",
    tolerance: "gold"
}



function changeColor(e) {
    console.log(e.target.innerHTML)
    const color = e.target.innerHTML;
    console.log(e.srcElement.parentElement.id)
    const band = e.srcElement.parentElement.id;
    if (band === 'color0') {
        b0.classList.remove(bands.color1);
        bands.color1 = color;
        b0.classList.add(bands.color1);
        const value = getResistorOhms(bands);
        answer.innerHTML = value;
    }
    if (band === 'color1') {
        b1.classList.remove(bands.color2);
        bands.color2 = color;
        b1.classList.add(bands.color2);
        const value = getResistorOhms(bands);
        answer.innerHTML = value;
    }
    if (band === 'color2') {
        b2.classList.remove(bands.multiplier);
        bands.multiplier = color;
        b2.classList.add(bands.multiplier);
        const value = getResistorOhms(bands);
        answer.innerHTML = value;
    }
    if (band === 'color3') {
        b3.classList.remove(bands.tolerance);
        bands.tolerance = color;
        b3.classList.add(bands.tolerance);
        const value = getResistorOhms(bands);
        answer.innerHTML = value;
    }
}


