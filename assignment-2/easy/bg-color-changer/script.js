
const buttons = document.querySelectorAll('.color-btn')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.dataset.color;
        document.body.style.backgroundColor = color;
    })
})