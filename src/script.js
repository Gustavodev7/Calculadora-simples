// Seleciona todos os botões de operação e adiciona um evento de clique a cada um
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
      // Obtém o tipo de operação definido no atributo data-op do botão clicado
      const op = button.getAttribute('data-op');
      // Lê os valores dos inputs e converte para número (parseFloat)
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      let resultado;
  
      // Verifica se os valores inseridos são números válidos
      if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira dois números válidos.";
      } else {
        // Seleciona a operação de acordo com o botão clicado
        switch (op) {
          case 'add':
            resultado = num1 + num2;
            break;
          case 'subtract':
            resultado = num1 - num2;
            break;
          case 'multiply':
            resultado = num1 * num2;
            break;
          case 'divide':
            // Evita a divisão por zero
            if (num2 === 0) {
              resultado = "Divisão por zero não é permitida.";
            } else {
              resultado = num1 / num2;
            }
            break;
          default:
            resultado = "Operação inválida.";
        }
      }
  
      // Atualiza o conteúdo do elemento com id "result" para mostrar o resultado da operação
      document.getElementById('result').textContent = "Resultado: " + resultado;
    });
  });
  