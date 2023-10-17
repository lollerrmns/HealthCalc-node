# HealthCalc-node: Calculadora de IMC (Índice de Massa Corporal) em Node.js

Este é um pacote Node.js simples que permite calcular o IMC com base no peso e na altura fornecidos.

## Instalação

Para instalar o pacote, você pode usar o npm:

```bash
npm install healthcalc-node

Uso

Aqui está um exemplo de como você pode usar este pacote em seu projeto Node.js:

javascript

const healthCalc = require('healthcalc-node');

// Fornecer peso em quilogramas e altura em metros
const peso = 70;
const altura = 1.75;

const imc = healthCalc.calcularIMC(peso, altura);

console.log(`Seu IMC é: ${imc}`);

API
calcularIMC(peso, altura)

Calcula o IMC com base no peso (em quilogramas) e altura (em metros) fornecidos.

    peso (number): O peso da pessoa em quilogramas.
    altura (number): A altura da pessoa em metros.

Retorna o valor do IMC calculado.
Exemplo de Saída

Seu IMC é: 22.86

Esperamos que este pacote seja útil para você. Se tiver alguma dúvida ou encontrar algum problema, não hesite em entrar em contato.