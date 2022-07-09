click = document.getElementById("fContainer")

click.style.pointerEvents = "none"

function getName(){
    jogName1 = document.getElementById("jg1").value
    jogName2 = document.getElementById("jg2").value

    if (jogName1 ==""){
        jogName1 = "Jogador 1"
    }
    if (jogName2 ==""){
        jogName2 = "Jogador 1"
    }

    click.style.pointerEvents = "all"
}

const seq = [["q1","q2","q3"],["q4","q5","q6"],["q7","q8","q9"],["q1","q4","q7"],["q2","q5","q8"],["q3","q6","q9"],["q1","q5","q9"],["q3","q5","q7"]]

let cont = 0

click.addEventListener('click', (e) => {
    
    for(let i=0; i < click.children.length; i++){
        /* console.log(click.children[i]) */

        for(let j=0; j < click.children[i].children.length; j++){
            /* console.log(click.children[i].children[j]) */

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

                cont++

            }

        }
    }

    for (k in seq){

        /* console.log(seq[k]) */

        let jog1 = 0
        let jog2 = 0

        for(l in seq[k]){
            console.log(document.getElementById(seq[k][l]))
            if(document.getElementById(seq[k][l]).childElementCount == 1){
                console.log("ok")
                if(document.getElementById(seq[k][l]).children[0].className == 'p1'){
                    jog1++
                }else if(document.getElementById(seq[k][l]).children[0].className == 'p2'){
                    jog2++
                }
                console.log(jog1)

                if(jog1 == 3){
                    click.style.pointerEvents = "none"
                    setTimeout(() => {
                        alert(`${jogName1} venceu!`)
                        confirm("Quer iniciar um novo jogo?")?document.location.reload(true): console.log("ok")
                    }, 100)
                    
                }else if(jog2 == 3){
                    click.style.pointerEvents = "none"
                    setTimeout(() => {
                        alert((`${jogName2} venceu!`))
                        confirm("Quer iniciar um novo jogo?")?document.location.reload(true): console.log("ok")
                    }, 100)

                }

            }
            
        }
        
    }
    if(cont == 9){
        setTimeout(() => {
            alert("Deu zebra!")
            confirm("Quer iniciar um novo jogo?")?document.location.reload(true): console.log("ok")
        }, 100)
    }

})