click = document.getElementById("fContainer")
let statusJg = document.getElementById("status")
let btnRnc = document.getElementById("btnRnc")
let history = document.getElementById("history")

click.style.pointerEvents = "none"

function score(){
    let jogNames = document.querySelectorAll(".jogName")

    jogNames[0].innerHTML = jogName1
    jogNames[1].innerHTML = jogName2
}

function clickBtn(){

    setTimeout(() => {
        click.style.visibility = "visible"
        click.style.position = "static"

        statusJg.style.visibility = "visible"
        statusJg.style.position = "static"

        btnRnc.style.visibility = "visible"
        btnRnc.style.position = "static"

        history.style.visibility = "visible"
        history.style.position = "static"

        document.body.style.overflow = "auto"
    }, 100)

    document.getElementById("equipe").style.visibility = "hidden"
    document.getElementById("equipe").remove()

    document.getElementById("foot").style.paddingTop = "1em"

    score()

    cont = 0
}

function getName(){

    jogName1 = document.getElementById("jg1").value
    jogName2 = document.getElementById("jg2").value

    if (jogName1 ==""){
        jogName1 = "Jogador 1"
    }
    if (jogName2 ==""){
        jogName2 = "Jogador 2"
    }

    click.style.pointerEvents = "all"

    setTimeout(() => {
        statusJg.innerText = `Vez do player ${jogName1}`
    }, 100)

    document.getElementById("jg1").value = ""
    document.getElementById("jg2").value = ""

    clickBtn()
}

function newJogo(){

    let nJogo = confirm("Deseja iniciar um novo jogo?")

    if(nJogo == true){
        /* console.log("Sim") */

        click.style.pointerEvents = "all"

        for(let i=0; i < click.children.length; i++){

            for(let j=0; j < click.children[i].children.length; j++){

                /* console.log(click.children[i].children[j]) */
                
                if(click.children[i].children[j].childElementCount != 0){
                    click.children[i].children[j].children[0].remove()
                    
                }

                click.children[i].children[j].style.backgroundColor = "#8b8b8b"
                
            }
        
        }
        let jogPonts = document.querySelectorAll(".jogPont")
        jogPonts[0].innerHTML = Win1
        jogPonts[1].innerHTML = Win2

    }
    
}

function Rnc(){
    document.documentElement.scrollTop = 0
    location.reload()
}

function submitForm(){
    document.formulario.submit()

    getName()
}

const seq = [["q1","q2","q3"],["q4","q5","q6"],["q7","q8","q9"],["q1","q4","q7"],["q2","q5","q8"],["q3","q6","q9"],["q1","q5","q9"],["q3","q5","q7"]]

let cont = 0
let win = 0
let Win1 = 0
let Win2 = 0
let zebra = 0

click.addEventListener('click', (e) => {
    
    for(let i=0; i < click.children.length; i++){

        for(let j=0; j < click.children[i].children.length; j++){

            if(e.target == click.children[i].children[j]){

                if(cont%2==0){
                    let iX = new Image()
                    iX.src = "img/X.webp"
                    iX.classList.add("p1")
                    iX.style.maxWidth = "100px"
                    e.target.appendChild(iX)

                }else{
                    let iBola = new Image()
                    iBola.src = "img/Bola.webp"
                    iBola.classList.add("p2")
                    iBola.style.maxWidth = "100px"
                    e.target.appendChild(iBola)

                }

                if(cont%2==0){
                    setTimeout(() => {
                        statusJg.innerText = `Vez do player ${jogName2}`
                    }, 100)
                }else{
                    setTimeout(() => {
                        statusJg.innerText = `Vez do player ${jogName1}`
                    }, 100)
                }

                cont++

            }

        }
    }

    win = 0

    for (k in seq){

        let jog1 = 0
        let jog2 = 0
        /* win = 0 */

        for(l in seq[k]){

            if(document.getElementById(seq[k][l]).childElementCount == 1){

                if(document.getElementById(seq[k][l]).children[0].className == 'p1'){
                    jog1++
                }else if(document.getElementById(seq[k][l]).children[0].className == 'p2'){
                    jog2++
                }

                if(jog1 == 3){
                    click.style.pointerEvents = "none"
                    win = 1
                    Win1++
                    
                    for(x in seq[k]){
                        document.getElementById(seq[k][x]).style.backgroundColor = "rgb(204, 18, 18)"
                    }

                    setTimeout(() => {
                        alert(`${jogName1} venceu!`)
                        newJogo()
                    }, 100)
                    
                }else if(jog2 == 3){
                    click.style.pointerEvents = "none"
                    win = 1
                    Win2++

                    for(x in seq[k]){
                        document.getElementById(seq[k][x]).style.backgroundColor = "rgb(204, 18, 18)"
                    }
                    
                    setTimeout(() => {
                        alert((`${jogName2} venceu!`))
                        newJogo()
                    }, 100)

                }

            }
            
        }
        
    }

    zebra = 0

    for(let i=0; i < click.children.length; i++){

        for(let j=0; j < click.children[i].children.length; j++){
            
            if(click.children[i].children[j].childElementCount != 0){
                zebra++
            }

            if(zebra == 9 & win == 0){

                setTimeout(() => {
                    alert("Deu zebra!")
                    newJogo()
                }, 100)
            }
        }
    
    }

})