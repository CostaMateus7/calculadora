let sinais = document.querySelector('#sinal')
let resultados = document.querySelector('#resultados')
let contas = document.querySelector('#contas')
const reseta = document.querySelector('#reseta')
const apagar = document.querySelector('#apaga')
const ponto = document.querySelector('#ponto')
const sinal = document.querySelectorAll('.sinal')
const botoes = document.querySelectorAll('.num')



// Função para calcular
function calcular(n1, n2, sinal){
    if(!n2){
      n2 = 0
    }
    let calculo = `${n1} ${sinal} ${n2}`
    return eval(calculo)
}

//EVENTOS

//Apagar somente um numero
apagar.addEventListener('click', ()=>{
  let apagarNum = contas.innerHTML
  contas.innerHTML = apagarNum.substring(0, contas.innerHTML.length - 1)
})

//Resetar
reseta.addEventListener('click', ()=>{
  contas.innerHTML =''
  resultados.innerHTML=''
  sinais.innerHTML = ''
})

//Imprimir os números valor na parte de contas
botoes.forEach((botao)=> {
  botao.addEventListener('click', (e)=>{
    if(sinais.innerHTML.includes('=')){
      sinais.innerHTML = ''
      resultados.innerHTML = ''
    }
    const valor = e.target.innerHTML
    contas.innerHTML += valor
  })
})

//Adicionando o ponto 
ponto.addEventListener('click', (e)=>{ 
  const valorPonto = e.target.innerHTML
  if(contas.innerHTML.includes('.') === false){
    if(contas.innerHTML == ""){
   contas.innerHTML = 0
  }
  contas.innerHTML += valorPonto
  }
})

//Adicionando eventos para os sinais ( + - / * = )
sinal.forEach((botao)=>{
  botao.addEventListener('click', (e)=>{
  const sinalizar = e.target.innerHTML
  const verificar = sinais.innerHTML


    // Tratando erros de divisão, multiplicação e sinal de igual
    if((verificar.includes('=') === true || verificar.includes('*') === true || verificar.includes('/') === true) && !contas.innerHTML){
      if(sinalizar === sinais.innerHTML){
        return sinais.innerHTML = sinalizar
      }
      return sinais.innerHTML = sinalizar
    } 

    // Quando os campos estão completamente preenchidos
    const filtro = resultados.innerHTML
    if(filtro && filtro!==undefined){
      const n1 = resultados.innerHTML
      const n2 = contas.innerHTML
      const sinal = sinais.innerHTML
      resultados.innerHTML = calcular(n1, n2, sinal)
      contas.innerHTML = ''
      sinais.innerHTML = sinalizar
    }
    // Quando inicia
    else{
      resultados.innerHTML = contas.innerHTML
      sinais.innerHTML = sinalizar
      contas.innerHTML = ''
    }
    
  })})


