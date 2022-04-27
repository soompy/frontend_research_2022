window.addEventListener('scroll', function () {

    scrollpos = window.scrollY;

 

    const scrollElement = document.querySelector('html')
    const scrollTarget = document.querySelector('.horizontal-scroll')
    const scrollHorizontalTarget = document.querySelector('.scroll-area')
    const scrollTargetMinPostion = scrollTarget.offsetTop
    const scrollTargetMaxPostion = scrollTarget.nextElementSibling.offsetTop
    
    if (scrollpos >= scrollTargetMinPostion && scrollpos <= scrollTargetMaxPostion) {                
        scrollHorizontalTarget.scrollLeft = scrollpos - scrollTargetMinPostion
    }
})      
