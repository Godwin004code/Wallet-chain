

const moveUp = document.querySelector('.btn-top')

window.addEventListener('scroll', function() {
    
    if(window.scrollY > 50) {
        moveUp.classList.add('show')
    } else {
        moveUp.classList.remove('show')
    }
})


moveUp.addEventListener('click', function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    
})