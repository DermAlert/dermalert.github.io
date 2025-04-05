# DermAlert | Backend

## 📄 Visão Geral

O backend da aplicação DermAlert foi construído em Python utilizando o framework FastAPI, que oferece alta performance, suporte a tipagem estática com Python 3.10+ e geração automática de documentação. A arquitetura foi projetada com foco na modularização. O backend é responsável por toda a lógica de negócio, autenticação, persistência de dados e integração com o aplicativo mobile.

Entre os principais recursos, destacam-se a integração com banco de dados relacional via SQLAlchemy, gerenciamento de migrações com Alembic, autenticação baseada em JWT, e suporte a CORS para comunicação com o frontend. O sistema conta ainda com scripts de inicialização e popularização do banco de dados, além de rotas organizadas por responsabilidade funcional, como usuários, atendimentos e unidades de saúde.

## 🛠️ Principais Tecnologias
As principais ferramentas e bibliotecas empregadas são:

- [FastAPI](https://fastapi.tiangolo.com/):
Framework web moderno e de alto desempenho para a construção de APIs em Python. Destaca-se pela facilidade de uso, rapidez e suporte nativo à validação de dados e documentação automática.​

- [SQLAlchemy](https://www.sqlalchemy.org/):
Biblioteca de mapeamento objeto-relacional (ORM) que facilita a interação com bancos de dados relacionais, permitindo manipular dados de forma mais intuitiva e segura.​

- [Alembic](https://alembic.sqlalchemy.org/en/latest/):
Ferramenta de migração de banco de dados que trabalha em conjunto com o SQLAlchemy, permitindo gerenciar versões e alterações no esquema do banco de dados de forma controlada.​

- [Docker Compose](https://docs.docker.com/compose/):
Ferramenta que facilita a definição e execução de aplicações multi-contêiner, permitindo orquestrar serviços, redes e volumes de forma declarativa.​

- [Poetry](https://python-poetry.org/):
Gerenciador de dependências e ambientes virtuais para Python, que simplifica a instalação e o gerenciamento de bibliotecas, garantindo reprodutibilidade e isolamento do ambiente.

## 📁 Estrutura de Pastas

```bash
📁 backend
│
├── 📁 .github
│   └── 📁 workflows
│       └── 📝 CI/CD (GitHub Actions)
│
├── 📁 kubernetes
│   └── 🧩 Manifests de implantação (YAMLs)
│       └── 📄 deploy.yaml, service.yaml, etc.
│
└── 📁 project
    │
    ├── 📁 app
    │   │
    │   ├── 📁 api
    │   │   └── 📁 routes
    │   │       └── 🧩 Arquivos de rotas agrupadas (user_routes.py, admin_routes.py, etc.)
    │   │
    │   ├── 📁 core
    │   │   └── ⚙️ Configurações centrais da aplicação (lifespan, CORS, inicialização)
    │   │
    │   ├── 📁 crud
    │   │   └── 📄 Operações de Create, Read, Update, Delete
    │   │
    │   ├── 📁 database
    │   │   ├── 📄 models.py (modelos ORM)
    │   │   ├── 📄 database.py (conexão com o banco)
    │   │   └── 📄 seed.py / populate_data.py (popular dados de exemplo)
    │   │
    │   └── 📁 utils
    │       └── 🧰 Funções auxiliares e helpers
    │
    └── 📁 migrations
        └── 📁 versions
            └── 📄 Arquivos de migração gerados pelo Alembic
```

## 🌐 Rotas da Aplicação


| Rota                                             | Método | Descrição                                                                 | Permissão                            | Corpo da Requisição                                                           | Resposta                                                             |
|--------------------------------------------------|--------|---------------------------------------------------------------------------|--------------------------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------|
| `/admin/convidar-usuario`                        | POST   | Cadastra ou reenvia convite para um novo usuário pendente                 | Apenas `ADMIN`                       | `{ cpf, email, unidade_saude_id, role_id }`                                  | `{ "message": "Convite enviado com sucesso!" }`                      |
| `/admin/editar-usuario`                          | POST   | Edita dados de um usuário (unidade, permissão e status ativo/inativo)    | Apenas `ADMIN`                       | `{ cpf, unidade_saude, role_id, fl_ativo }`                                  | Retorna o usuário atualizado                                        |
| `/api/eventos/`                                  | GET    | Lista todos os eventos cadastrados                                       | Qualquer usuário                     | -                                                                            | Lista de eventos                                                    |
| `/api/eventos/`                                  | POST   | Cria um novo evento                                                       | `ADMIN`                              | `{ "titulo": "Evento A", "data": "2025-05-01", "descricao": "..." }`         | Objeto do evento criado                                             |
| `/api/eventos/{id}/`                             | GET    | Detalha um evento específico                                              | Qualquer usuário                     | -                                                                            | Objeto do evento                                                    |
| `/api/eventos/{id}/`                             | PUT    | Atualiza um evento                                                        | `ADMIN`                              | `{ "titulo": "Evento Atualizado", "data": "2025-05-01", "descricao": "..." }`| Objeto do evento atualizado                                         |
| `/api/eventos/{id}/`                             | DELETE | Remove um evento                                                          | `ADMIN`                              | -                                                                            | Confirmação de remoção                                              |
| `/redirect`                                      | GET    | Redireciona o usuário para o app DermAlert                                | Qualquer usuário                     | Parâmetros de query: `token`, `source`                                       | HTML com redirecionamento via JavaScript                           |
| `/supervisor/convidar-usuario`                   | POST   | Envia convite para novo usuário vinculado à mesma Unidade de Saúde       | `SUPERVISOR`                         | `UserCreateSupervisorSchema`                                                 | `{ "message": "Convite enviado com sucesso!" }`                     |
| `/supervisor/editar-usuario`                     | POST   | Edita permissão e status de usuário da mesma Unidade de Saúde            | `SUPERVISOR`                         | `SupervisorUserEdit`                                                         | `UserOut` (dados atualizados do usuário)                            |
| `/token`                                         | POST   | Gera tokens de acesso e refresh com base em CPF e senha                  | Pública (Login)                      | `username` (CPF), `password` (OAuth2PasswordRequestForm)                     | `{ "access_token": "...", "refresh_token": "...", "token_type": "bearer" }` |
| `/token/get-current-user`                        | GET    | Retorna as informações do usuário autenticado                            | Qualquer usuário autenticado         | -                                                                            | `UserOut` (com roles e unidadeSaude)                               |
| `/token/refresh`                                 | POST   | Gera novos tokens a partir de um refresh token válido                     | Qualquer usuário com token válido    | `TokenRefresh` (`{"refresh_token": "..."}`)                                 | `{ "access_token": "...", "refresh_token": "...", "token_type": "bearer" }` |
| `/cadastrar-unidade-saude`                       | POST   | Cadastra uma nova Unidade de Saúde                                        | `ADMIN`                              | `UnidadeSaudeCreateSchema`                                                   | Objeto `UnidadeSaude`                                              |
| `/listar-unidades-saude`                         | GET    | Lista todas as Unidades de Saúde                                          | Pública                              | -                                                                            | Lista de `UnidadeSaude`                                            |
| `/listar-unidade-saude/{unidade_id}`             | GET    | Retorna uma Unidade de Saúde com total de pacientes e profissionais       | Pública                              | -                                                                            | Dados da unidade + contagens                                       |
| `/editar-unidade-saude/{unidade_id}`             | POST   | Atualiza os dados de uma Unidade de Saúde                                 | `ADMIN`                              | `UnidadeSaudeUpdateSchema`                                                   | Objeto `UnidadeSaude` atualizado                                   |
| `/listar-usuarios-unidade-saude/{unidade_id}`    | GET    | Lista os usuários ativos da Unidade de Saúde com nível de acesso         | `SUPERVISOR`                         | -                                                                            | Lista de `UserResponseSchema`                                      |
| `/completar-cadastro`                            | POST   | Completa o cadastro de um usuário usando um token e os dados fornecidos  | Usuário com token                    | -                                                                            | Confirmação do cadastro                                            |
| `/dados-completar-cadastro`                      | GET    | Retorna dados do usuário antes de completar o cadastro                   | Usuário com token                    | -                                                                            | Dados parciais do usuário                                          |
| `/dados-resetar-senha`                           | GET    | Retorna o e-mail do usuário a partir de um token de redefinição de senha | Usuário com token                    | -                                                                            | E-mail do usuário                                                  |
| `/esqueci-minha-senha`                           | POST   | Envia e-mail com link/token para redefinição de senha                     | Pública                              | `email`                                                                      | Confirmação de envio do e-mail                                     |
| `/resetar-senha`                                 | POST   | Redefine a senha do usuário usando token e nova senha                     | Usuário com token                    | `nova_senha`, `token`                                                        | Confirmação de redefinição                                         |
| `/alterar-senha`                                 | POST   | Altera a senha do usuário autenticado, validando a senha atual           | Qualquer usuário autenticado         | `senha_atual`, `nova_senha`                                                  | Confirmação de alteração                                           |


## 🚀 Como rodar a aplicação

