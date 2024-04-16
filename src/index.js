//Importamos metodos 

import{registerImage} from './lazy';
import{createImageNodes}from "./util";

//Crear (1)imagen 
//Agregar #imagen

// Cargue las imagenes existentes cuando cargue la página
const allImages = document.querySelectorAll("img[data-src]");
allImages.forEach(registerImage);

// Agregar nuevas imagenes
const imageContainer = document.querySelector("#images");
const button = document.querySelector("button[type='submit']");
button.addEventListener("click", () => {
  const [node, image] = createImageNodes();
  registerImage(image);
  imageContainer.append(node);
});

/* const createImageNode = () =>{
    const container = document.createElement( 'div');
    container.className="p-4";

    const imagen = document.createElement( 'img');
    imagen.className= "mx-auto";
    imagen.width='320';
    imagen.dataset.src= `https://randomfox.ca/images/${random()}.jpg`;// TODO
    container.appendChild(imagen);
    return container;
} */

/* const nuevaImagen = createImageNode()
const mountNode = document.getElementById('images');

const addButton = document.querySelector( 'button');

//Creamos imagenes
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

addButton.addEventListener( 'click',addImage); */

// Limpiar
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
  imageContainer.innerHTML = "";
});

