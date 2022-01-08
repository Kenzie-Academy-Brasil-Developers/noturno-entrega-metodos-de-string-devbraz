// Seu código vai aqui

// "text" recebe o texto



//"submit" envia o texto e executa o metodo selecionado retornando no output

function showResults(str) {

     const result = document.getElementById('results')
     result.innerHTML = ""

     const paragraphResult = document.createElement('p')
     paragraphResult.innerHTML = str

     result.appendChild(paragraphResult) 

}

function upper(event){

     event.preventDefault()
     let text = document.getElementById('stringInput').value

     let uc = text.toUpperCase()

     showResults(uc)

}

function lower(event){

     event.preventDefault()
     let text = document.getElementById('stringInput').value

     let lc = text.toLowerCase()

     showResults(lc)

}

function replaceFunction(event){

     event.preventDefault()
     let text = document.getElementById('stringInput').value

     const regex = /\W/g

     let rpc = text.replace(regex, "")

     showResults(rpc)

}

function concatFunction(event){

     event.preventDefault()
     let text = document.getElementById('stringInput').value

     let cct = text.concat(" Academy")

     showResults(cct)

}

function splitFunction(event){

     event.preventDefault()
     let text = document.getElementById('stringInput').value

     let spl = text.split("")

     showResults(spl)

}

const submitUpper = document.getElementById('toUpperCase')
submitUpper.addEventListener('click', (event) => upper(event))

const submitLower = document.getElementById('toLowerCase')
submitLower.addEventListener('click', (event) => lower(event))

const submitReplace = document.getElementById('replace')
submitReplace.addEventListener('click', (event) => replaceFunction(event))

const submitConcat = document.getElementById('concat')
submitConcat.addEventListener('click', (event) => concatFunction(event))

const submitSplit = document.getElementById('split')
submitSplit.addEventListener('click', (event) => splitFunction(event))




