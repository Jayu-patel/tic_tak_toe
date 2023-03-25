const box = document.querySelectorAll('.box')
const tempbox = document.querySelector('.temp_box')
let txt = ''
for(let i=0; i<9; i++){
    txt+='<div class="box1"></div>'
}
tempbox.innerHTML = txt

const box1 = document.querySelectorAll('.box1')
const result = document.querySelector('.btn')
const text = document.getElementById("text")
const reload = document.getElementById("reload")

const turn = document.querySelector('.turnn')
turn.innerHTML = 'Its Xs turn'

const cross = 'X'
const circle = 'O'

let win = false
const winPossibilities =[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]
let winn = false

const circleWin=()=>{
    setTimeout(()=>{
        result.style.display = 'block'
        text.innerText = 'Circle Wins!!!'
        turn.innerHTML = ''
    },150)
    win = true
}
const crossWin=()=>{
    setTimeout(()=>{
        result.style.display = 'block'
        text.innerText = 'Cross Wins!!!'
        turn.innerHTML = ''
    },150)
    win = true
}
const txt1 = '2px solid black'
const txt2 = 'rgba(34, 114, 255, 0.8)'
const winner=()=>{
    winPossibilities.forEach(e=>{
        if((box1[e[0]].innerHTML == '0' && box1[e[1]].innerHTML == '0' && box1[e[2]].innerHTML == '0') && !winn){
            winn = true
            for(let i = 0; i<3 ; i++){
                box[e[i]].style.background = 'white'
                box[e[i]].style.border = txt1
                box[e[i]].style.color = txt2
            }
            circleWin()
        }
        else if((box1[e[0]].innerHTML == '1' && box1[e[1]].innerHTML == '1' && box1[e[2]].innerHTML == '1') && !winn){
            winn = true
            for(let i = 0; i<3 ; i++){
                box[e[i]].style.background = 'white'
                box[e[i]].style.border = txt1
                box[e[i]].style.color = txt2
            }
            crossWin()
        }
    })
}

const over=()=>{
    setTimeout(()=>{
        result.style.display = 'block'
        text.innerText = 'No one wins!'
        turn.innerHTML = ''
    },150)
}

let n = 0
box.forEach((e, i)=>{
    e.addEventListener('click',()=>{
        if(n<=8 && !win){
            n++
            if(n%2==0){
                if(e.innerHTML === ''){
                    e.innerHTML = `<div class="inner_box">${circle}</div>`
                    turn.innerHTML = 'Its Xs turn'
                    box1[i].innerHTML = '0'

                    winner()

                    if(!win){
                        if(n===9){over()}
                    }
                }else{n--}
            }else{
                if(e.innerHTML === ''){
                    e.innerHTML = `<div class="inner_box">${cross}</div>`
                    turn.innerHTML = 'Its Os turn'
                    box1[i].innerHTML = '1'

                    winner()

                    if(!win){
                        if(n===9){over()}
                    }
                }else{n--}}
        }
    })
})

reload.addEventListener('click',()=>{
    location.reload()
})