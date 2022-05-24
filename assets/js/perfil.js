let sumar = () => {
    contador = 7
    console.log()
    aportes.innerHTML = 7
}

const aportes = document.getElementById("aportes")
const espichar = document.getElementById("espichar")

espichar.addEventListener('click', ()=>{
  sumar()
})