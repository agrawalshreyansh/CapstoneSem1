const menu = document.querySelector('.menu-btn');
const close = document.querySelector('.close-btn');
const items = document.querySelector('.menu')
const banner = document.querySelector('.b-text')

menu.addEventListener('click', () => {
    menu.style.display = 'none';
    close.style.display = 'block';
    items.style.display = 'flex'
    banner.style.marginTop = '25vw'
    
});

close.addEventListener('click', () => {
    menu.style.display = 'block';
    close.style.display = 'none';
    items.style.display = 'none'
    banner.style.marginTop = '10vw'
});


window.addEventListener('resize', () => {
    location.reload();
});

