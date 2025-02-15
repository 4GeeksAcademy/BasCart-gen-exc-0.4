import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  let randomElementWho= Math.floor(Math.random()*who.length);
  let elementWho= who[randomElementWho];
  
  let randomElementAction= Math.floor(Math.random()*action.length);
  let elementAction= action[randomElementAction];
  
  let randomElementWhat= Math.floor(Math.random()*what.length);
  let elementWhat= what[randomElementWhat];
  
  let randomElementWhen= Math.floor(Math.random()*when.length);
  let elementWhen= when[randomElementWhen];
  
  let frase= `${elementWho} ${elementAction} ${elementWhat} ${elementWhen}`;

  document.getElementById("excuse").innerHTML = frase;
  return frase;
};
