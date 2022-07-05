const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
    loader.classList.add('fondu-out')
})

let toggle = document.querySelector('.toggle')
let body = document.querySelector('body')

toggle.addEventListener('click', function() {
    body.classList.toggle('open-menu');
})