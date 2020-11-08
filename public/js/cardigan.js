var inputTamanho = document.querySelector('[name=tamanho]')
var outputTamanho = document.querySelector('[name=valoramanho]')

function mostaTamanho(){
    outputTamanho.value = inputTamanho
    outputTamanho.textContent = event.target.value
}

inputTamanho.oninput = mostaTamanho
inputTamanho.onchange = mostaTamanho