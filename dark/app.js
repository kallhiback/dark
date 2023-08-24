const start = document.querySelector('#btn')
const textContainer = document.getElementById('textContainer');
const loh = document.getElementById('loh')
const bt = document.querySelector('.bt')

start.addEventListener('click',  () => {
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/896810.jpg')"
    start.classList.add('toggle')
    setTimeout(() => {
        textContainer.innerText = 'А у мамы разрешение ты спрашивал? Мелкий негодяй'
        setTimeout(() => {
            loh.innerText = 'НЕТУ ТУТ НИКАКОГО ДАРКНЕТА'
            bt.style.display = 'block'
            bt.innerHTML = 'Назад'
        }, 4000)
    },3000)
})

document.getElementById("bt").addEventListener("click", function() {
    window.location.href = "html/dark.html"
})
