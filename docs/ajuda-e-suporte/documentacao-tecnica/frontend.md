<section class="da-doc-hero">
  <p class="da-doc-hero__kicker">Documentação técnica</p>
  <h1>DermAlert | Frontend</h1>
  <p>Arquitetura mobile, telas, tecnologias e orientações para executar a aplicação frontend.</p>
  <div class="da-doc-actions">
    <a class="da-doc-button" href="https://github.com/DermAlert/applicativo">Repositório do app</a>
    <a class="da-doc-button da-doc-button--ghost" href="../backend/">Ver backend</a>
  </div>
</section>

## 📄 Visão Geral

A aplicação DermAlert é um aplicativo mobile multiplataforma desenvolvido com React Native, com suporte do Expo, Redux Toolkit para gerenciamento de estado global e React Navigation para navegação entre telas. O app tem como objetivo principal facilitar o registro, avaliação e acompanhamento clínico de pacientes com lesões dermatológicas, especialmente voltado para o apoio ao diagnóstico de câncer de pele.

## 🛠️ Principais Tecnologias

A seguir, estão descritas as principais ferramentas utilizadas no projeto:

- [React Native](https://reactnative.dev/):
Serve como a base da aplicação, permitindo o desenvolvimento de interfaces nativas para Android e iOS a partir de uma única base de código em JavaScript. Isso torna a manutenção e evolução do app mais simples e eficiente.

- [Expo](https://docs.expo.dev/):
Framework que facilita o desenvolvimento com React Native. O Expo fornece um ambiente pré-configurado com suporte a diversas funcionalidades nativas, como acesso à câmera e ao sistema de arquivos. No projeto, foi utilizada a nova CLI local do Expo — recomendada a partir do SDK 46 — garantindo compatibilidade com versões recentes do Node.js e maior estabilidade.

- [React Navigation](https://reactnavigation.org/):
Biblioteca responsável pela navegação entre telas no aplicativo. Com ela, é possível implementar navegações por pilhas (stacks), abas (tabs) e rotas personalizadas, oferecendo uma experiência fluida ao usuário.

- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/):
Recurso da própria plataforma Expo, utilizado para capturar imagens diretamente da câmera do dispositivo. Essa funcionalidade é essencial para o propósito principal da aplicação, que envolve o registro de lesões de pele.

- [Expo File System](https://docs.expo.dev/versions/latest/sdk/filesystem/):
Ferramenta que permite a manipulação e o armazenamento de arquivos localmente no dispositivo. No caso da DermAlert, é usada principalmente para armazenar temporariamente as imagens capturadas.

- [AsyncStorage](https://reactnative.dev/docs/asyncstorage) (@react-native-async-storage/async-storage):
Biblioteca usada para persistência de dados no dispositivo, como preferências do usuário ou informações de sessão. Isso permite que a aplicação mantenha dados importantes mesmo quando está offline.

## 👥 Perfis de Usuário

A aplicação define dois perfis principais:

- **Profissional de saúde (usuário padrão)**: pode realizar atendimentos, registrar pacientes, preencher formulários clínicos e capturar imagens de lesões.

- **Administrador**: além das funcionalidades de um profissional comum, pode cadastrar, editar e visualizar profissionais de saúde e unidades de atendimento.

## 📁 Estrutura de Pastas

```bash
├── App.tsx                 # Arquivo principal com as rotas
├── pages/                 # Telas do aplicativo
│   ├── admin/             # Telas do administrador
│   ├── user/              # Telas do usuário comum
│   │   ├── lesoes/        # Telas relacionadas a lesões
│   │   ├── consent/       # Telas de consentimento
│   │   ├── questionario/  # Questionário de anamnese
│   └── unidadeSaude/      # Telas para unidades de saúde
├── store/                 # Redux: slices e store central
├── components/            # Componentes reutilizáveis
├── services/              # Integração com APIs
└── utils/                 # Funções utilitárias
```

## 📱Telas e Funcionalidades

O aplicativo é organizado em módulos funcionais que refletem o fluxo clínico e administrativo da plataforma:

- **Autenticação e Acesso**: [Login](https://github.com/DermAlert/applicativo/blob/main/pages/LoginScreen.jsx), [Register](https://github.com/DermAlert/applicativo/blob/main/pages/RegisterScreen.jsx), [CreatePassword](https://github.com/DermAlert/applicativo/blob/main/pages/CreatePasswordScreen.jsx), [EsqueciSenha](https://github.com/DermAlert/applicativo/blob/main/pages/EsqueciSenhaScreen.js), [RedefinirSenha](https://github.com/DermAlert/applicativo/blob/main/pages/RedefinirSenhaScreen.js), [SuccessScreen](https://github.com/DermAlert/applicativo/blob/main/pages/SuccessScreen.jsx), e [NoRegistration](https://github.com/DermAlert/applicativo/blob/main/pages/NoRegistrationScreen.js).


- **Atendimento e Cadastro de Pacientes**: [Home](https://github.com/DermAlert/applicativo/blob/main/pages/user/HomeScreen.jsx), [NovoAtendimento](https://github.com/DermAlert/applicativo/blob/main/pages/user/NovoAtendimentoScreen.jsx), [NovoPaciente](https://github.com/DermAlert/applicativo/blob/main/pages/user/NovoPacienteScreen.jsx).

- **Registro de Lesões**: [InjuryList](https://github.com/DermAlert/applicativo/blob/main/pages/user/lesoes/InjuryListScreen.js), [AddInjury](https://github.com/DermAlert/applicativo/blob/main/pages/user/lesoes/AddInjuryScreen.js), [InjuryLocation](https://github.com/DermAlert/applicativo/blob/main/pages/user/lesoes/InjuryLocationScreen.js), [Camera](https://github.com/DermAlert/applicativo/blob/main/pages/user/lesoes/CameraScreen.js), [PhotoPreview](https://github.com/DermAlert/applicativo/blob/main/pages/user/lesoes/PhotoPreviewScreen.js). Essas telas permitem registrar e fotografar lesões, além de indicar sua localização anatômica.


- **Questionário Clínico**: [QuestoesGeraisSaude](https://github.com/DermAlert/applicativo/blob/main/pages/user/questionario/QuestoesGeraisSaude.js), [AvaliacaoFototipo](https://github.com/DermAlert/applicativo/blob/main/pages/user/questionario/AvaliacaoFototipo.js), [HistoricoCancer](https://github.com/DermAlert/applicativo/blob/main/pages/user/questionario/HistoricoCancer.js), [FatoresRisco](https://github.com/DermAlert/applicativo/blob/main/pages/user/questionario/FatoresRisco.js), [InvestigacaoLesoes](https://github.com/DermAlert/applicativo/blob/main/pages/user/questionario/InvestigacaoLesoes.js), [ResultadoAnamnese](https://github.com/DermAlert/applicativo/blob/main/pages/user/questionario/ResultadoAnamnese.js). Um formulário detalhado é preenchido durante o atendimento para levantamento de fatores de risco.


- **Consentimento Informado**: [ConsentTermScreen](https://github.com/DermAlert/applicativo/blob/main/pages/user/consent/ConsentTermScreen.js), [SignatureCameraScreen](https://github.com/DermAlert/applicativo/blob/main/pages/user/consent/SignatureCameraScreen.js), [SignaturePreviewScreen](https://github.com/DermAlert/applicativo/blob/main/pages/user/consent/SignaturePreviewScreen.js). Coleta da assinatura do paciente diretamente no dispositivo.


- **Administração (somente administradores)**: [HomeAdmin](https://github.com/DermAlert/applicativo/blob/main/pages/admin/HomeAdminScreen.jsx), [ProfessionalsList](https://github.com/DermAlert/applicativo/blob/main/pages/admin/ProfessionalsListScreen.jsx), [RegisterProfessional](https://github.com/DermAlert/applicativo/blob/main/pages/admin/RegisterProfessionalScreen.jsx), [EditProfessional](https://github.com/DermAlert/applicativo/blob/main/pages/admin/EditProfessionalScreen.jsx), [HealthUnitList](https://github.com/DermAlert/applicativo/blob/main/pages/unidadeSaude/HealthUnitListScreen.jsx), [RegisterHealthUnit](https://github.com/DermAlert/applicativo/blob/main/pages/unidadeSaude/RegisterHealthUnitScreen.jsx), [EditHealthUnit](https://github.com/DermAlert/applicativo/blob/main/pages/unidadeSaude/EditHealthUnitScreen.jsx).

## 🚀 Como rodar a aplicação

### Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter os seguintes itens instalados em sua máquina:

- Node.js (recomenda-se a versão LTS)

- Npm ou Yarn

- Expo CLI – Instale com:

```bash
npm install -g expo-cli
```

- Um smartphone com o aplicativo Expo Go instalado (Android ou iOS) ou um emulador Android configurado

1. Clone o repositório

```bash
git clone https://github.com/DermAlert/applicativo
cd aplicativo
```

2. Instale as dependências
Com npm:

```bash
npm install
```

Ou com yarn:

```bash
yarn install
```

4. Inicie a aplicação com Expo

```bash
npx expo start
```

Isso abrirá o Expo DevTools no navegador. A partir dele, você pode:

- Escanear o QR code com o app Expo Go

- Executar no emulador Android

- Abrir em navegador com Web Preview

## Repositório

O repositório do frontend pode ser acessado [aqui](https://github.com/DaviRogs/applicativo).

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |05/04/2025| Cria documento e adiciona conteúdo completo | Izabella Alves |Davi Rodrigues  |
| `1.1`  |23/04/2025| Adicionando link para o repositório | [Henrique Galdino](https://github.com/hgaldino05) |[Vitor Pereira](https://github.com/vcpvitor)  |
