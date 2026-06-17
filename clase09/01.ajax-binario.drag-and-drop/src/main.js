import './style.css';

// evento
// input files
const inputFile = document.querySelector('#input-file');

inputFile.addEventListener('change', (e) => {
  console.log('cambio el input');
  const archivo = e.target.files[0];
  console.dir(archivo);
});

// drag and drop
const dropArea = document.querySelector('#drop-area');

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  console.log('dragover');
});

dropArea.addEventListener('dragleave', (e) => {
  e.preventDefault();
  console.log('dragleave');
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  console.log('drop');
});

document.addEventListener('dragover', (e) => {
  e.preventDefault();
});

document.addEventListener('dragleave', (e) => {
  e.preventDefault();
});

document.addEventListener('drop', (e) => {
  e.preventDefault();
});
