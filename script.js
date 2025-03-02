console.log('Script carregado com sucesso');

function alternarOpcoes() {
    let botaoCamera = document.getElementById('botaoCamera');
    let botaoPin = document.getElementById('botaoPin');
    let overlay = document.getElementById("overlay");

   if (botaoCamera.style.display === 'none' || botaoCamera.style.display === '') {
        botaoCamera.style.display = 'inline-block';
        botaoPin.style.display = 'inline-block';
        overlay.style.display = "block";
   } else {
        botaoCamera.style.display = 'none';
        botaoPin.style.display = 'none';
        overlay.style.display = 'none';
   }
}


