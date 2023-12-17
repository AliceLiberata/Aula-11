
var a = Number(prompt("Digite um número"))
var b = Number(prompt("Digite outro número"))

function multidn(a, b){
    return a * b;
}
const x = multidn(a, b)
 alert(x)
 
 //SEGUNDO PASSO
 var base = Number(prompt("Informe a base da conta"))
 var expoente = Number(prompt("Agora o expoente para obter o resultado "))

 function resultado(base, expoente){
    return base ** expoente;
}
const y = resultado(base, expoente)
 alert(y)

//TERCEIRO PASSO
//AULA 9
/*
var saldo = Number(prompt('Seu saldo atual'))
var compra = Number(prompt('Valor da compra'))
var x = saldo-compra

if (saldo>=compra) {
  alert('Seu saldo ficará ' +x);
} else if (saldo<compra) {
  alert('Saldo insuficiente');
}

  
  var i = Number(5), texto = '';
  var z = Number(prompt('Seu salário'))
  var y = z*i
  var t = y/100
while(z<=1500){
   texto += 'Seu salário era ' + z + ' aumentou ' + t 
   i++
  alert(texto)
}

while(z<=700){
  texto += 'Seu salário era ' + z + 'aumentou ' + t;
i++
}


 let j = prompt('Primeiro lado')
 let k = prompt('Segundo lado')
 let o = prompt('Terceiro lado')

if(j == k == o)
    alert('Equilátero');

else if (j == k !== o)
    alert('Isósceles');

else(j !== k !== o);
    alert('Escaleno')
*/

//AULA 8 
function minhafuncao(){
  const ano = Number("2023")
  let nascimento = Number(prompt("Digite seu ano de nascimento"))
   return ano - nascimento
 }
  const u = minhafuncao()
 let nome = prompt('E agora seu nome')
 
 document.write("Olá, seu nome é " + nome + " e você tem " + u + " anos.")
