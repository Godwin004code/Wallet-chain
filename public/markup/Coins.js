

const moreBtn = document.querySelector('#more-toggler')
const moreWalletsContainer = document.querySelector('.more-wallets')

moreBtn.addEventListener('click', () => {

    console.log('123');
    moreWalletsContainer.classList.toggle('show-wallets')
})