var  num = document.getElementById('num')
res = document.getElementById('res')
sec = document.getElementById('sec')
vetor = [], soma = 0, somai = 0, i = 0;

function adiciona(){
    i++
    if (i <= 5){
        vetor.push(Number(num.value))
        num.value = ''
        num.focus()
        if (i == 5){
            calcular()
        }
    }else if (i > 5){window.alert('Por favor, se quiser continuar clique em SIM, senão clique em NÃO.')
        num.value = ''; num.focus()}       
}

function calcular(){
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] % 2 == 0){
            soma += vetor[i]
        }else{somai += vetor[i]}
    }
    res.innerHTML = `<p>A soma dos números pares foi ${soma}</p>`
    res.innerHTML += `<p>A soma dos números ímpares foi ${somai}</p>`
    res.innerHTML += `<p>Deseja repetir a operação? 
        <button type='button' onclick='sim()'>SIM</button>
            <button type='button' onclick='nao()'>NÃO</button>
        </p>`
}

function sim(){
    vetor = [], i = 0, soma = 0, somai = 0;
    res.innerHTML = ""
}

function nao(){sec.innerHTML = "OBRIGADO, VOLTE SEMPRE!!!"}