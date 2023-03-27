function animazione(params) {
    let animazioneSezione1 = document.getElementById('animazione-sezione-1')

    animazioneSezione1.classList.add('sezione-1')
    animazioneSezione1.classList.add('sezione')

    let animazioneSezione3 = document.getElementById('animazione-sezione-3')
    animazioneSezione3.classList.add('sezione-1')
    animazioneSezione3.classList.add('sezione')

    let animazioneSezione2 = document.getElementById('animazione-sezione-2')
    animazioneSezione2.classList.add('sezione-2')
    animazioneSezione2.classList.add('sezione')
}






window.onload = function(){
    animazione()
}