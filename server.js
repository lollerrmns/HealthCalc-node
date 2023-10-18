const express = require('express');
const { IMC, ValueException } = require('healthcalc-node-package');

const app = express();

app.use(express.static('public')); // Servir arquivos estáticos a partir do diretório 'public'

// Rota para calcular o IMC
app.get('/calcular-imc', (req, res) => {
  try {
    const peso = parseFloat(req.query.peso);
    const altura = parseFloat(req.query.altura);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      throw new ValueException('Valores inválidos');
    }

    const imcCalculator = new IMC();
    const imc = imcCalculator.calcularIMC(peso, altura);
    const classificacao = imcCalculator.retornarClassificacaoIMC(imc);

    res.json({
      imc: imc,
      classificacao: classificacao,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
