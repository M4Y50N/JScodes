var idade = document.querySelector('input#idade')
peso = document.getElementById('peso')
sex = document.getElementsByName('radsex')
result = document.getElementById('res')
vetorM = [], vetorH = [], somaM = 0, somaH = 0, i = 1;

function adiciona(){
    res.innerHTML = ''
    if (idade.value.length == 0 || peso.value.length == 0){
        window.alert('Digita um valor menow')}
    else{
        if (sex[0].checked){
            vetorH.push(parseInt(idade.value))
            somaH += parseInt(idade.value)
        }else{
            vetorM.push(Number(peso.value))
            somaM += Number(peso.value)
        }
        idade.value = ''; peso.value = ''
        idade.focus()
        if (i == 5){i = 0; finalizar()}
        i++
    }    
}

function finalizar(){
    res.innerHTML = `<p>O total de homens foi ${vetorH.length}</p>`
    res.innerHTML += `<p>O total de mulheres foi ${vetorM.length}</p>`
    if (vetorH.length != 0){res.innerHTML += `<p>A media de idade dos homens foi de ${(somaH/vetorH.length).toFixed(2)}</p>`}
    if (vetorM.length != 0){res.innerHTML += `<p>A media de peso das mulheres foi de ${(somaM/vetorM.length).toFixed(2)}</p>`}
    i = 0, somaH = 0, somaM = 0, vetorM = [], vetorH = [];
}