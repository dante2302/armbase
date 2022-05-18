const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav>ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    document.querySelector('body').classList.toggle('scrollStop')  
    navUl.classList.toggle('active');
})

document.querySelectorAll('nav>ul>*').forEach((link)=>{
    link.addEventListener('click',()=>{
        hamburger.classList.remove('active');
        document.querySelector('body').classList.remove('scrollStop')  
        navUl.classList.remove('active');
    })
})
