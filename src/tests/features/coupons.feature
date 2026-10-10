# language: pt

Funcionalidade: Aplicação de cupons de desconto

  Contexto:
    Dado que o cliente possui produtos no carrinho

  Cenário: Aplicar cupom válido com 10% de desconto
    Quando aplica o cupom "BEMVINDO10"
    Então deve ser aplicado um desconto de 10% sobre o subtotal dos produtos

  Esquema do Cenário: Aplicar cupom válido ignorando caixa e espaços externos
    Quando aplica o cupom "<cupom>"
    Então deve ser aplicado um desconto de 10% sobre o subtotal dos produtos

    Exemplos:
      | cupom          |
      | bemvindo10     |
      | BEMVINDO10     |
      | BemVindo10     |
      |  BEMVINDO10    |
      |  bemvindo10    |

  Cenário: Rejeitar cupom inexistente
    Quando aplica o cupom "CUPOMINVALIDO"
    Então deve ser exibida a mensagem "Cupom inválido."
    E nenhum desconto deve ser aplicado

  Cenário: Rejeitar cupom expirado
    Dado que existe um cupom expirado
    Quando tenta aplicá-lo ao carrinho
    Então deve ser exibida a mensagem "Cupom expirado."
    E nenhum desconto deve ser aplicado

  Cenário: Permitir apenas um cupom por vez
    Dado que um cupom já foi aplicado ao carrinho
    Quando tenta aplicar outro cupom sem remover o atual
    Então apenas um cupom deve permanecer aplicado
    E o sistema deve exigir a remoção do cupom atual antes de aplicar outro