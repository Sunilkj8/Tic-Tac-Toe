let box = Array.from(document.getElementsByClassName('box'))
let turn = 'X'
let boxText = document.querySelector('.boxtext')
let rstBtn = document.getElementById('reset')
let info = document.getElementsByClassName('info')
let winner = document.getElementById('winner')
let line = document.getElementById('line')
let startingMinutes = 1
let time = startingMinutes * 15
let click = new Audio("sound/click-button.mp3")
const countDownEl = document.querySelector('#countdown')


 

let refreshIntervalId = setInterval(updateCountDown, 1000)
function updateCountDown() {
    let minutes = startingMinutes
    let seconds = time % 60;
    countDownEl.innerHTML = `${"0"}:${seconds}`
    time--;
    if (time < 0) {
        clearInterval(refreshIntervalId)
    }


}

function changeTurn() {
    if (turn === 'X') {

        return turn = "O";
    }
    else {
        return turn = "X";
    }

}






// checkWin()

function reset() {
    box.forEach((element, i) => {
        element.innerHTML = ''
        


    })
    

}

 



//Game logic


box.forEach((element, i) => {

    element.addEventListener('click', (e) => {
        if (element.textContent === '') {
            element.textContent = turn
            // console.log(element.textContent)
            turn = changeTurn()
            document.querySelector('.info').innerHTML = turn
            click.play()


        }


        rstBtn.addEventListener('click', () => {
            reset()


        })


    })


})


setTimeout(() => {



    // 1 COMBI
    if ((box[0].textContent == 'X') && (box[1].textContent == 'X') && (box[2].textContent == 'X')) {

        line.style.top = "11vh"
        line.style.backgroundColor="#911d91"
        winner.innerHTML = "X won"









    }
    if ((box[0].textContent == 'O') && (box[1].textContent == 'O') && (box[2].textContent == 'O')) {
        line.style.top = "11vh"
        line.style.backgroundColor="#911d91"
        winner.innerHTML = "O won"
        clearTimeout();

        
        


    }

    // 2 COMBI



    if ((box[3].textContent == 'X') && (box[4].textContent == 'X') && (box[5].textContent == 'X')) {

        winner.innerHTML = "X won"

    }
    if ((box[3].textContent == 'O') && (box[4].textContent == 'O') && (box[5].textContent == 'O')) {

        winner.innerHTML = "O won"

    }


    // 3 COMBI
    if ((box[6].textContent == 'X') && (box[7].textContent == 'X') && (box[8].textContent == 'X')) {

        winner.innerHTML = "X won"

    }
    if ((box[6].textContent == 'O') && (box[7].textContent == 'O') && (box[8].textContent == 'O')) {

        winner.innerHTML = "O won"

    }

    // 4 COMBI
    if ((box[0].textContent == 'X') && (box[3].textContent == 'X') && (box[6].textContent == 'X')) {

        winner.innerHTML = "X won"

    }
    if ((box[0].textContent == 'O') && (box[3].textContent == 'O') && (box[6].textContent == 'O')) {

        winner.innerHTML = "O won"

    }



    // 5 COMBI
    if ((box[1].textContent == 'X') && (box[4].textContent == 'X') && (box[7].textContent == 'X')) {

        winner.innerHTML = "X won"

    }
    if ((box[1].textContent == 'O') && (box[4].textContent == 'O') && (box[7].textContent == 'O')) {

        winner.innerHTML = "O won"

    }

    // 6 COMBI
    if ((box[2].textContent == 'X') && (box[5].textContent == 'X') && (box[8].textContent == 'X')) {

        winner.innerHTML = "X won"


    }
    if ((box[2].textContent == 'O') && (box[5].textContent == 'O') && (box[8].textContent == 'O')) {

        winner.innerHTML = "O won"

    }


    // 7 COMBI
    if ((box[0].textContent == 'X') && (box[4].textContent == 'X') && (box[8].textContent == 'X')) {

        winner.innerHTML = "X won"

    }
    if ((box[0].textContent == 'O') && (box[4].textContent == 'O') && (box[8].textContent == 'O')) {

        winner.innerHTML = "O won"

    }


    //   8 COMBI

    if ((box[2].textContent == 'X') && (box[4].textContent == 'X') && (box[6].textContent == 'X')) {

        winner.innerHTML = "X won"

    }
    if ((box[2].textContent == 'O') && (box[4].textContent == 'O') && (box[6].textContent == 'O')) {

        winner.innerHTML = "O won"

    }
    setInterval(()=>{ 
        location.reload();
    },2000)


}, 15000)


