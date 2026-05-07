<section class="da-doc-hero">
  <p class="da-doc-hero__kicker">Como funciona</p>
  <h1>Guia de Contribuição</h1>
  <p>Processo de colaboração, organização de commits, branches e boas práticas para contribuir com o DermAlert.</p>
</section>

Obrigado por considerar contribuir para o projeto DermAlert! Este documento fornece diretrizes para garantir que as contribuições sejam consistentes e de alta qualidade.
---

## 1. Código de Conduta

Este projeto adota o Código de Conduta do Contribuinte. Ao participar, espera-se que todos os colaboradores respeitem este código.

---

## 2. Como Contribuir

**1. Fork o Repositório**: Crie um fork do repositório principal para sua conta pessoal no GitHub.

**2. Clone o Repositório Forkado**: No seu ambiente local, clone o repositório forkado:
    
        
        git clone https://github.com/seu-usuario/DermAlert.git
        


**3. Crie uma Branch para sua Contribuição**: Baseie sua branch na branch `develop`:
    
    
        git checkout develop
        git checkout -b feature/nome-da-sua-feature
    
    
**4. Faça Commits Atômicos e Bem Descritos**: Siga as políticas de descrição de commits descritas abaixo.

**5. Atualize sua Branch com o Repositório Upstream**: Mantenha sua branch atualizada com as mudanças do repositório principal:
    
   
        git fetch upstream
        git merge upstream/develop
   
    
**6. Envie as Alterações para o seu Fork**:
    
    
        git push origin feature/nome-da-sua-feature   
    
    
**7 .Abra um Pull Request**: No GitHub, navegue até o repositório principal e abra um Pull Request da sua branch para a branch `develop`. Inclua uma descrição detalhada das alterações propostas.

---

## 3. Políticas de Commits

Utilizamos o padrão **conventional commits**:

```
tipo: descrição breve
```

### Tipos comuns:

- `feat`: nova funcionalidade
- `fix`: correção de bug
- `docs`: alterações na documentação
- `style`: mudanças visuais ou de formatação
- `refactor`: refatoração sem mudança de funcionalidade
- `test`: criação ou alteração de testes
- `chore`: tarefas administrativas

#### Exemplo:

```bash
git commit -m "feat: adicionar validação de CPF no formulário de cadastro"
```

---
## 4. Estratégia de Branches

Adotamos uma estratégia baseada em **Git Flow**:

| Tipo de Branch   | Prefixo        | Base         | Descrição                                               |
|------------------|----------------|--------------|----------------------------------------------------------|
| Principal        | `main`         | -            | Contém o código em produção                              |
| Desenvolvimento  | `develop`      | `main`       | Onde funcionalidades são integradas antes do release     |
| Funcionalidade   | `feature/*`    | `develop`    | Para novas funcionalidades                               |
| Correção         | `fix/*`        | `develop`    | Para correções de bugs                                   |
| Lançamento       | `release/*`    | `develop`    | Preparação para nova versão                              |
| Hotfix           | `hotfix/*`     | `main`       | Correções urgentes na produção                           |

---

## 5. Boas Práticas de Programação

- **Consistência de Código**: Siga os padrões de codificação definidos pelo projeto. Utilize ferramentas de lint para garantir a conformidade.
- **Documentação**: Comente o código de forma clara e mantenha a documentação atualizada. Isso facilita a compreensão e manutenção futura.
- **Testes**: Escreva testes para novas funcionalidades e correções de bugs. Certifique-se de que todos os testes passam antes de enviar um Pull Request.
- **Revisão de Código**: Participe ativamente das revisões de código. Feedback construtivo melhora a qualidade do código e promove o aprendizado coletivo.
- **Segurança**: Esteja atento a questões de segurança. Evite vulnerabilidades conhecidas e siga as melhores práticas para proteger o aplicativo e os dados dos usuários.

---

## 6. Comunicação

Utilizamos as [Issues](https://docs.github.com/pt/issues/tracking-your-work-with-issues/about-issues) e [Pull Requests](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/about-pull-requests) do GitHub para comunicação. Ao abrir uma Issue ou Pull Request, forneça o máximo de detalhes possível e esteja aberto a feedbacks e discussões.

---

Este guia foi elaborado com base nas [práticas recomendadas para repositórios](https://docs.github.com/pt/repositories/creating-and-managing-repositories/best-practices-for-repositories) e em guias de contribuição de projetos open source. Seguindo estas diretrizes, garantimos um ambiente de colaboração saudável e produtivo para todos os envolvidos no projeto DermAlert.

## Histórico de Versão

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |09/04/2025| Criação do documento de Contribuição | [Leticia Torres](https://github.com/leticiatmartins) |[Renan Araújo](https://github.com/renantfm4)  |
