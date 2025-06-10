# 🧠 Postmortem – Projeto DermAlert

## 1. 👥 Equipe

- Esther Sena Martins  
- Izabella Alves Pereira
- Leticia Martins
- Davi Rodrigues
- Davi Casseb
- Renan Araújo
- Guilherme
- Vitor
- Caio Lelis
- Henrique Galdino

---

## 2. 🌐 Contextualização

O **DermAlert** é um aplicativo mobile que auxilia na detecção de possíveis doenças de pele (como acne, manchas e tumores) a partir de imagens tiradas pelo próprio usuário. O sistema utiliza técnicas de MLOps para avaliar a qualidade da imagem, classificá-la e retornar um **pré-diagnóstico** com recomendações.

### Módulos do Projeto:
- **Frontend:** Interface do aplicativo para o envio de imagens e visualização dos resultados (modais).
- **Backend:** Processamento das imagens, avaliação da qualidade e classificação via modelo de machine learning.
- **Documentação:** Estruturação do projeto, instruções de instalação, guias de uso e contribuição.

---

## 3. 🧭 Ambientação da Equipe

A ambientação incluiu:
- Estudo dos repositórios existentes no GitHub
- Leitura e análise da documentação
- Configuração dos ambientes (Python, React Native)
- Definição de papéis e responsabilidades

**Dificuldade inicial:** Falta de instruções claras para rodar o backend e o frontend.  
**Solução:** Produção de documentação prática com exemplos e passo a passo de instalação.

---

## 4. 📄 Melhorias na Documentação

- Atualização do `README.md` com instruções claras e objetivas
- Adição de diagramas explicativos sobre a arquitetura do projeto
- Detalhamento dos endpoints da API (métodos, parâmetros e retornos)
- Inclusão de um guia de contribuição e checklist de boas práticas
- Automação de Issues e PullRquests

---

## 5. 🧠 Melhorias e Adições no Backend

- Verificação de qualidade de imagem com o algoritmo BRISQUE
- Integração do modelo de classificação (acne, mancha, possível tumor)
- Criação de endpoint para geração de alerta em casos suspeitos
- Refatoração do código para maior clareza e padronização

---

## 6. 📱 Melhorias e Adições no Frontend

- Integração com novos endpoints
- Criação de um novo modal de pré-diagnóstico com visual menos alarmante
- Uso de cores suaves e mensagens explicativas
- Ajustes de layout e acessibilidade

---
## 7. 🔄 Pipeline do Projeto

A equipe implementou uma pipeline MLOps utilizando **Airflow** e **GitHub Actions**, visando automatizar etapas críticas como:

- Validação da qualidade da imagem (com BRISQUE)
- Execução do modelo de classificação
- Geração de logs e alertas em tempo real
- Testes automatizados antes de cada deploy no backend

**Dificuldades:**  
Configurar a execução paralela das tarefas e lidar com erros silenciosos no Airflow.

**Soluções:**  
- Criação de DAGs bem segmentadas
- Monitoramento com alertas por log
- Padronização de diretórios e volumes no Docker

---

## 8. 🧩 Desenvolvimento da Nova Funcionalidade

**Funcionalidade desenvolvida:** Classificação da imagem enviada pelo usuário.

### Principais Dificuldades:
- Escolher uma métrica eficaz de qualidade de imagem que funcionasse bem sem ter que ter uma imagem de referência.
- Ajustar a sensibilidade do modelo para evitar falsos alarmes
- Tornar a comunicação dos resultados clara e tranquila para o usuário

**Soluções Encontradas:**
- Uso da métrica BRISQUE para validar a imagem
- Testes iterativos com imagens reais
- Reformulação do modal de pré-diagnóstico com linguagem cuidadosa
- - Utilização de pipeline automatizada para validação e inferência do modelo
- Pipeline MLOps com etapas de verificação de qualidade, classificação e geração de alerta


---

## 9. ⚠️ Problemas Encontrados e Soluções

| Problema | Solução |
|---------|---------|
| Backend mal documentado | Atualização completa do `README.md` e adição de documentação relacionada ao projeto e automoção de issue e pullrequests |
| Resultado alarmante para usuário final | Modal com linguagem moderada e ícones visuais |
| Falta de versionamento da API | Padronização de rotas (`/api/v1/`) |
| Ambiente local difícil de configurar | Criação de script de setup automatizado |

---

## 10. 🎓 Lições Aprendidas

- 

---

## 11. 💬 Feedback Pessoal e de Grupo

- 

---
