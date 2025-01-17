let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu');
let Box1 = document.querySelectorAll('.box-1 a');  
let BoxHide = document.querySelectorAll('.box-1-hide a');
let rLeft = document.querySelector('.r-left');
let rRight = document.querySelector('.r-right')
let Menu = document.querySelector('.menu');
let font1 = document.querySelector('.fa-suitcase')
let font2 = document.querySelector('.fa-id-card')
let font3 = document.querySelector('.fa-users-gear')
let font4 = document.querySelector('.fa-user-pen')
let font5 = document.querySelector('.fa-building-user')
let font6 = document.querySelector('.fa-magnifying-glass-location')
let mobileMenuOpen = document.getElementById('mobile-menu-open')
let mobileMenuClose = document.getElementById('mobile-menu-close')
let mobileMenuBox = document.getElementById('mobile-menu-box')

openMenu.addEventListener('click', function(){
    openMenu.style.display = 'none';
    closeMenu.style.display = 'flex';
    
    
    Box1.forEach(item => item.style.display = 'flex');
    BoxHide.forEach(item => item.style.display = 'none');
    if(window.innerWidth <= 320){
        rRight.style.transition = "left 0.3s ease";
        rLeft.style.width = '200px';  
        Menu.style.width = '220px';
        rRight.style.left = '200px';
    }else{
        rRight.style.transition = "left 0.3s ease";
        rLeft.style.width = '400px';  
        Menu.style.width = '980px';
        rRight.style.left = '400px';
        
    }
      
});

closeMenu.addEventListener('click', function(){
    openMenu.style.display = 'flex';
    closeMenu.style.display = 'none';
    
    
    Box1.forEach(item => item.style.display = 'none');
    BoxHide.forEach(item => item.style.display = 'flex');
    if(window.innerWidth <=320){
        rLeft.style.width = '60px';
        Menu.style.width = '300px';
        rRight.style.left = '60px';
    }else{
    rLeft.style.width = '100px';  
    Menu.style.width = '1280px';
    rRight.style.left = '100px';

    }
    
  
});

mobileMenuOpen.addEventListener('click',function(){
    mobileMenuOpen.style.display = 'none';
    mobileMenuClose.style.display = 'flex';
    mobileMenuBox.style.display = 'flex'

})
mobileMenuClose.addEventListener('click',function(){
    mobileMenuOpen.style.display = 'flex';
    mobileMenuClose.style.display = 'none';
    mobileMenuBox.style.display = 'none'

})





