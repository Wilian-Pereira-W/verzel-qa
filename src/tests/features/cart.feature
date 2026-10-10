# language: pt

Funcionalidade: Regras de validação e formatação do carrinho

  Cenário: Impedir adição de mais de 5 unidades do mesmo produto pela interface
    Dado que o cliente está na página de um produto
    Quando tenta adicionar 6 unidades do mesmo produto ao carrinho
    Então a interface deve bloquear a adição
    E deve exibir mensagem informando o limite de 5 unidades por pedido

  Cenário: Validar limite de 5 unidades por produto também via API
    Dado que o cliente envia uma requisição POST para o endpoint do carrinho
    Quando a requisição contém 6 unidades do mesmo produto
    Então a API deve retornar erro de validação
    E o pedido não deve ser criado

  Cenário: Arredondar valores monetários para duas casas decimais
    Dado que o carrinho possui valores com mais de duas casas decimais
    Quando o sistema calcula os totais de produtos, descontos e frete
    Então todos os valores exibidos e processados devem ser arredondados para duas casas decimais