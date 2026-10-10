# Desafio Técnico de QA - Verzel

## Pré-requisitos

- Git
- Node.js 20 ou superior e npm

## Baixar o projeto

Escolha uma das opções para clonar o repositório:

**HTTPS**

```bash
git clone https://github.com/Wilian-Pereira-W/verzel-qa.git
```

**SSH** — requer uma chave SSH configurada na sua conta do GitHub:

```bash
git clone git@github.com:Wilian-Pereira-W/verzel-qa.git
```

Depois, entre na pasta do projeto:

```bash
cd verzel-qa
```

## Abrir no VS Code

Com o Visual Studio Code instalado e o comando `code` disponível no terminal, abra a pasta do projeto com:

```bash
code .
```

Para abrir o terminal integrado do VS Code, pressione `Ctrl+J` (no macOS, `Cmd+J`) ou use **Terminal > New Terminal**.

## Instalar dependências

```bash
npm install
npx playwright install
```

A suíte de testes E2E utiliza a [loja de QA da Verzel](https://verzel-store.qa-test-verzel-store.workers.dev/). Confirme que o ambiente está acessível antes de executar os testes.

## Estrutura dos testes

```text
src/
├── reports/             # Relatórios dos testes manuais
│   └── tests-manuals.md # Cenários, resultados e observações
├── evidence/            # Evidências coletadas durante os testes
│   └── screenshots/     # Capturas de tela dos bugs encontrados
└── tests/
    ├── features/  # Cenários em Gherkin
    └── e2e/       # Testes automatizados com Playwright
```

## Acessar os testes manuais

Consulte os cenários, resultados e observações em [src/reports/tests-manuals.md](src/reports/tests-manuals.md).

Para visualizar o arquivo formatado no VS Code, abra-o e pressione `Ctrl+Shift+V` (no macOS, `Cmd+Shift+V`). Também é possível abrir a paleta de comandos (`Ctrl+Shift+P` / `Cmd+Shift+P`) e selecionar **Markdown: Open Preview**.

## Evidências dos bugs

As imagens dos bugs encontrados estão em [src/evidence/screenshots](src/evidence/screenshots).

## Acessar os cenários de teste

Os cenários de teste criados estão em [src/tests/features](src/tests/features), organizados em arquivos `.feature`.

## Acessar os testes E2E

Os testes end-to-end (E2E) estão em [src/tests/e2e](src/tests/e2e).

## Executar os testes

```bash
npx playwright test
```

Para abrir a interface interativa do Playwright, acompanhar os testes e executá-los individualmente:

```bash
npx playwright test --ui
```

Por padrão, os testes são executados nos navegadores Chromium, Firefox e WebKit. Para executar em um único navegador, use, por exemplo:

```bash
npx playwright test --project=chromium
```

O relatório HTML pode ser aberto após a execução com:

```bash
npx playwright show-report
```
