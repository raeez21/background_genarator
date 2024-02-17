// import {without} from 'lodash';
// console.log(without)
var _ = require('lodash')
var arr = [1,2,3,4,5,6,7,8]
console.log('answer: ', _.without(arr,3))
console.log(_)
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient")
function setGradient(){
    body.style.background = "linear-gradient(to right, "+color1.value+ "," +color2.value+")";
    css.textContent = body.style.background
}
color1.addEventListener("input",setGradient)
css.textContent = body.style.background+";"
color2.addEventListener("input",setGradient)