let varA = 'A'
let varB = 'B'
let varC = 'C'

const tempVarA = varA
varA = varB
varB = varC
varC = tempVarA

console.log(varA, varB, varC)