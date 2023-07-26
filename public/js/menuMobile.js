


const bx = document.querySelector('.bx');
const menuMobile = document.querySelector('.menu-mobile');
const linkMobile = document.querySelectorAll('.link-menu-mobile');

bx.addEventListener('click', () =>{
    bx.classList.toggle('active');
    menuMobile.classList.toggle('showmenu');
});

linkMobile.forEach((item)=>{
    item.addEventListener('click', ()=>{
        menuMobile.classList.remove('showmenu');
        bx.classList.toggle('active');
    })
})