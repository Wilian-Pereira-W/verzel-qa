# language: pt

Funcionalidade: Cálculo do frete

  Contexto:
    Dado que o cliente possui produtos no carrinho

  Cenário: Conceder frete grátis para subtotal a partir de R$ 200,00
    Dado que o subtotal dos produtos é de R$ 200,00
    Quando acessa o carrinho
    Então o frete deve ser grátis

  Cenário: Cobrar frete fixo para subtotal abaixo de R$ 200,00
    Dado que o subtotal dos produtos é de R$ 199,99
    Quando acessa o carrinho
    Então o frete deve ser de R$ 19,90
    E deve ser exibido quanto falta para atingir o frete grátis

  Cenário: Calcular frete com base no subtotal antes do desconto
    Dado que o subtotal dos produtos é de R$ 200,00
    Quando aplica um cupom de desconto
    Então o frete deve permanecer grátis

  Cenário: Não aplicar desconto de cupom sobre o valor do frete
    Dado que o subtotal dos produtos é de R$ 150,00
    Quando aplica um cupom válido de 10%
    Então o frete deve continuar sendo R$ 19,90
    E o desconto deve incidir apenas sobre o subtotal dos produtos
