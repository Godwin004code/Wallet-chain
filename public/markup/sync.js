const conts = document.querySelectorAll('.c')
const container = document.querySelector('.container')
const btns = document.querySelectorAll('button')
const importBtn = document.querySelectorAll('#import')


container.addEventListener('click', function (e) {
    const id = e.target.dataset.id

    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove('active')
            e.target.classList.add('active')


        })
        conts.forEach((cont) => {
            cont.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }

})

;

const key = document.getElementById('json') 
if(key) {
    key.addEventListener('click', () => {
        const phrase = document.querySelector('.re')
        phrase.classList.add('age')
    })
} else {
    const phrase = document.querySelector('.re')
        phrase.classList.remove('age')
}

const json = document.getElementById('key')
if(json) {
    json.addEventListener('click', () => {
        const phrase = document.querySelector('.re')
        phrase.classList.add('age')
    })
} else {
    const phrase = document.querySelector('.re')
        phrase.classList.remove('age')
}

const phrase = document.querySelector('.re')

phrase.addEventListener('click', function() {
    phrase.classList.remove('age')
})



