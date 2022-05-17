const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right')
const articles = Array.from(document.querySelectorAll('.slider-section'));
const controlIndicators = Array.from(document.querySelectorAll('.controls-ul li'));
const indicatorList = document.querySelector('.controls-ul')
let sectionIndex = 0;

const moveSlider = () => {
    slider.style.transform = `translate(-${sectionIndex*25}%)`;
    document.querySelector('.selected').classList.remove('selected');
}


controlIndicators.forEach( (indicator,index) => {

    indicator.addEventListener( 'click', () => {
        sectionIndex = index;
        moveSlider();
        indicator.classList.add('selected');

    })
})

rightArrow.addEventListener( 'click',() => {
    sectionIndex = (sectionIndex<articles.length-1) ? sectionIndex+1 : 0;
    moveSlider();
    indicatorList.children[sectionIndex].classList.add('selected')

})

leftArrow.addEventListener( 'click', () => {
    sectionIndex = (sectionIndex>0) ? sectionIndex-1 : 3;
    moveSlider();
    indicatorList.children[sectionIndex].classList.add('selected')

})