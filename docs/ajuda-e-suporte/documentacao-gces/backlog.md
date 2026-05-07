<section class="da-doc-hero">
  <p class="da-doc-hero__kicker">Documentação GCES</p>
  <h1>Backlog</h1>
  <p>Visão de dependências, arquitetura e itens de produto acompanhados durante a evolução do DermAlert.</p>
</section>

## Dependências Escolhidas

### Essenciais
- flask (backend API)
- flask-cors (liberar requisições do app mobile)
- pandas (manipular dados, pré-processamento)
- numpy (cálculos numéricos)
- scikit-learn (modelos de machine learning)
- joblib (salvar/carregar modelos)
- torch (PyTorch, treinar e usar redes neurais)
- torchvision (datasets e transformações de imagens)
- opencv-python (análise de qualidade de imagem)
- albumentations (data augmentation)

### Utilitários
- python-dotenv (ler variáveis de ambiente)
- pytest (testes)

### Dependências Externas

- apache-airflow (orquestrar pipeline de ML)
- mlflow (gerenciar experimentos de ML)
- docker (ambiente e deploy)

## Como a funcionalidade estará na arquitetura

<img src="https://github.com/DermAlert/dermalert.github.io/blob/main/docs/assets/arquitetura.png?raw=true" alt="Arquitetura"/>

## Backlog do Produto

<img src="https://github.com/DermAlert/dermalert.github.io/blob/main/docs/assets/backlog.png?raw=true" alt="Quadro do Backlog"/>

<img src="https://github.com/DermAlert/dermalert.github.io/blob/main/docs/assets/roadmap.png?raw=true" alt="Roadmap"/>


## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |20/04/2025| Criação da página do Backlog | [Henrique Galdino](https://github.com/hgaldino05) |[Vitor Pereira](https://github.com/vcpvitor)  |
| `1.1`  |26/04/2025| Adiciona roadmap, dependencias e arquitetura | [Izabella Alves](https://github.com/izabellaalves) |[Vitor Pereira](https://github.com/vcpvitor)  |
