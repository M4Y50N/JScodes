var sexo = document.getElementsByName("radsex")
result = document.getElementById("res")
alturaG = [], mulher = [], H = 0;

function adiciona(){
    var altura = document.getElementById("alt")
    if (altura.value.length == 0){
        window.alert("Mermao digite um valor!!")
    }else{
        if (sexo[0].checked) {
            var sex = 'Homem'
            H++
        }else{
            var sex = 'Mulher'
            mulher = Number(altura.value)
        }
        var alt = Number(altura.value)
        alturaG.push(alt)
        result.innerHTML = "Para finalizar clique aqui →  " + 
        "<button type='button' style='border-radius: 5px; background: rgb(65, 59, 59); color: white' onclick='finaliza()'>finalizar</button>"
        altura.focus()
    }
    altura.value = ''
}

function finaliza() {
    result.innerHTML = `<p>A maior altura digitada foi ${(alturaG.sort())[alturaG.length - 1]}.</p>`
    if (mulher.length != 0){
        result.innerHTML += `<p>A mulher mais alta tem ${Math.max(mulher)}.</p>`
    }else{result.innerHTML += "<p>Não existe mulhes nessa lista.</P>"}
    if (H != 0){
        result.innerHTML += `<p>O número de homens na lista foi de ${H}.</p>`
    }else{result.innerHTML += "<p>Não existe homens nessa lista.</p>"}
}

