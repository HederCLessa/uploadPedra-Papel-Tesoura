function jogar(){
if ((document.getElementById('pedra').checked === false) && (document.getElementById('papel').checked === false) && (document.getElementById('tesoura').checked === false)) {
    alert('Selecione uma opção')
} else {
    let sorteio = Math.floor(Math.random() * 3)
    switch (sorteio) {
        case 0:
            document.getElementById("robo").src = "file:///C:/Users/HederCLessa/Documents/Script/HTML/imagens/pedra_robo.png"
            break
        case 1:
            document.getElementById("robo").src = "file:///C:/Users/HederCLessa/Documents/Script/HTML/imagens/papel_robo.png"
            break
        case 2:
            document.getElementById("robo").src = "file:///C:/Users/HederCLessa/Documents/Script/HTML/imagens/tesoura_robo.png"
            break
    }
        if ((document.getElementById('pedra').checked === true && sorteio === 0) || (document.getElementById('papel').checked === true && sorteio === 1) || (document.getElementById('tesoura').checked === true && sorteio === 2)) {
            document.getElementById('resultado').innerText = 'EMPATE'
        } else if ((document.getElementById('pedra').checked === true && sorteio === 2) || (document.getElementById('papel').checked === true && sorteio === 0) || (document.getElementById('tesoura').checked === true && sorteio === 1)) {
            document.getElementById('resultado').innerText = 'Jogador Venceu'
        } else {
            document.getElementById('resultado').innerText = 'Computador Venceu'
        }
    }
}

function resetar() {
    document.getElementById('robo').src = 'file:///C:/Users/HederCLessa/Documents/Script/HTML/imagens/robo.jpg'
    document.getElementById('resultado').innerText = ''
}