var idade = document.getElementById('idade'),
ava = document.getElementsByName('radescol'),
result = document.getElementById('res'),
totalOtimo = 0, totalot = 0, totalReg = 0, total = 0, totalBom = 0;

function acrescentar(){
    if (idade.value.length == 0){window.alert('Digita um valor ai menow!!')}
    else{
        if (ava[2].checked){totalOtimo += Number(idade.value); total += 1; totalot += 1}
        else if (ava[0].checked) {totalReg += 1; total += 1}
        else if (ava[1].checked) {total += 1; totalBom += 1}
        result.innerHTML = ""
        result.innerHTML = "Para finalizar clique aqui →  " 
        + "<button type='button' style='border-radius: 5px' onclick='resultado()'>finalizar</button>"
        idade.focus()
    }
    idade.value = '' 
}

function resultado(){
    result.innerHTML = "<p style='color: red'>------------------------------------------------------------------------------------<p>"
    if (totalOtimo == 0){result.innerHTML += "Ninguém avaliou como ÓTIMO"}
    else{result.innerHTML += `<p>A media da idade das pessoas que responderam ÓTIMO foi ${(totalOtimo/totalot).toFixed(2)}</p>`}
    if (totalReg == 0){result.innerHTML += "Ninguém avaliou como REGULAR"}
    else{result.innerHTML += `<p>Pessoas que responderam REGULAR ${totalReg}</p>`}
    if (totalBom == 0){result.innerHTML += "Ninguém avaliou como BOM"}
    else{result.innerHTML += `<p>A porcentagem total das pessoas que responderam BOM foi de ${(totalBom*100/total).toFixed(2)}</p>`}

}
