const contenedor = document.getElementById('contenedorDinamico');
const cambiarContenidoBtn = document.getElementById('cambiarContenidoBtn');
const crearElementoBtn = document.getElementById('crearElementoBtn');
const cambiarEstiloBtn = document.getElementById('cambiarEstiloBtn');

cambiarContenidoBtn.addEventListener('click', function(){
    const parrafo = contenedor.querySelector('p');
    if (parrafo) {
        parrafo.textContent = 'El contenido de este parrafo ha sido modificado';
        console.log('Contenido de parrafo cambiado');
    }else{
        contenedor.innerHTML = '<p>Parrafo insertado y creado desde JS</p>'
    }
});

crearElementoBtn.addEventListener('click', function(){
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Este es un parrafo creado dinamicamente';
    nuevoParrafo.style.color = 'purple';
    nuevoParrafo.style.fontWeight = 'bold';

    contenedor.appendChild(nuevoParrafo);
    console.log('Parrafo añadido dinamicamente');

    parrafoCreado = nuevoParrafo;
});

cambiarEstiloBtn.addEventListener('click', () =>  {
    parrafoCreado.style.fontSize = '22px';
    parrafoCreado.style.color = 'green';
    parrafoCreado.style.backgroundColor = '#fff0f0';

    if (contenedor.classList.contains('resaltado')){
        contenedor.classList.remove('resaltado');
        contenedor.style.backgroundColor = 'orange';
        contenedor.style.color = 'white';
        contenedor.style.borderColor = '';
        contenedor.style.fontWeight = '';
    }else{
        contenedor.classList.add('resaltado'); 
    }
});