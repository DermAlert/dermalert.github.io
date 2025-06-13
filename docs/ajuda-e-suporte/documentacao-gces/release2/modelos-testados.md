# Modelos de Machine Learning Testados e Escolhidos

A avaliação da qualidade de imagens é essencial em aplicações de diagnóstico médico, especialmente na análise de lesões de pele. Imagens de baixa qualidade podem comprometer a precisão diagnóstica, seja por especialistas humanos ou por sistemas de inteligência artificial. Neste contexto, decidimos avaliar três modelos distintos:

- **BRISQUE (Blind/Referenceless Image Spatial Quality Evaluator)**

- **Conn-Cerberus/Soma_Skin_Cancer_Classifier**

- **Anwarkh1/Skin_Cancer-Image_Classification**

## BRISQUE (Blind/Referenceless Image Spatial Quality Evaluator)
O BRISQUE é um modelo de avaliação de qualidade de imagem sem referência (No-Reference Image Quality Assessment - NR-IQA) que opera no domínio espacial. Ele analisa estatísticas naturais de cenas (Natural Scene Statistics - NSS) para quantificar a "naturalidade" de uma imagem, utilizando coeficientes de luminância localmente normalizados. Um modelo de regressão por vetores de suporte (SVR) é treinado para prever a qualidade da imagem com base nessas estatísticas.

- **Vantagens:**

    - Sem necessidade de imagem de referência: Avalia a qualidade da imagem sem requerer uma imagem original "perfeita".

    - Eficiência computacional: Requer menos recursos computacionais em comparação com modelos baseados em aprendizado profundo.

    - Aplicabilidade geral: Pode ser utilizado em diversas aplicações de avaliação de qualidade de imagem.

- **Limitações:**

    - Dependência de estatísticas de cenas naturais: Pode não ser ideal para imagens médicas, como lesões de pele, que possuem características estatísticas distintas das cenas naturais.

    - Sensibilidade a distorções específicas: Pode não capturar adequadamente distorções relevantes para diagnósticos médicos.

    - Necessidade de adaptação: Para melhor desempenho em imagens médicas, seria necessário treinar o modelo com um conjunto de dados específico desse domínio.

## Conn-Cerberus/Soma_Skin_Cancer_Classifier
Este modelo, disponível no Hugging Face, é especializado na classificação de imagens de lesões de pele. Ele utiliza técnicas de aprendizado profundo para identificar e classificar diferentes tipos de lesões cutâneas.

- **Desempenho:**

    - Acurácia: 89% na classificação de imagens de lesões de pele.

- **Vantagens:**

    - Especialização: Projetado especificamente para análise de lesões de pele.

    - Capacidade de generalização: Pode identificar uma variedade de lesões com boa precisão.

- **Limitações:**

    - Acurácia inferior a modelos mais recentes: Embora eficaz, apresenta desempenho inferior ao modelo Anwarkh1/Skin_Cancer-Image_Classification.

    - Possível necessidade de refinamento: Pode se beneficiar de ajustes adicionais ou treinamento com conjuntos de dados mais abrangentes.

## Anwarkh1/Skin_Cancer-Image_Classification
Também disponível no Hugging Face, este modelo utiliza a arquitetura Vision Transformer (ViT) para classificar imagens de lesões de pele em várias categorias, incluindo melanoma, carcinoma basocelular, entre outras.

- **Desempenho:**

    - Acurácia: 96% na classificação de imagens de lesões de pele.

- **Vantagens:**

    - Alta precisão: Desempenho superior na classificação de diferentes tipos de lesões.

    - Uso de arquitetura moderna: A utilização de ViT permite capturar características complexas das imagens.

    - Treinamento com dados específicos: Foi treinado com um conjunto de dados abrangente de imagens de lesões de pele.

- **Limitações:**

    - Requisitos computacionais: Pode demandar mais recursos computacionais devido à complexidade da arquitetura.

    - Necessidade de adaptação para novos dados: Pode requerer ajustes ao ser aplicado em conjuntos de dados diferentes dos utilizados no treinamento original.
