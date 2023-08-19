



let h1 = document.querySelector('h1');

h1.addEventListener('click', function(){
  if(h1.innerHTML == 'Bakhtiyor') {
    h1.innerHTML = 'Dushaevdev';
    h1.style.background = 'red';
  } else {
    h1.innerHTML = 'Bakhtiyor';
    h1.style.background = 'green';
  }
})