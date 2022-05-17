const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right')
const articles = Array.from(document.querySelectorAll('.slider-section'));
let sectionIndex = 0;
console.log(articles)


rightArrow.addEventListener('click',() => {

    sectionIndex = (sectionIndex<articles.length-1) ? sectionIndex+1 : 3;
    slider.style.transform = `translate(-${sectionIndex*25}%)`

})
leftArrow.addEventListener('click', () => {

    sectionIndex = (sectionIndex>0) ? sectionIndex-1 : 0;
    slider.style.transform = `translate(-${sectionIndex*25}%)`
    
})