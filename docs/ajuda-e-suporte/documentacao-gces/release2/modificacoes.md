# Modificações no Frontend e no Backend

## Modificações no Backend

A nova versão do backend traz importantes melhorias no endpoint /registrar-lesao, estas melhorias permitem que este endpoint utilize modelos de Machine Learning para retornar a classificação das lesões presentes nas imagens ou retorne uma mensagem de erro caso a imagem enviada esteja com a qualidade ruim. Além disso, agora o código do backend passa por uma verificação de Lint.


### ✨ Funcionalidades Adicionadas

- Classificação da lesão: inclusão do retorno informando se a lesão identificada é benigna ou maligna.

- Avaliação da qualidade da imagem: o endpoint agora retorna uma métrica de qualidade da imagem submetida. Em casos de baixa qualidade, a API retorna um erro, evitando diagnósticos imprecisos.

- Pré-diagnóstico traduzido: o pré-diagnóstico da lesão é retornado e existe uma tratativa para retorná-lo de forma traduzida para facilitar a compreensão do leitor.

- Descrição do pré-diagnóstico: além da tradução, é disponibilizada uma descrição explicativa do pré-diagnóstico fornecido.

- A pipeline ganhou uma nova etapa de verificação de Lint usando a ferramenta Pylint.

### ♻️ Alterações Técnicas

- Atualização do arquivo pyproject.toml com a adição das seguintes dependências:

```
numpy

torch

pillow

transformers

torchvision

piq
```
### Exemplos

<img src="https://github.com/DermAlert/dermalert.github.io/blob/main/docs/assets/release2/modificacoesBackend1.png?raw=true" alt="Roadmap"/>


<img src="https://github.com/DermAlert/dermalert.github.io/blob/main/docs/assets/release2/modificacoesBackend2.png?raw=true" alt="Roadmap"/>


## Modificações no Frontend (Aplicativo)
A interface do aplicativo foi atualizada com melhorias no fluxo de cadastro de pacientes e visualização dos resultados de análise de lesões. Além disso, o Aplicativo também ganhou uma pipeline de CI (Integração Contínua).

### ✨ Funcionalidades Adicionadas

- Modal de resultados: novo modal que exibe os detalhes da análise da lesão, incluindo:
```
Tipo da lesão

Pré-diagnóstico e descrição

Data da análise

Número de imagens analisadas
```

- Foi implementada uma pipeline de CI (Integração Contínua) para o aplicativo, com execução automatizada via GitHub Actions. As etapas adicionadas são:

```
Checkout do código

Setup do Node.js (versão 18)

Instalação das dependências (npm install)

Análise de Lint (npm run lint)

Execução de testes (npm test)

Build do projeto (modo dev) com npx expo export

Verificação dos arquivos de build

Análise de qualidade de código com SonarCloud, utilizando o token SONAR_TOKEN e report de cobertura via coverage/lcov.info
```

### ♻️ Alterações no Fluxo de Submissão

- Melhoria no tratamento de imagens: suporte aprimorado a diferentes formatos, com conversão automática para o tipo File, garantindo compatibilidade com o backend.

### Exemplos

<img src="https://github.com/DermAlert/dermalert.github.io/blob/main/docs/assets/release2/modificacoesFrontend1.png?raw=true" alt="Roadmap"/>

<img src="https://github.com/DermAlert/dermalert.github.io/blob/main/docs/assets/release2/modificacoesFrontend2.png?raw=true" alt="Roadmap"/>

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |25/05/2025| Criação do documento | [Izabella Alves](https://github.com/izabellaalves) | [Henrique Galdino](https://github.com/hgaldino05)  |
