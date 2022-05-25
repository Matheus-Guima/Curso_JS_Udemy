const nome = 'João'
const altura = 1.80
let idade = 30 
let peso = 60
let imc = peso / (altura * altura)
const totalIMC = imc.toFixed(2)
console.log(`${nome} tem ${altura} metros e pesa ${peso}Kg`)
console.log(`O IMC de ${nome} é ${totalIMC}`)
