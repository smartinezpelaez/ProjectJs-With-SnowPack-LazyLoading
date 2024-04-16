let totalImages = 0;
let loadedImages = 0;

const observer  = new IntersectionObserver((entries)=>{    
    entries.filter(isIntersecting).forEach(loadImage)
});

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;
//const isIntersecting = (entry) => {
//    return entry.isIntersecting //true (dentro de la pantalla)
//}

const loadImage = (intersectionEntry) => {
    const imgNode = intersectionEntry.target;
    imgNode.src = imgNode.dataset.src;
    imgNode.onload = () => {
      loadedImages += 1;
      logState();
    };
    observer.unobserve(imgNode);
  };

/* const loadImage = (entry) => {
    const container = entry.target; //container (DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //Cargue la imagen
    imagen.src = url;
    //debugger;
    //console.log(container.nodeName);
    //dejar de escuchar laimagen
    observer.unobserve(container); 
} */



//1. registramos una imagen
export const registerImage = (imagen) => {
    observer.observe(imagen);
    totalImages += 1;
     logState();
};

//Muestra el  log de las imagenes  cargadas y totales
function logState() {
    console.log(`⚪️ Total Imágenes: ${totalImages}`);
    console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
  }