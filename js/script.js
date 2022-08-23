const botao = document.querySelectorAll('button')
const resultado = document.querySelector('#resultados')
botao.forEach((botao)=> {
  botao.addEventListener('click', ()=>{
    resultado.innerHTML += botao.innerHTML
  })
})
