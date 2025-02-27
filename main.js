import { receptMegjelenit } from "./fuggveny.js";
import { RLista } from "./adat.js";


let artElem = document.getElementById("art");
let txt = "";
for (let i = 0; i < RLista.length; i++) {
  txt += `<div class="etelek"
                    <h2>${RLista[i].nev}</h2>
                    <img src="${RLista[i].img}" alt ="${RLista[i].nev}">
                    </div>
                    `;
}
console.log(txt);
artElem.innerHTML = txt;        