const box = document.querySelectorAll('.box')
const tempbox = document.querySelector('.temp_box')
let txt = ''
for(let i=0; i<9; i++){
    txt+='<div class="box1"></div>'
}
tempbox.innerHTML = txt

const box1 = document.querySelectorAll('.box1')
const cross = 'X'
const circle = 'O'

let win = false
const winPossibilities =[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]

const circleWin=()=>{
    setTimeout(()=>{alert("Circle win")},150)
    win = true
}
const crossWin=()=>{
    setTimeout(()=>{alert("Cross win")},150)
    win = true
}

const winner=()=>{
    winPossibilities.forEach(e=>{
        if(box1[e[0]].innerHTML == '0' && box1[e[1]].innerHTML == '0' && box1[e[2]].innerHTML == '0'){
            circleWin()
        }
        else if(box1[e[0]].innerHTML == '1' && box1[e[1]].innerHTML == '1' && box1[e[2]].innerHTML == '1'){
            crossWin()
        }
    })
}

const over=()=>{
    setTimeout(()=>{alert("game over")},150)
}

let n = 0
box.forEach((e, i)=>{
    e.addEventListener('click',()=>{
        if(n<=8){
            n++
            if(n%2==0){
                if(e.innerHTML === ''){
                    e.innerHTML = `<div class="inner_box">${circle}</div>`
                    box1[i].innerHTML = '0'

                    winner()

                    if(!win){
                        if(n===9){over()}
                    }
                }else{n--}
            }else{
                if(e.innerHTML === ''){
                    e.innerHTML = `<div class="inner_box">${cross}</div>`
                    box1[i].innerHTML = '1'

                    winner()

                    if(!win){
                        if(n===9){over()}
                    }
                }else{n--}}
        }
    })
})