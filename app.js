import { gato } from "./clases/gato.js";

const divGatos = document.querySelector('#gatos');

const garfield = new gato("Garfield", "garfield.png");
garfield.comida = "lasaña";
const tom = new gato("Tom", "tom.jpg");
tom.comida = "albóndigas";
const silvestre = new gato("Silvestre", "silvestre.png");
silvestre.comida = "canario";
const marie = new gato("Marie", "marie.png");
marie.comida = "sushi";

const gatos = [garfield, tom, silvestre, marie];

document.addEventListener('DOMContentLoaded', ()=>{
    gatos.map(gato => {
        divGatos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="./img/${gato.imagen}" class="card-img-top" alt="..."></img>
            <div class="card-body"></div>
                <h5 class="card-title">${gato.nombre}</h5>
                <p class="card-text">${gato.saludar()} y me gusta comer ${gato.comida} .</p>
                <p class="card-text">Te doy albóndigas</p>
                <p class="card-text">${gato.comer('albóndigas')}</p>
        </div>
     `;
    })
})