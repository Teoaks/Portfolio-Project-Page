const letterW = document.getElementById('letter-w')
const letterE = document.getElementById('letter-e')
const letterL = document.getElementById('letter-l')
const letterC = document.getElementById('letter-c')
const letterO = document.getElementById('letter-o')
const letterM = document.getElementById('letter-m')
const secondLetterE = document.getElementById('second-letter-e')

function move() {
    const increment = window.scrollY

    letterW.style.marginRight = 32 + increment * 0.3 + '%'
    letterE.style.bottom = 50 + increment * 0.4 + '%'
    letterL.style.bottom = 50 + increment * 0.1 + '%'
    letterC.style.bottom = 50 + increment * 0.4 + '%'
    letterO.style.bottom = 50 + increment * 0.5 + '%'
    letterM.style.bottom = 50 + increment * 0.2 + '%'
    secondLetterE.style.marginLeft = 70 + increment * 0.1 + '%'
}

window.addEventListener('scroll', move)