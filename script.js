click = document.getElementById("fContainer")
let statusJg = document.getElementById("status")

click.style.pointerEvents = "none"

function clickBtn(){
    for(let i=0; i < click.children.length; i++){

        for(let j=0; j < click.children[i].children.length; j++){

            console.log(click.children[i].children[j])
            
            if(click.children[i].children[j].childElementCount != 0){
                click.children[i].children[j].children[0].remove()      
            }

            click.children[i].children[j].style.backgroundColor = "#66b83f"
            
        }
    
    }
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

    let nJogo = confirm("Quer iniciar um novo jogo?")

    if(nJogo == true){
        console.log("Sim")

        click.style.pointerEvents = "all"

        for(let i=0; i < click.children.length; i++){

            for(let j=0; j < click.children[i].children.length; j++){

                console.log(click.children[i].children[j])
                
                if(click.children[i].children[j].childElementCount != 0){
                    click.children[i].children[j].children[0].remove()
                    
                }

                click.children[i].children[j].style.backgroundColor = "#66b83f"
                
            }
        
        }
    } 
    
}

const seq = [["q1","q2","q3"],["q4","q5","q6"],["q7","q8","q9"],["q1","q4","q7"],["q2","q5","q8"],["q3","q6","q9"],["q1","q5","q9"],["q3","q5","q7"]]

let cont = 0
let win = 0

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

    for (k in seq){

        let jog1 = 0
        let jog2 = 0

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
    if(cont == 9 & win ==0){
        setTimeout(() => {
            alert("Deu zebra!")
            confirm("Quer iniciar um novo jogo?")?document.location.reload(true): console.log("ok")
        }, 100)
    }

})