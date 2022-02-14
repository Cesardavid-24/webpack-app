import Img from './assets/img/webpack-logo.png'
 
 export const saludo = (nombre) => {
    
    console.log(`Creando etiqueta h1`);
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;
    
    document.body.appendChild(h1);

    //img
    
    const img = document.createElement('img');
    img.src = Img;
    document.body.append(img);

    
}



