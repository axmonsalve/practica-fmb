const UIBtnVerMas = document.querySelectorAll('.boton-ver-mas');
const UIBtnVerMasCofres = document.querySelectorAll('.ver-mas-cofres');

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

UIBtnVerMasCofres.forEach((button) => {
  button.addEventListener('click', function(e){
    e.preventDefault();
    if(!e.target.classList.contains('ver-mas-cofres')){
      button.textContent = 'Ocultar cofres'
      button.classList.remove('ver-mas-cofres')
      button.classList.add('ver-menos-cofres')
    }else{
      button.textContent = 'Ver cofres'
      button.classList.add('ver-mas-cofres')
      button.classList.remove('ver-menos-cofres')
    }

  });
});
