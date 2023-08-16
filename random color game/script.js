let randomTextColor = document.querySelector('.color');
let score = document.querySelector('.span');
let start = document.querySelector('.start');
let arrowColors = ['red', 'green', 'yellow', 'blue']
// let colors = ['rgb(255, 0, 0)', 'rgb(0, 128, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)']

let buttons = document.querySelectorAll('.button')
let counter = 0


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function colorButtons(e) {

        let color = window.getComputedStyle(e.target).backgroundColor;

        switch (color) {
            case 'rgb(255, 0, 0)':
                if (randomTextColor.innerHTML === 'red') {
                    counter++
                    score.innerHTML = counter
                    randomButtonColor()
                } else {
                    counter--
                    score.innerHTML = counter
                }
                break;
            case 'rgb(0, 128, 0)':
                if (randomTextColor.innerHTML === 'green') {
                    counter++
                    score.innerHTML = counter
                    randomButtonColor()
                } else {
                    counter--
                    score.innerHTML = counter
                }
                break;
            case 'rgb(0, 0, 255)':
                if (randomTextColor.innerHTML === 'blue') {
                    counter++
                    score.innerHTML = counter
                    randomButtonColor()
                } else {
                    counter--
                    score.innerHTML = counter
                }
                break;
            case 'rgb(255, 255, 0)':
                if (randomTextColor.innerHTML === 'yellow') {
                    counter++
                    score.innerHTML = counter
                    randomButtonColor()
                } else {
                    counter--
                    score.innerHTML = counter
                }
                break;
        }
    })
}

function randomButtonColor() {
    let random = Math.floor(Math.random() * arrowColors.length)
    randomTextColor.innerHTML = arrowColors[random]
}

start.addEventListener('click', function startGame() {
    randomButtonColor()
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false
    }
})