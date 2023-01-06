const form = document.querySelector('#form')
const valueForm = document.querySelector('#value')
const resultDiv = document.querySelector('#result')

const isBinary = (num) =>{

  const regex = /^[01]+$/
  return regex.test(num)
}

const error = () => { 
  resultDiv.classList.remove('result')
  resultDiv.classList.add('errorResult')

  valueForm.classList.remove('value')
  valueForm.classList.add('valueError')
  
  
  resultDiv.innerText = `${valueForm.value} no es un numero binario`
 }

 const success = (result) => { 

   resultDiv.classList.remove('errorResult')
  resultDiv.classList.add('result')

  valueForm.classList.remove('valueError')
  valueForm.classList.add('value')

  resultDiv.innerText = `${result.steps} = ${result.totalResult}`
  }

 const converter = () => {
  const valueArr = valueForm.value.split('').reverse()
  let length = valueArr.length
  let totalResult = 0
  let steps = ''
  while(length > 0){
    let stepResult = valueArr[length - 1] * Math.pow(2, length - 1) 
    // console.log(`(${valueArr[length - 1]} * 2^${length - 1}) + `);
    steps += `+ (${valueArr[length - 1]} * 2^${length - 1}) `

    totalResult += stepResult
   

    length--
  }

  return {
    totalResult,
    steps: steps.slice(1, -1)
  }
 }

const validationForm = (e) => {
  e.preventDefault()

  let value = parseInt(valueForm.value)
  if(!isBinary(value)){
    error()
  }else{
    let resultConverter = converter()
    success(resultConverter)
  }
}


form.addEventListener('submit', validationForm)


