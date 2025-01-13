let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu');
let Box1 = document.querySelectorAll('.box-1 a');  
let BoxHide = document.querySelectorAll('.box-1-hide a');
let rLeft = document.querySelector('.r-left');
let Menu = document.querySelector('.menu');
let font1 = document.querySelector('.fa-suitcase')
let font2 = document.querySelector('.fa-id-card')
let font3 = document.querySelector('.fa-users-gear')
let font4 = document.querySelector('.fa-user-pen')
let font5 = document.querySelector('.fa-building-user')
let font6 = document.querySelector('.fa-magnifying-glass-location')

openMenu.addEventListener('click', function(){
    openMenu.style.display = 'none';
    closeMenu.style.display = 'flex';
    
    
    Box1.forEach(item => item.style.display = 'flex');
    BoxHide.forEach(item => item.style.display = 'none');
    
    rLeft.style.width = '400px';  
    Menu.style.width = '1050px';
      
      
});

closeMenu.addEventListener('click', function(){
    openMenu.style.display = 'flex';
    closeMenu.style.display = 'none';
    
    
    Box1.forEach(item => item.style.display = 'none');
    BoxHide.forEach(item => item.style.display = 'flex');
    
    rLeft.style.width = '100px';  
    Menu.style.width = '1280px';
    
  
});

