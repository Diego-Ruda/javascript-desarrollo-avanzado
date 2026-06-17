import './style.css';

// evento
// input files
const inputFile = document.querySelector('#input-file');

inputFile.addEventListener('change', (e) => {
  console.log('cambio el input');
  const archivo = e.target.files[0];
  console.dir(archivo);
});
