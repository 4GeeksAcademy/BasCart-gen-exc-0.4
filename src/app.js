import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  function elementRandom(arr){

    return arr[Math.floor(Math.random()* arr.length)];
  }

  let  frase= `${elementRandom(who)} ${elementRandom(action)} ${elementRandom(what)} ${elementRandom(when)}`

  document.getElementById("excuse").innerHTML = frase;
  return frase;
  
};

