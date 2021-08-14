let header = document.querySelector('.header_menu');
let image = document.querySelector('.menu_icon-img')
let catergory = document.querySelectorAll('.f-same')
document.addEventListener('scroll', (e) => {
    if(window.pageYOffset > '210') {
        header.classList.add('scroll-header')
        image.classList.add('scroll-image')
        catergory.forEach((textCategory) => {
            textCategory.classList.add('font-white')
        })
    } if(window.pageYOffset == '0') {
        header.classList.remove('scroll-header')
        image.classList.remove('scroll-image')
        catergory.forEach((textCategory) => {
            textCategory.classList.remove('font-white')
        })
    }
    
})

window.onload = (e) => {
    if(window.pageYOffset > '210') {
        header.classList.add('scroll-header')
        image.classList.add('scroll-image')
        catergory.forEach((textCategory) => {
            textCategory.classList.add('font-white')
        })
    } if(window.pageYOffset == '0') {
        header.classList.remove('scroll-header')
        image.classList.remove('scroll-image')
        catergory.forEach((textCategory) => {
            textCategory.classList.remove('font-white')
        })
    }
}