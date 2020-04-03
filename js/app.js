const UIBtnVerMas = document.querySelectorAll('.boton-ver-mas');

UIBtnVerMas.forEach((button) => {
  button.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('boton-ver-mas')){
      button.textContent = 'Ver menos'
      button.classList.remove('boton-ver-mas')
      button.classList.add('boton-ver-menos')
    }else{
      button.textContent = 'Ver mas'
      button.classList.add('boton-ver-mas')
      button.classList.remove('boton-ver-menos')
    }

  });
});
