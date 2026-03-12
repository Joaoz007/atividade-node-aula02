console.log("Atividade Aula 02 - Node.js");

console.log("\n== 1)Tipos primitivos ==");
const texto = "Olá";
const numero = 10;
const verdadeiro = true;
let indefinido;
const vazio = null;
const grande = 123n;
const id = Symbol("id");

console.log(typeof texto);       // string
console.log(typeof numero);      // number
console.log(typeof verdadeiro);  // boolean
console.log(typeof indefinido);  // undefined
console.log(typeof vazio);       // object (bug histórico do JS)
console.log(typeof grande);      // bigint
console.log(typeof id);          // symbol


console.log("\n== 2)Bigint and Symbol ==");
// BigInt
const numeroGigante = 9007199254740991n;
console.log(numeroGigante);      // 9007199254740991n
console.log(typeof numeroGigante); // bigint

// Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false (cada Symbol é único)
console.log(typeof id1);  // symbol


console.log("\n== 3)Operadores ==");
// Matemáticos
console.log(5 + 3); // 8
console.log(5 * 3); // 15

// Logicos
console.log(true && false); // false
console.log(true || false); // true

// Comparação
console.log(5 > 3); // true
console.log(5 == "5"); // true (comparação fraca)
console.log(5 === "5"); // false (comparação estrita)


console.log("\n== 4) Concatenação e conversão ==");
console.log(2 + "2");     // "22" (concatenação)
console.log(2 + (+"2"));  // 4 (conversão para número)
console.log("Idade: " + 20); // "Idade: 20"


console.log("\n== 5) Escopo léxico e blocos ==");
console.log("Bloco simples");
{
  const dentro = "ok";
  console.log(dentro); // ok
}

// console.log(dentro); // ReferenceError

console.log("De dentro para fora");
if (true) {
  const a = 10;
  let b = 20;

  console.log(a, b); // 10 20
}

// console.log(a); // erro
// console.log(b); // erro

console.log("De fora para dentro");
const fora = "visível";

if (true) {
  console.log(fora); // visível
}

console.log("Var vazando o bloco");
if (true) {
  var x = 10;
}

console.log(x); // 10 (vazou do bloco)


console.log("\n== 6) Shadowing com const ==");
const bloco = "valor";

if (true) {
  console.log(bloco); // valor

  {
    const bloco = "outro valor";
    console.log(bloco); // outro valor
  }

  console.log(bloco); // valor
}


console.log("\n== 7) Imutabilidade ==");
let nome = "joao";

nome.toUpperCase();
console.log(nome); // joao (não mudou)

nome = nome.toUpperCase();
console.log(nome); // JOAO


console.log("\n== 8) Assincronismo com setTimeout ==");
console.log("setTimeout entra na fila e roda depois do código atual");

console.log("\nExemplo ABC:");
console.log("A"); // A

setTimeout(() => {
  console.log("B"); // B
}, 0);

console.log("C"); // C

// ordem real: A, C, B

console.log("\nExemplo com Timeout:");
setTimeout(() => {
  console.log("Timeout 0"); // segundo
}, 0);

setTimeout(() => {
  console.log("Timeout 100"); // terceiro
}, 100);

console.log("Fim do código"); // primeiro

// ordem real: Fim do código, Timeout 0, Timeout 100