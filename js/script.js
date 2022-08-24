const botoes = document.querySelectorAll('.num')
const resultados = document.querySelector('#resultados')
let contas = document.querySelector('#contas')
const reseta = document.querySelector('#reseta')
const apagar = document.querySelector('#apaga')
console.log(contas)


apagar.addEventListener('click', ()=>{
  let apagarNum = contas.innerHTML
  contas.innerHTML = apagarNum.substring(0, contas.innerHTML.length - 1)
})

reseta.addEventListener('click', ()=>{
  contas.innerHTML =''
  resultados.innerHTML=''
})



botoes.forEach((botao)=> {
  botao.addEventListener('click', (e)=>{
    const valor = e.target.innerHTML
    contas.innerHTML += valor
  })
})

// const button = document.querySelectorAll('button')
// button.forEach((btn)=>{
//   btn.addEventListener('click', (e)=>{
//     const valor = e.target.innerText
//     console.log(valor)
//   })
  
// })

