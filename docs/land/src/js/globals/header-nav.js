// /src/js/globals/header-nav.js

// ───────────────────────────────────────────────────────────
// Precarrega o tema antes do paint (evita flicker)
(() => {
  const saved = localStorage.getItem('theme');
  if (saved ? saved === 'dark' : false) {
    document.documentElement.classList.add('dark');
  }
})();

// ───────────────────────────────────────────────────────────
// i18n dicionários (núcleo + HERO embutida)
const I18N = {
  // ───────────────────────────────────────────────────────────
  // Português (Brasil)
  // ───────────────────────────────────────────────────────────
  'pt-BR': {
    // Header / Navegação
    como_funciona: 'Como funciona',
    ajuda_e_suporte: 'Ajuda e Suporte',
    curso_extensao: 'Curso de Extensão',
    sobre: 'Sobre',
    documentacao: 'Documentação',
    politica_privacidade: 'Política de Privacidade',
    solicitar_acesso: 'Solicitar acesso',
    remover_dados: 'Remover dados',
    faq: 'Perguntas frequentes',
    rapido_acesso: 'Rápido acesso',
    status: 'Status',
    lancamentos: 'Lançamentos',
    tema_escuro: 'Tema escuro',
    novo: 'Novo',

    // Hero
    hero_title: 'Triagem dermatológica inteligente, simples e segura.',
    hero_sub: 'Registre paciente, conduza anamnese e organize dados para decisões clínicas e pesquisa.',
    hero_cta_acesso: 'Solicitar Acesso',
    hero_cta_sobre: 'Sobre o Projeto',

    // Destaques
    features_speed: 'Velocidade',
    features_security: 'Segurança de dados',
    features_standardization: 'Padronização',

    // Parceiros
    partners_initiative: 'Iniciativa:',
    partners_support: 'Apoio:',

    // Features / Funcionalidades (cards + imagem)
    features_title: 'Conheça as funcionalidades',
    features_sub: 'Com o DermAlert, o processo de triagem é simples e rápido.',
    features_step1_title: 'Cadastre o Paciente',
    features_step1_desc: 'Economize tempo registrando dados básicos de forma simples e segura.',
    features_step1_cta: 'Começar Agora',
    features_step2_title: 'Registrar lesão',
    features_step2_desc: 'Informe o local da lesão e colete imagens clínicas com clareza.',
    features_step2_cta: 'Continuar',
    features_step3_title: 'Triagem e pesquisa',
    features_step3_desc: 'Dados organizados que apoiam decisão e ciência.',
    features_step3_cta: 'Ver resultados',

    // About / Sobre o Dermalert
    about_title: 'Sobre o Dermalert',
    about_sub: 'O Primeiro Passo na Prevenção do Câncer de Pele',
    about_highlight:
      'O DermAlert é um projeto voltado para a triagem de pacientes com suspeita de câncer de pele, facilitando a identificação precoce e o encaminhamento adequado.',
    about_note:
      'Desenvolvido pelo Lab Livre em parceria com a UnB e a FAP-DF, o projeto busca aprimorar o atendimento primário por meio da tecnologia, tornando o diagnóstico mais acessível e eficiente.',

    // Para quem é
    who_title: 'Para quem é',
    who_sub:
      'Feito para equipes clínicas que buscam velocidade, padronização e segurança de dados.',
    who_card1_title: 'Residências Médicas',
    who_card1_desc:
      'Padronize casos, ensine boas práticas de documentação e amplie a rastreabilidade no ensino.',
    who_card2_title: 'Hospitais',
    who_card2_desc:
      'Triagem guiada em poucos minutos, com histórico acessível e encaminhamento facilitado.',
    who_card3_title: 'Unidades Básicas de ',
    who_card3_title_suffix: 'Saúde - UBS',
    who_card3_desc:
      'Integre ambulatórios e enfermarias com um fluxo único de triagem — do cadastro à imagem clínica.',
    who_cta: 'Saiba Mais',

    // FAQ
    faq_title: 'Perguntas Frequentes',
    faq_sub:
      'Reunimos as dúvidas mais comuns para que você entenda como o DermAlert funciona na prática.',
    faq_q1: 'Como o software auxilia na triagem dermatológica?',
    faq_a1:
      'O software permite coletar dados do paciente, realizar anamnese guiada e registrar fotos das lesões, facilitando a priorização de casos e agilizando o atendimento médico.',
    faq_q2: 'Preciso de conexão com a internet para usar o app?',
    faq_a2:
      'Você pode registrar informações e imagens mesmo offline. Assim que a conexão for restabelecida, os dados são sincronizados com segurança.',
    faq_q3: 'Quem pode acessar os dados coletados?',
    faq_a3:
      'Apenas profissionais autorizados pela instituição, seguindo perfis de acesso e políticas de privacidade. Todas as ações ficam registradas em logs.',
    faq_cta: 'Ver mais',

    // ── Footer
    footer_col_funciona: 'Como funciona',     // (pode reutilizar como_funciona, se preferir)
    footer_col_ajuda: 'Ajuda e Suporte',      // (idem ajuda_e_suporte)
    footer_col_docs: 'Documentação',          // (idem documentacao)
    footer_col_curso: 'Curso de Extensão',    // (idem curso_extensao)
    footer_col_sobre: 'Sobre',                // (idem sobre)
    footer_link_passo: 'Passo a Passo',
    footer_link_material: 'Material Educativo',
    footer_link_funcionalidades: 'Funcionalidades',
    footer_link_obter_acesso: 'Obter Acesso',
    footer_link_remover_dados: 'Remover Dados',
    footer_link_faq: 'Perguntas Frequentes',
    footer_link_sobre_projeto: 'Sobre o Projeto',
    footer_link_quem_somos: 'Quem Somos',
    footer_link_apoiadores: 'Apoiadores',
    footer_link_sobre_curso: 'Sobre o Curso',
    footer_link_como_funciona_curso: 'Como Funciona',
    footer_link_inscricao: 'Inscrição',
    footer_contact: 'Contato',
    footer_social: 'Redes sociais',
    footer_github: 'GitHub',
    footer_instagram: 'Instagram',
    footer_copyright: 'DermAlert © 2025. Todos os direitos reservados.',
  },

  // ───────────────────────────────────────────────────────────
  // English
  // ───────────────────────────────────────────────────────────
  en: {
    // Header / Nav
    como_funciona: 'How it works',
    ajuda_e_suporte: 'Help & Support',
    curso_extensao: 'Extension Course',
    sobre: 'About',
    documentacao: 'Documentation',
    politica_privacidade: 'Privacy Policy',
    solicitar_acesso: 'Request access',
    remover_dados: 'Delete data',
    faq: 'FAQ',
    rapido_acesso: 'Quick access',
    status: 'Status',
    lancamentos: 'Releases',
    tema_escuro: 'Dark theme',
    novo: 'New',

    // Hero
    hero_title: 'Smart, simple and secure dermatology triage.',
    hero_sub:
      'Register patients, conduct anamnesis, and organize data for clinical decisions and research.',
    hero_cta_acesso: 'Request Access',
    hero_cta_sobre: 'About the Project',

    // Highlights
    features_speed: 'Speed',
    features_security: 'Data security',
    features_standardization: 'Standardization',

    // Partners
    partners_initiative: 'Initiative:',
    partners_support: 'Support:',

    // Features (cards + image)
    features_title: 'Explore the features',
    features_sub: 'With DermAlert, the triage process is simple and fast.',
    features_step1_title: 'Register the Patient',
    features_step1_desc:
      'Save time by recording basic data in a simple and secure way.',
    features_step1_cta: 'Start Now',
    features_step2_title: 'Register Lesion',
    features_step2_desc:
      'Select the lesion location and capture clear clinical images.',
    features_step2_cta: 'Continue',
    features_step3_title: 'Triage & Research',
    features_step3_desc: 'Organized data to support decisions and science.',
    features_step3_cta: 'See results',

    // About / DermAlert
    about_title: 'About DermAlert',
    about_sub: 'The First Step in Skin Cancer Prevention',
    about_highlight:
      'DermAlert is a project focused on triaging patients with suspected skin cancer, streamlining early identification and proper referral.',
    about_note:
      'Developed by Lab Livre in partnership with UnB and FAP-DF, the project aims to enhance primary care through technology, making diagnosis more accessible and efficient.',

    // Who it’s for
    who_title: "Who it's for",
    who_sub:
      'Built for clinical teams seeking speed, standardization and data security.',
    who_card1_title: 'Residency Programs',
    who_card1_desc:
      'Standardize cases, teach best documentation practices, and improve traceability in training.',
    who_card2_title: 'Hospitals',
    who_card2_desc:
      'Guided triage in minutes, with accessible history and streamlined referral.',
    who_card3_title: 'Primary Care ',
    who_card3_title_suffix: 'Units – UBS',
    who_card3_desc:
      'Integrate clinics and wards with a single triage flow — from registration to clinical imaging.',
    who_cta: 'Learn more',

    // FAQ
    faq_title: 'Frequently Asked Questions',
    faq_sub:
      'We gathered the most common questions so you can see how DermAlert works in practice.',
    faq_q1: 'How does the software help with dermatology triage?',
    faq_a1:
      'The software lets you collect patient data, run guided anamnesis and capture lesion photos, helping prioritize cases and streamline care.',
    faq_q2: 'Do I need an internet connection to use the app?',
    faq_a2:
      'You can record information and images offline. As soon as the connection is restored, the data are synced securely.',
    faq_q3: 'Who can access the collected data?',
    faq_a3:
      'Only professionals authorized by the institution, following access profiles and privacy policies. All actions are logged.',
    faq_cta: 'See more',

    // Footer
    footer_col_funciona: 'How it works',
    footer_col_ajuda: 'Help & Support',
    footer_col_docs: 'Documentation',
    footer_col_curso: 'Extension Course',
    footer_col_sobre: 'About',
    footer_link_passo: 'Step by Step',
    footer_link_material: 'Educational Material',
    footer_link_funcionalidades: 'Features',
    footer_link_obter_acesso: 'Get Access',
    footer_link_remover_dados: 'Delete Data',
    footer_link_faq: 'FAQ',
    footer_link_sobre_projeto: 'About the Project',
    footer_link_quem_somos: 'About Us',
    footer_link_apoiadores: 'Supporters',
    footer_link_sobre_curso: 'About the Course',
    footer_link_como_funciona_curso: 'How it Works',
    footer_link_inscricao: 'Enrollment',
    footer_contact: 'Contact',
    footer_social: 'Social networks',
    footer_github: 'GitHub',
    footer_instagram: 'Instagram',
    footer_copyright: 'DermAlert © 2025. All rights reserved.',
  },

  // ───────────────────────────────────────────────────────────
  // Español
  // ───────────────────────────────────────────────────────────
  es: {
    // Header / Nav
    como_funciona: 'Cómo funciona',
    ajuda_e_suporte: 'Ayuda y Soporte',
    curso_extensao: 'Curso de Extensión',
    sobre: 'Acerca de',
    documentacao: 'Documentación',
    politica_privacidade: 'Política de Privacidad',
    solicitar_acesso: 'Solicitar acceso',
    remover_dados: 'Eliminar datos',
    faq: 'Preguntas frecuentes',
    rapido_acesso: 'Acceso rápido',
    status: 'Estado',
    lancamentos: 'Lanzamientos',
    tema_escuro: 'Tema oscuro',
    novo: 'Nuevo',

    // Hero
    hero_title: 'Triaje dermatológico inteligente, simple y seguro.',
    hero_sub:
      'Registre pacientes, realice la anamnesis y organice datos para decisiones clínicas e investigación.',
    hero_cta_acesso: 'Solicitar Acceso',
    hero_cta_sobre: 'Sobre el Proyecto',

    // Highlights
    features_speed: 'Velocidad',
    features_security: 'Seguridad de datos',
    features_standardization: 'Estandarización',

    // Partners
    partners_initiative: 'Iniciativa:',
    partners_support: 'Apoyo:',

    // Funcionalidades (cards + imagen)
    features_title: 'Conozca las funcionalidades',
    features_sub: 'Con DermAlert, el proceso de triaje es simple y rápido.',
    features_step1_title: 'Registrar al Paciente',
    features_step1_desc:
      'Ahorre tiempo registrando datos básicos de forma simple y segura.',
    features_step1_cta: 'Empezar ahora',
    features_step2_title: 'Registrar lesión',
    features_step2_desc:
      'Indique la ubicación de la lesión y capture imágenes clínicas claras.',
    features_step2_cta: 'Continuar',
    features_step3_title: 'Triaje e investigación',
    features_step3_desc:
      'Datos organizados que respaldan la decisión y la ciencia.',
    features_step3_cta: 'Ver resultados',

    // Acerca de / DermAlert
    about_title: 'Acerca de DermAlert',
    about_sub: 'El primer paso en la prevención del cáncer de piel',
    about_highlight:
      'DermAlert es un proyecto orientado al triaje de pacientes con sospecha de cáncer de piel, facilitando la identificación temprana y la derivación adecuada.',
    about_note:
      'Desarrollado por Lab Livre en colaboración con la UnB y la FAP-DF, el proyecto busca mejorar la atención primaria mediante tecnología, haciendo el diagnóstico más accesible y eficiente.',

    // Para quién es
    who_title: 'Para quién es',
    who_sub:
      'Hecho para equipos clínicos que buscan velocidad, estandarización y seguridad de datos.',
    who_card1_title: 'Residencias Médicas',
    who_card1_desc:
      'Estandarice casos, enseñe buenas prácticas de documentación y amplíe la trazabilidad en la formación.',
    who_card2_title: 'Hospitales',
    who_card2_desc:
      'Triaje guiado en minutos, con historial accesible y derivación facilitada.',
    who_card3_title: 'Unidades Básicas de ',
    who_card3_title_suffix: 'Salud - UBS',
    who_card3_desc:
      'Integre ambulatorios y salas con un flujo único de triaje — del registro a la imagen clínica.',
    who_cta: 'Saber más',

    // FAQ
    faq_title: 'Preguntas Frecuentes',
    faq_sub:
      'Reunimos las dudas más comunes para que vea cómo DermAlert funciona en la práctica.',
    faq_q1: '¿Cómo ayuda el software en el triaje dermatológico?',
    faq_a1:
      'El software permite recolectar datos del paciente, realizar anamnesis guiada y registrar fotos de las lesiones, facilitando la priorización de casos y agilizando la atención.',
    faq_q2: '¿Necesito conexión a Internet para usar la app?',
    faq_a2:
      'Puede registrar información e imágenes sin conexión. Cuando se restablezca la conexión, los datos se sincronizan de forma segura.',
    faq_q3: '¿Quién puede acceder a los datos recolectados?',
    faq_a3:
      'Solo profesionales autorizados por la institución, siguiendo perfiles de acceso y políticas de privacidad. Todas las acciones quedan registradas.',
    faq_cta: 'Ver más',

    // Footer
    footer_col_funciona: 'Cómo funciona',
    footer_col_ajuda: 'Ayuda y Soporte',
    footer_col_docs: 'Documentación',
    footer_col_curso: 'Curso de Extensión',
    footer_col_sobre: 'Acerca de',
    footer_link_passo: 'Paso a paso',
    footer_link_material: 'Material educativo',
    footer_link_funcionalidades: 'Funcionalidades',
    footer_link_obter_acesso: 'Obtener acceso',
    footer_link_remover_dados: 'Eliminar datos',
    footer_link_faq: 'Preguntas frecuentes',
    footer_link_sobre_proyecto: 'Sobre el Proyecto', // alias opcional
    footer_link_sobre_projeto: 'Sobre el Proyecto',
    footer_link_quem_somos: 'Quiénes somos',
    footer_link_apoiadores: 'Patrocinadores',
    footer_link_sobre_curso: 'Sobre el Curso',
    footer_link_como_funciona_curso: 'Cómo funciona',
    footer_link_inscricao: 'Inscripción',
    footer_contact: 'Contacto',
    footer_social: 'Redes sociales',
    footer_github: 'GitHub',
    footer_instagram: 'Instagram',
    footer_copyright: 'DermAlert © 2025. Todos los derechos reservados.',
  }
};

const PAGE_I18N = {
  'pt-BR': {
    page_title_default: 'Dermalert',

    how_title: 'Dermalert - Como funciona',
    how_hero_title: 'Etapas simples,<br class="hidden md:block" /> seguras e guiadas',
    how_hero_desc:
      'O DermAlert é uma plataforma digital de triagem dermatológica que orienta o agente de saúde por etapas simples, seguras e guiadas, do cadastro até o encaminhamento médico, facilitando o diagnóstico precoce de lesões suspeitas.',
    saiba_mais: 'Saber Mais',
    how_section_title: 'Como funciona',
    how_course_title: 'Curso de Extensão DermAlert',
    how_course_desc:
      'Inscreva-se no curso de extensão do DermAlert e entenda como a tecnologia pode transformar o atendimento dermatológico.',
    acessar_documentacao: 'Acessar documentação',
    how_cta_title: 'Quer conhecer o <span class="whitespace-nowrap">DermAlert na prática?</span>',
    tornar_parceiro: 'Se torne parceiro',
    entrar_contato: 'Entrar em contato',
    step1_title: 'Login e Identificação',
    step1_desc: 'O usuário acessa a plataforma e realiza login, sendo identificado como um novo ou antigo paciente.',
    step2_title: 'Cadastros e Consentimento',
    step2_desc: 'O agente de saúde realiza os cadastros necessários e colhe os devidos consentimentos.',
    step3_title: 'Anamnese Guiada',
    step3_desc: 'Etapa de anamnese guiada para levantamento dos dados clínicos relevantes.',
    step4_title: 'Triagem e Classificação',
    step4_desc: 'A plataforma realiza a triagem automática e classifica os casos de risco.',
    step5_title: 'Encaminhamento',
    step5_desc: 'Os casos classificados como prioritários são encaminhados ao médico responsável.',

    about_page_title_full: 'Dermalert - Sobre o Projeto',
    about_page_heading: 'Sobre o Projeto',
    about_page_sub: 'Desenvolvido por uma equipe comprometida com inovação em saúde',
    menu: 'Menu',
    about_project_group: 'Sobre o Projeto',
    about_team_group: 'Sobre a Equipe',
    tab_goal: 'Objetivo Geral',
    tab_problem: 'O Problema',
    tab_audience: 'Público-alvo',
    tab_method: 'Metodologia',
    tab_funding: 'Financiamento',
    tab_coordination: 'Coordenação',
    tab_datafabric: 'Data Fabric',
    tab_design: 'Design',
    tab_product: 'Produto',
    tab_app: 'Aplicativo',
    tab_contributors: 'Colaboradores',
    about_goal_title: 'Tecnologia e Cuidado: A Nova Aliança<br>Contra o Câncer de Pele',
    about_goal_p1:
      'Este projeto dedica-se ao combate ao câncer de pele, o tipo com maior incidência no Brasil, atuando em duas frentes cruciais: a prevenção e a detecção precoce. A iniciativa se destaca por sua abordagem inovadora, que combina o uso de tecnologia e ciência de dados com ações educativas direcionadas à população.',
    about_goal_p2:
      'Através dessa integração, o projeto visa identificar lesões suspeitas de maneira ágil e eficiente, facilitando o diagnóstico rápido. Simultaneamente, busca capacitar o público com informações claras e acessíveis sobre as melhores formas de prevenção, os passos para o diagnóstico e as opções de tratamento disponíveis, promovendo a saúde e reduzindo o impacto da doença na sociedade.',
    about_goal_subtitle: 'Educação em Saúde e Triagem Precoce de Câncer:<br>Data Fabric e Machine Learning em Saúde',
    about_goal_card1: '<strong>Educação em saúde</strong> para a população e profissionais',
    about_goal_card2: '<strong>Machine Learning e Data Fabric</strong> para apoiar o diagnóstico precoce',
    about_goal_card3: '<strong>Fluxos integrados com a Atenção Primária (UBS)</strong> e a rede de referência oncológica.',
    about_problem_title: 'Desafios na Triagem Precoce do Câncer de Pele no Brasil',
    about_problem_p1:
      '<strong>O câncer de pele é o tumor maligno mais frequente no Brasil, correspondendo a cerca de 30% de todos os casos registrados.</strong> Embora apresente altos percentuais de cura quando diagnosticado e tratado precocemente, <strong>a detecção tardia ainda é uma realidade para grande parte da população</strong>, comprometendo os resultados clínicos e aumentando o ônus sobre o sistema de saúde.',
    about_problem_p2:
      'Nos programas de saúde pública, há uma lacuna significativa na educação voltada à detecção precoce e na eficiência dos fluxos de triagem. <strong>O Projeto de Dermalert propõe uma solução integrada, que combina:</strong>',
    about_problem_li1: 'Aplicação de questionário de rastreio clínico',
    about_problem_li2: 'Captura e registro de imagens suspeitas de lesões cutâneas',
    about_problem_li3: 'Integração da série histórica de atendimentos (CIDs correlacionados) em uma plataforma analítica',
    about_problem_li4: 'Encaminhamento de casos de risco para unidades de Atenção Primária à Saúde',
    about_problem_p3:
      'O diagnóstico precoce, via exames clínicos, laboratoriais, endoscópicos ou radiológicos, é a estratégia mais eficaz para detectar câncer de pele em estágios iniciais (INCA, 2022; WHO, 2017). Para isso, é fundamental capacitar população e profissionais de saúde no reconhecimento de sinais suspeitos e garantir acesso rápido aos serviços de Atenção Primária.',
    about_problem_p4:
      'Embora não haja comprovação de que um método específico de autoexame reduza mortalidade, muitos casos são descobertos pelos próprios pacientes ou familiares, o que reforça a necessidade de ações educativas voltadas ao autoconhecimento da pele (Australian Cancer Network, 2008). Diante da alta incidência e dos custos associados ao câncer de pele no Brasil, ampliar programas de prevenção, triagem inteligente e integração de dados no SUS é essencial para reduzir diagnósticos tardios e melhorar as taxas de cura.',
    about_audience_title: 'Beneficiários da Triagem e Diagnóstico',
    about_audience_card1_title: 'Profissionais de Atenção Primária',
    about_audience_card1_desc:
      'Médicos, enfermeiros e agentes comunitários de saúde das UBS/ESF envolvidos na triagem e no encaminhamento de pacientes com lesões suspeitas. Capacitados para utilizar o sistema de triagem, aplicar questionários clínicos e registrar imagens para diagnóstico precoce.',
    about_audience_card2_title: 'Pacientes com Lesões de Pele',
    about_audience_card2_desc:
      'Indivíduos a partir de 18 anos que procuram atendimento em UBS ou mutirões de saúde para avaliação de lesões cutâneas. Beneficiam-se de rastreio clínico, registro de imagens e encaminhamento rápido, aumentando as chances de detecção e cura precoce.',
    about_method_title: 'Metodologia',
    about_funding_title: 'Quem apoia essa iniciativa',
    about_executor_title: 'Executora do Projeto',
    about_executor_desc:
      'A Universidade de Brasília, por meio de seu laboratório Lab Livre, gerencia e operacionaliza todas as atividades de campo, análise de dados e integração tecnológica.',
    about_funder_title: 'Fonte de recurso',
    about_funder_desc:
      'O projeto é financiado pelo Edital FAP-DF, que apoia iniciativas de inovação em saúde pública no Distrito Federal.',
    about_team_placeholder:
      'Equipe multidisciplinar responsável pela pesquisa, desenvolvimento, produto e implantação do DermAlert.',
    app_pending: 'A definir...',

    privacy_title: 'Política de Privacidade - Dermalert',
    privacy_kicker: 'Privacidade e dados',
    privacy_updated: 'Última atualização: 06 de maio de 2026',
    privacy_intro1:
      'O Dermalert é uma ferramenta de triagem dermatológica voltada para o registro de pacientes, condução de anamnese e organização de dados para decisões clínicas e pesquisa científica.',
    privacy_intro2:
      'Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) do Brasil e as Políticas do Programa para Desenvolvedores do Google Play.',
    privacy_collection_title: '1. Coleta e Uso de Dados',
    privacy_collection_intro:
      'Para o funcionamento adequado do aplicativo, solicitamos acesso a certas informações e recursos do seu dispositivo:',
    privacy_camera:
      '<strong>Uso da Câmera (android.permission.CAMERA):</strong> O aplicativo solicita acesso à câmera do dispositivo exclusivamente para a captura de imagens de lesões de pele durante a etapa de triagem e registro do paciente. Essas imagens são fundamentais para o propósito principal do aplicativo: auxiliar na análise e decisão clínica dermatológica. A câmera não será ativada em segundo plano ou para fins não relacionados à avaliação clínica.',
    privacy_clinical:
      '<strong>Dados Pessoais e Clínicos (Anamnese):</strong> Coletamos dados inseridos pelo usuário no registro de pacientes, que podem incluir informações de saúde e histórico clínico. Por se tratarem de dados sensíveis, garantimos que sua coleta se dá de forma transparente e consentida.',
    privacy_storage_title: '2. Armazenamento e Segurança dos Dados',
    privacy_storage:
      'A segurança dos dados é um pilar do projeto Dermalert. As informações clínicas e imagens coletadas são tratadas com criptografia e armazenadas em servidores seguros da UnB. Implementamos medidas técnicas e administrativas rigorosas para evitar acessos não autorizados, vazamentos ou perdas.',
    privacy_research_title: '3. Compartilhamento e Uso para Pesquisa',
    privacy_research1:
      'Como parte de uma iniciativa de pesquisa, os dados coletados poderão ser utilizados para fins acadêmicos e científicos, como o treinamento de modelos de inteligência artificial ou estudos epidemiológicos. Nesses cenários, garantimos a anonimização dos dados, desvinculando as imagens e informações do prontuário da identidade real do paciente, conforme previsto pela LGPD.',
    privacy_research2:
      'Nós não vendemos ou compartilhamos dados pessoais com terceiros para fins comerciais ou publicitários.',
    privacy_rights_title: '4. Direitos do Usuário (Titular dos Dados)',
    privacy_rights_intro: 'Em conformidade com a LGPD, o usuário tem o direito de:',
    privacy_right1: 'Confirmar a existência de tratamento de seus dados;',
    privacy_right2: 'Acessar os dados armazenados;',
    privacy_right3: 'Corrigir dados incompletos, inexatos ou desatualizados;',
    privacy_right4: 'Solicitar a exclusão, bloqueio ou anonimização de dados desnecessários ou tratados em desconformidade com a lei;',
    privacy_right5: 'Revogar o consentimento a qualquer momento.',
    privacy_delete_title: 'Solicitação de exclusão da conta e dos dados',
    privacy_delete_text:
      'Para solicitar a exclusão da conta e dos dados associados ao Dermalert, envie uma mensagem para',
    privacy_delete_cta: 'Solicitar exclusão da conta e dos dados',
    privacy_changes_title: '5. Alterações nesta Política',
    privacy_changes:
      'Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações publicando a nova versão nesta página. Recomenda-se revisar esta página regularmente para se manter informado.',
    privacy_contact_title: '6. Contato',
    privacy_contact:
      'Se você tiver dúvidas, sugestões ou desejar exercer seus direitos em relação aos seus dados, entre em contato conosco através do e-mail:',
    quick_access: 'Acesso rápido',
    privacy_nav_collection: 'Coleta e uso',
    privacy_nav_security: 'Segurança dos dados',
    privacy_nav_research: 'Pesquisa',
    privacy_nav_rights: 'Direitos do usuário',
    privacy_nav_delete: 'Excluir conta e dados',

    support_title: 'Dermalert - Ajuda e Suporte',
    support_kicker: 'Central de atendimento',
    support_heading: 'Ajuda e Suporte DermAlert',
    support_sub:
      'Encontre orientações para acesso, privacidade, documentação técnica e uso do DermAlert em fluxos de triagem dermatológica.',
    support_primary_cta: 'Falar com a equipe',
    support_secondary_cta: 'Ver documentação',
    support_access_title: 'Solicitar acesso',
    support_access_desc:
      'Para solicitar acesso ao DermAlert ou tirar dúvidas operacionais, envie uma mensagem para a equipe responsável.',
    support_delete_title: 'Excluir conta e dados',
    support_delete_desc:
      'A solicitação de exclusão de conta e dados é feita pela Política de Privacidade.',
    support_docs_title: 'Documentação técnica',
    support_docs_desc:
      'Acesse a documentação do projeto, guias técnicos e materiais de apoio.',
    support_tile_access_label: 'Acesso',
    support_tile_access_title: 'Solicitar acesso',
    support_tile_access_desc:
      'Solicite orientações para entrar no app, ativar conta ou iniciar uso em uma unidade de saúde.',
    support_tile_privacy_label: 'Dados',
    support_tile_privacy_title: 'Privacidade e exclusão',
    support_tile_privacy_desc:
      'Consulte a política de privacidade e solicite exclusão de conta ou dados quando necessário.',
    support_tile_docs_label: 'Documentação',
    support_tile_docs_title: 'Guias técnicos',
    support_tile_docs_desc:
      'Acesse materiais de frontend, backend, histórico do projeto e apoio a implantação.',
    support_tile_flow_label: 'Uso',
    support_tile_flow_title: 'Fluxo de triagem',
    support_tile_flow_desc:
      'Revise o passo a passo de cadastro, anamnese, registro de lesões e encaminhamento.',
    support_docs_kicker: 'Resolva por tema',
    support_docs_heading: 'Canais e documentos disponíveis',
    support_card_access_title: 'Acesso ao DermAlert',
    support_card_access_desc:
      'Use este canal para solicitar acesso, tirar dúvidas operacionais ou pedir orientação de onboarding.',
    support_card_email_cta: 'Enviar e-mail',
    support_card_delete_title: 'Exclusão de conta e dados',
    support_card_delete_desc:
      'A solicitação formal de exclusão fica na Política de Privacidade, com contato direto da equipe responsável.',
    support_card_flow_title: 'Como funciona',
    support_card_flow_desc:
      'Entenda as etapas da plataforma, do login ao encaminhamento de casos prioritários.',
    support_card_front_title: 'Frontend mobile',
    support_card_front_desc:
      'Documentação sobre React Native, Expo, navegação, câmera, armazenamento local e telas do aplicativo.',
    support_card_back_title: 'Backend e API',
    support_card_back_desc:
      'Documentação sobre FastAPI, banco de dados, autenticação, rotas, Docker e migrações.',
    support_card_project_title: 'Gestão do projeto',
    support_card_project_desc:
      'Consulte equipe, atas, checklist, backlog e registros de evolução do projeto.',
    support_card_project_cta: 'Ver documentos',
    support_contact_kicker: 'Contato institucional',
    support_contact_title: 'Precisa de suporte direto?',
    support_contact_desc:
      'Para dúvidas, sugestões ou solicitações relacionadas ao DermAlert, entre em contato com a equipe responsável.',

    course_title: 'Dermalert - Curso de Extensão',
    course_heading: 'Curso de Extensão DermAlert',
    course_sub:
      'Formação para equipes que precisam entender o fluxo do DermAlert, da triagem dermatológica ao registro seguro de dados clínicos.',
    course_primary_cta: 'Acessar material do curso',
    course_secondary_cta: 'Ver fluxo da plataforma',
    course_modules_kicker: 'Trilha de aprendizagem',
    course_modules_title: 'Conteúdos essenciais para uso responsável do DermAlert',
    course_modules_desc:
      'A trilha organiza os temas que aparecem no aplicativo e na documentação técnica disponível no projeto.',
    course_module1_title: 'Contexto clínico e prevenção',
    course_module1_desc:
      'Introdução ao problema do câncer de pele, importância da detecção precoce e papel da Atenção Primária.',
    course_module2_title: 'Cadastro e consentimento',
    course_module2_desc:
      'Boas práticas para registrar pacientes, identificar atendimentos e coletar consentimentos de forma adequada.',
    course_module3_title: 'Anamnese guiada',
    course_module3_desc:
      'Uso do questionário clínico para levantar histórico, fatores de risco e sinais relevantes durante a triagem.',
    course_module4_title: 'Registro fotográfico',
    course_module4_desc:
      'Orientações para capturar imagens de lesões de pele no fluxo clínico, respeitando finalidade e privacidade.',
    course_module5_title: 'Triagem e encaminhamento',
    course_module5_desc:
      'Compreensão das etapas de classificação, priorização de casos e encaminhamento para avaliação responsável.',
    course_module6_title: 'Segurança e LGPD',
    course_module6_desc:
      'Cuidados com dados sensíveis, uso de imagens, pesquisa científica, anonimização e solicitações de exclusão.',
    course_audience_kicker: 'Público indicado',
    course_audience_title: 'Para quem essa formação foi pensada',
    course_audience_desc:
      'O curso apoia pessoas envolvidas no atendimento, implantação, pesquisa e documentação do DermAlert.',
    course_audience1_title: 'Profissionais de saúde',
    course_audience1_desc:
      'Equipes que atuam em triagem, atendimento inicial e registro clínico de pacientes.',
    course_audience2_title: 'Unidades de saúde',
    course_audience2_desc:
      'Times que precisam padronizar fluxos de registro, consentimento, imagem e encaminhamento.',
    course_audience3_title: 'Pesquisadores',
    course_audience3_desc:
      'Pessoas envolvidas em estudos, organização de dados, modelos de IA e análises epidemiológicas.',
    course_audience4_title: 'Equipes técnicas',
    course_audience4_desc:
      'Desenvolvedores e gestores que precisam entender arquitetura, frontend, backend e implantação.',
    course_materials_kicker: 'Materiais de apoio',
    course_materials_title: 'Continue pelos documentos do projeto',
    course_material_flow_title: 'Fluxo da plataforma',
    course_material_flow_desc: 'Veja as etapas principais do uso do DermAlert.',
    course_material_privacy_title: 'Privacidade e dados',
    course_material_privacy_desc:
      'Entenda uso de câmera, dados sensíveis, pesquisa e exclusão.',
    course_material_front_desc: 'Consulte telas, tecnologias e fluxo do aplicativo.',
    course_material_back_desc: 'Consulte autenticação, rotas, banco e implantação.',
    course_status_kicker: 'Status do material',
    course_status_title: 'Conteúdo em evolução',
    course_status_desc:
      'A documentação do curso ainda está sendo consolidada no repositório. Esta página organiza a trilha pública disponível e direciona para os documentos oficiais do projeto.',
  },

  en: {
    page_title_default: 'Dermalert',

    how_title: 'Dermalert - How it works',
    how_hero_title: 'Simple,<br class="hidden md:block" /> safe and guided steps',
    how_hero_desc:
      'DermAlert is a digital dermatology triage platform that guides health workers through simple, safe and guided steps, from registration to medical referral, helping detect suspicious lesions earlier.',
    saiba_mais: 'Learn more',
    how_section_title: 'How it works',
    how_course_title: 'DermAlert Extension Course',
    how_course_desc:
      'Enroll in the DermAlert extension course and understand how technology can transform dermatology care.',
    acessar_documentacao: 'Open documentation',
    how_cta_title: 'Want to see <span class="whitespace-nowrap">DermAlert in practice?</span>',
    tornar_parceiro: 'Become a partner',
    entrar_contato: 'Contact us',
    step1_title: 'Login and Identification',
    step1_desc: 'The user accesses the platform and logs in, being identified as a new or returning patient.',
    step2_title: 'Registration and Consent',
    step2_desc: 'The health worker completes the required registration and records the necessary consent.',
    step3_title: 'Guided Anamnesis',
    step3_desc: 'A guided anamnesis step collects the relevant clinical data.',
    step4_title: 'Triage and Classification',
    step4_desc: 'The platform performs automated triage and classifies risk cases.',
    step5_title: 'Referral',
    step5_desc: 'Cases classified as priority are referred to the responsible physician.',

    about_page_title_full: 'Dermalert - About the Project',
    about_page_heading: 'About the Project',
    about_page_sub: 'Developed by a team committed to health innovation',
    menu: 'Menu',
    about_project_group: 'About the Project',
    about_team_group: 'About the Team',
    tab_goal: 'General Goal',
    tab_problem: 'The Problem',
    tab_audience: 'Target Audience',
    tab_method: 'Methodology',
    tab_funding: 'Funding',
    tab_coordination: 'Coordination',
    tab_datafabric: 'Data Fabric',
    tab_design: 'Design',
    tab_product: 'Product',
    tab_app: 'Application',
    tab_contributors: 'Contributors',
    about_goal_title: 'Technology and Care: A New Alliance<br>Against Skin Cancer',
    about_goal_p1:
      'This project is dedicated to fighting skin cancer, the most common cancer in Brazil, through two crucial fronts: prevention and early detection. The initiative stands out for its innovative approach, combining technology and data science with educational actions for the population.',
    about_goal_p2:
      'Through this integration, the project aims to identify suspicious lesions quickly and efficiently, supporting faster diagnosis. At the same time, it seeks to equip the public with clear, accessible information about prevention, diagnosis steps and available treatment options, promoting health and reducing the impact of the disease.',
    about_goal_subtitle: 'Health Education and Early Cancer Triage:<br>Data Fabric and Machine Learning in Health',
    about_goal_card1: '<strong>Health education</strong> for the public and professionals',
    about_goal_card2: '<strong>Machine Learning and Data Fabric</strong> to support early diagnosis',
    about_goal_card3: '<strong>Integrated flows with Primary Care units (UBS)</strong> and the oncology referral network.',
    about_problem_title: 'Challenges in Early Skin Cancer Triage in Brazil',
    about_problem_p1:
      '<strong>Skin cancer is the most frequent malignant tumor in Brazil, accounting for about 30% of all registered cases.</strong> Although cure rates are high when diagnosed and treated early, <strong>late detection is still a reality for much of the population</strong>, compromising clinical outcomes and increasing the burden on the health system.',
    about_problem_p2:
      'Public health programs still face a significant gap in education for early detection and in the efficiency of triage flows. <strong>The Dermalert project proposes an integrated solution that combines:</strong>',
    about_problem_li1: 'Application of a clinical screening questionnaire',
    about_problem_li2: 'Capture and registration of images of suspicious skin lesions',
    about_problem_li3: 'Integration of historical care records (related ICD codes) into an analytics platform',
    about_problem_li4: 'Referral of risk cases to Primary Care units',
    about_problem_p3:
      'Early diagnosis through clinical, laboratory, endoscopic or radiological exams is the most effective strategy for detecting skin cancer in early stages (INCA, 2022; WHO, 2017). To make this possible, it is essential to train the population and health professionals to recognize suspicious signs and ensure quick access to Primary Care services.',
    about_problem_p4:
      'Although there is no proof that a specific self-examination method reduces mortality, many cases are discovered by patients or family members, reinforcing the need for educational actions focused on skin self-awareness (Australian Cancer Network, 2008). Given the high incidence and costs associated with skin cancer in Brazil, expanding prevention programs, intelligent triage and data integration in SUS is essential to reduce late diagnoses and improve cure rates.',
    about_audience_title: 'Beneficiaries of Triage and Diagnosis',
    about_audience_card1_title: 'Primary Care Professionals',
    about_audience_card1_desc:
      'Doctors, nurses and community health agents from UBS/ESF teams involved in triage and referral of patients with suspicious lesions. They are trained to use the triage system, apply clinical questionnaires and register images for early diagnosis.',
    about_audience_card2_title: 'Patients with Skin Lesions',
    about_audience_card2_desc:
      'People aged 18 or older who seek care at UBS units or health campaigns for evaluation of skin lesions. They benefit from clinical screening, image registration and rapid referral, increasing the chances of early detection and cure.',
    about_method_title: 'Methodology',
    about_funding_title: 'Who supports this initiative',
    about_executor_title: 'Project executor',
    about_executor_desc:
      'The University of Brasília, through Lab Livre, manages and operates all field activities, data analysis and technological integration.',
    about_funder_title: 'Funding source',
    about_funder_desc:
      'The project is funded by the FAP-DF call for proposals, which supports public health innovation initiatives in the Federal District.',
    about_team_placeholder:
      'A multidisciplinary team responsible for DermAlert research, development, product and implementation.',
    app_pending: 'To be defined...',

    privacy_title: 'Privacy Policy - Dermalert',
    privacy_kicker: 'Privacy and data',
    privacy_updated: 'Last updated: May 6, 2026',
    privacy_intro1:
      'Dermalert is a dermatology triage tool focused on patient registration, anamnesis and data organization for clinical decisions and scientific research.',
    privacy_intro2:
      'This Privacy Policy describes how we collect, use, store and protect your information, in full compliance with Brazil’s General Data Protection Law (LGPD - Law No. 13,709/2018) and the Google Play Developer Program Policies.',
    privacy_collection_title: '1. Data Collection and Use',
    privacy_collection_intro:
      'For the application to work properly, we request access to certain information and device resources:',
    privacy_camera:
      '<strong>Camera Use (android.permission.CAMERA):</strong> The application requests access to the device camera exclusively to capture images of skin lesions during patient triage and registration. These images are essential to the main purpose of the application: assisting dermatological clinical analysis and decisions. The camera will not be activated in the background or for purposes unrelated to clinical evaluation.',
    privacy_clinical:
      '<strong>Personal and Clinical Data (Anamnesis):</strong> We collect data entered by the user during patient registration, which may include health information and clinical history. Because these are sensitive data, we ensure that collection is transparent and consent-based.',
    privacy_storage_title: '2. Data Storage and Security',
    privacy_storage:
      'Data security is a pillar of the Dermalert project. Clinical information and collected images are handled with encryption and stored on secure UnB servers. We implement strict technical and administrative measures to prevent unauthorized access, leaks or losses.',
    privacy_research_title: '3. Sharing and Research Use',
    privacy_research1:
      'As part of a research initiative, collected data may be used for academic and scientific purposes, such as training artificial intelligence models or epidemiological studies. In these scenarios, we ensure data anonymization, unlinking images and medical record information from the patient’s real identity, as provided by LGPD.',
    privacy_research2:
      'We do not sell or share personal data with third parties for commercial or advertising purposes.',
    privacy_rights_title: '4. User Rights (Data Subject)',
    privacy_rights_intro: 'In compliance with LGPD, users have the right to:',
    privacy_right1: 'Confirm whether their data is being processed;',
    privacy_right2: 'Access stored data;',
    privacy_right3: 'Correct incomplete, inaccurate or outdated data;',
    privacy_right4: 'Request deletion, blocking or anonymization of unnecessary data or data processed unlawfully;',
    privacy_right5: 'Revoke consent at any time.',
    privacy_delete_title: 'Account and data deletion request',
    privacy_delete_text:
      'To request deletion of your account and data associated with Dermalert, send a message to',
    privacy_delete_cta: 'Request account and data deletion',
    privacy_changes_title: '5. Changes to this Policy',
    privacy_changes:
      'We may update our Privacy Policy periodically. We will notify users of any changes by publishing the new version on this page. We recommend reviewing this page regularly to stay informed.',
    privacy_contact_title: '6. Contact',
    privacy_contact:
      'If you have questions, suggestions or wish to exercise your rights regarding your data, contact us by email:',
    quick_access: 'Quick access',
    privacy_nav_collection: 'Collection and use',
    privacy_nav_security: 'Data security',
    privacy_nav_research: 'Research',
    privacy_nav_rights: 'User rights',
    privacy_nav_delete: 'Delete account and data',

    support_title: 'Dermalert - Help & Support',
    support_kicker: 'Support center',
    support_heading: 'DermAlert Help & Support',
    support_sub:
      'Find guidance for access, privacy, technical documentation and DermAlert use in dermatology triage workflows.',
    support_primary_cta: 'Contact the team',
    support_secondary_cta: 'View documentation',
    support_access_title: 'Request access',
    support_access_desc:
      'To request DermAlert access or ask operational questions, email the responsible team.',
    support_delete_title: 'Delete account and data',
    support_delete_desc:
      'Account and data deletion requests are handled through the Privacy Policy.',
    support_docs_title: 'Technical documentation',
    support_docs_desc:
      'Access project documentation, technical guides and support materials.',
    support_tile_access_label: 'Access',
    support_tile_access_title: 'Request access',
    support_tile_access_desc:
      'Request guidance to enter the app, activate an account or start using it in a health unit.',
    support_tile_privacy_label: 'Data',
    support_tile_privacy_title: 'Privacy and deletion',
    support_tile_privacy_desc:
      'Read the privacy policy and request account or data deletion when necessary.',
    support_tile_docs_label: 'Documentation',
    support_tile_docs_title: 'Technical guides',
    support_tile_docs_desc:
      'Access frontend, backend, project history and deployment support materials.',
    support_tile_flow_label: 'Use',
    support_tile_flow_title: 'Triage workflow',
    support_tile_flow_desc:
      'Review the step-by-step flow for registration, anamnesis, lesion records and referral.',
    support_docs_kicker: 'Solve by topic',
    support_docs_heading: 'Available channels and documents',
    support_card_access_title: 'DermAlert access',
    support_card_access_desc:
      'Use this channel to request access, ask operational questions or request onboarding guidance.',
    support_card_email_cta: 'Send email',
    support_card_delete_title: 'Account and data deletion',
    support_card_delete_desc:
      'The formal deletion request is available in the Privacy Policy, with direct contact to the responsible team.',
    support_card_flow_title: 'How it works',
    support_card_flow_desc:
      'Understand the platform stages, from login to referral of priority cases.',
    support_card_front_title: 'Mobile frontend',
    support_card_front_desc:
      'Documentation on React Native, Expo, navigation, camera, local storage and app screens.',
    support_card_back_title: 'Backend and API',
    support_card_back_desc:
      'Documentation on FastAPI, database, authentication, routes, Docker and migrations.',
    support_card_project_title: 'Project management',
    support_card_project_desc:
      'View team, meeting notes, checklist, backlog and project evolution records.',
    support_card_project_cta: 'View documents',
    support_contact_kicker: 'Institutional contact',
    support_contact_title: 'Need direct support?',
    support_contact_desc:
      'For questions, suggestions or requests related to DermAlert, contact the responsible team.',

    course_title: 'Dermalert - Extension Course',
    course_heading: 'DermAlert Extension Course',
    course_sub:
      'Training for teams that need to understand the DermAlert workflow, from dermatology triage to secure clinical data records.',
    course_primary_cta: 'Access course material',
    course_secondary_cta: 'View platform workflow',
    course_modules_kicker: 'Learning track',
    course_modules_title: 'Essential content for responsible DermAlert use',
    course_modules_desc:
      'The track organizes the topics that appear in the app and in the technical documentation available in the project.',
    course_module1_title: 'Clinical context and prevention',
    course_module1_desc:
      'Introduction to the skin cancer challenge, the importance of early detection and the role of Primary Care.',
    course_module2_title: 'Registration and consent',
    course_module2_desc:
      'Good practices for registering patients, identifying encounters and collecting consent appropriately.',
    course_module3_title: 'Guided anamnesis',
    course_module3_desc:
      'Use of the clinical questionnaire to gather history, risk factors and relevant signs during triage.',
    course_module4_title: 'Photographic record',
    course_module4_desc:
      'Guidance for capturing images of skin lesions in the clinical flow, respecting purpose and privacy.',
    course_module5_title: 'Triage and referral',
    course_module5_desc:
      'Understanding classification, case prioritization and referral stages for responsible evaluation.',
    course_module6_title: 'Security and LGPD',
    course_module6_desc:
      'Care with sensitive data, image use, scientific research, anonymization and deletion requests.',
    course_audience_kicker: 'Recommended audience',
    course_audience_title: 'Who this training is for',
    course_audience_desc:
      'The course supports people involved in DermAlert care, deployment, research and documentation.',
    course_audience1_title: 'Health professionals',
    course_audience1_desc:
      'Teams working in triage, initial care and clinical patient records.',
    course_audience2_title: 'Health units',
    course_audience2_desc:
      'Teams that need to standardize registration, consent, image and referral workflows.',
    course_audience3_title: 'Researchers',
    course_audience3_desc:
      'People involved in studies, data organization, AI models and epidemiological analyses.',
    course_audience4_title: 'Technical teams',
    course_audience4_desc:
      'Developers and managers who need to understand architecture, frontend, backend and deployment.',
    course_materials_kicker: 'Support materials',
    course_materials_title: 'Continue through the project documents',
    course_material_flow_title: 'Platform workflow',
    course_material_flow_desc: 'See the main stages of DermAlert use.',
    course_material_privacy_title: 'Privacy and data',
    course_material_privacy_desc:
      'Understand camera use, sensitive data, research and deletion.',
    course_material_front_desc: 'Review app screens, technologies and flow.',
    course_material_back_desc: 'Review authentication, routes, database and deployment.',
    course_status_kicker: 'Material status',
    course_status_title: 'Content in progress',
    course_status_desc:
      'The course documentation is still being consolidated in the repository. This page organizes the available public track and points to the official project documents.',
  },

  es: {
    page_title_default: 'Dermalert',

    how_title: 'Dermalert - Cómo funciona',
    how_hero_title: 'Etapas simples,<br class="hidden md:block" /> seguras y guiadas',
    how_hero_desc:
      'DermAlert es una plataforma digital de triaje dermatológico que guía al agente de salud por etapas simples, seguras y guiadas, desde el registro hasta la derivación médica, facilitando el diagnóstico temprano de lesiones sospechosas.',
    saiba_mais: 'Saber más',
    how_section_title: 'Cómo funciona',
    how_course_title: 'Curso de Extensión DermAlert',
    how_course_desc:
      'Inscríbase en el curso de extensión de DermAlert y entienda cómo la tecnología puede transformar la atención dermatológica.',
    acessar_documentacao: 'Abrir documentación',
    how_cta_title: '¿Quiere conocer <span class="whitespace-nowrap">DermAlert en la práctica?</span>',
    tornar_parceiro: 'Conviértase en socio',
    entrar_contato: 'Entrar en contacto',
    step1_title: 'Inicio de sesión e identificación',
    step1_desc: 'El usuario accede a la plataforma e inicia sesión, siendo identificado como paciente nuevo o recurrente.',
    step2_title: 'Registros y consentimiento',
    step2_desc: 'El agente de salud realiza los registros necesarios y obtiene los consentimientos correspondientes.',
    step3_title: 'Anamnesis guiada',
    step3_desc: 'Etapa de anamnesis guiada para recopilar los datos clínicos relevantes.',
    step4_title: 'Triaje y clasificación',
    step4_desc: 'La plataforma realiza el triaje automático y clasifica los casos de riesgo.',
    step5_title: 'Derivación',
    step5_desc: 'Los casos clasificados como prioritarios son derivados al médico responsable.',

    about_page_title_full: 'Dermalert - Sobre el Proyecto',
    about_page_heading: 'Sobre el Proyecto',
    about_page_sub: 'Desarrollado por un equipo comprometido con la innovación en salud',
    menu: 'Menú',
    about_project_group: 'Sobre el Proyecto',
    about_team_group: 'Sobre el Equipo',
    tab_goal: 'Objetivo general',
    tab_problem: 'El problema',
    tab_audience: 'Público objetivo',
    tab_method: 'Metodología',
    tab_funding: 'Financiación',
    tab_coordination: 'Coordinación',
    tab_datafabric: 'Data Fabric',
    tab_design: 'Diseño',
    tab_product: 'Producto',
    tab_app: 'Aplicación',
    tab_contributors: 'Colaboradores',
    about_goal_title: 'Tecnología y Cuidado: Una Nueva Alianza<br>Contra el Cáncer de Piel',
    about_goal_p1:
      'Este proyecto se dedica a combatir el cáncer de piel, el tipo con mayor incidencia en Brasil, actuando en dos frentes cruciales: prevención y detección temprana. La iniciativa se destaca por su enfoque innovador, que combina tecnología y ciencia de datos con acciones educativas dirigidas a la población.',
    about_goal_p2:
      'Mediante esta integración, el proyecto busca identificar lesiones sospechosas de forma ágil y eficiente, facilitando un diagnóstico rápido. Al mismo tiempo, busca capacitar al público con información clara y accesible sobre prevención, pasos para el diagnóstico y opciones de tratamiento disponibles, promoviendo la salud y reduciendo el impacto de la enfermedad.',
    about_goal_subtitle: 'Educación en Salud y Triaje Temprano de Cáncer:<br>Data Fabric y Machine Learning en Salud',
    about_goal_card1: '<strong>Educación en salud</strong> para la población y profesionales',
    about_goal_card2: '<strong>Machine Learning y Data Fabric</strong> para apoyar el diagnóstico temprano',
    about_goal_card3: '<strong>Flujos integrados con la Atención Primaria (UBS)</strong> y la red de referencia oncológica.',
    about_problem_title: 'Desafíos en el Triaje Temprano del Cáncer de Piel en Brasil',
    about_problem_p1:
      '<strong>El cáncer de piel es el tumor maligno más frecuente en Brasil y representa cerca del 30% de todos los casos registrados.</strong> Aunque presenta altas tasas de curación cuando se diagnostica y trata de forma temprana, <strong>la detección tardía sigue siendo una realidad para gran parte de la población</strong>, afectando los resultados clínicos y aumentando la carga sobre el sistema de salud.',
    about_problem_p2:
      'En los programas de salud pública existe una brecha significativa en la educación orientada a la detección temprana y en la eficiencia de los flujos de triaje. <strong>El proyecto Dermalert propone una solución integrada que combina:</strong>',
    about_problem_li1: 'Aplicación de un cuestionario de rastreo clínico',
    about_problem_li2: 'Captura y registro de imágenes de lesiones cutáneas sospechosas',
    about_problem_li3: 'Integración de la serie histórica de atenciones (CIE relacionados) en una plataforma analítica',
    about_problem_li4: 'Derivación de casos de riesgo a unidades de Atención Primaria',
    about_problem_p3:
      'El diagnóstico temprano mediante exámenes clínicos, de laboratorio, endoscópicos o radiológicos es la estrategia más eficaz para detectar cáncer de piel en etapas iniciales (INCA, 2022; WHO, 2017). Para ello, es fundamental capacitar a la población y a los profesionales de salud en el reconocimiento de señales sospechosas y garantizar acceso rápido a los servicios de Atención Primaria.',
    about_problem_p4:
      'Aunque no existe comprobación de que un método específico de autoexamen reduzca la mortalidad, muchos casos son descubiertos por los propios pacientes o familiares, lo que refuerza la necesidad de acciones educativas orientadas al autoconocimiento de la piel (Australian Cancer Network, 2008). Ante la alta incidencia y los costos asociados al cáncer de piel en Brasil, ampliar programas de prevención, triaje inteligente e integración de datos en el SUS es esencial para reducir diagnósticos tardíos y mejorar las tasas de curación.',
    about_audience_title: 'Beneficiarios del Triaje y Diagnóstico',
    about_audience_card1_title: 'Profesionales de Atención Primaria',
    about_audience_card1_desc:
      'Médicos, enfermeros y agentes comunitarios de salud de UBS/ESF involucrados en el triaje y derivación de pacientes con lesiones sospechosas. Capacitados para utilizar el sistema de triaje, aplicar cuestionarios clínicos y registrar imágenes para diagnóstico temprano.',
    about_audience_card2_title: 'Pacientes con Lesiones de Piel',
    about_audience_card2_desc:
      'Personas a partir de 18 años que buscan atención en UBS o campañas de salud para evaluación de lesiones cutáneas. Se benefician del rastreo clínico, registro de imágenes y derivación rápida, aumentando las posibilidades de detección y curación temprana.',
    about_method_title: 'Metodología',
    about_funding_title: 'Quién apoya esta iniciativa',
    about_executor_title: 'Ejecutora del proyecto',
    about_executor_desc:
      'La Universidad de Brasilia, por medio de su laboratorio Lab Livre, gestiona y operacionaliza todas las actividades de campo, análisis de datos e integración tecnológica.',
    about_funder_title: 'Fuente de recursos',
    about_funder_desc:
      'El proyecto es financiado por la convocatoria FAP-DF, que apoya iniciativas de innovación en salud pública en el Distrito Federal.',
    about_team_placeholder:
      'Equipo multidisciplinario responsable de la investigación, desarrollo, producto e implementación de DermAlert.',
    app_pending: 'Por definir...',

    privacy_title: 'Política de Privacidad - Dermalert',
    privacy_kicker: 'Privacidad y datos',
    privacy_updated: 'Última actualización: 6 de mayo de 2026',
    privacy_intro1:
      'Dermalert es una herramienta de triaje dermatológico orientada al registro de pacientes, conducción de anamnesis y organización de datos para decisiones clínicas e investigación científica.',
    privacy_intro2:
      'Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información, en plena conformidad con la Ley General de Protección de Datos de Brasil (LGPD - Ley nº 13.709/2018) y las Políticas del Programa para Desarrolladores de Google Play.',
    privacy_collection_title: '1. Recopilación y Uso de Datos',
    privacy_collection_intro:
      'Para el funcionamiento adecuado de la aplicación, solicitamos acceso a cierta información y recursos de su dispositivo:',
    privacy_camera:
      '<strong>Uso de la Cámara (android.permission.CAMERA):</strong> La aplicación solicita acceso a la cámara del dispositivo exclusivamente para capturar imágenes de lesiones de piel durante la etapa de triaje y registro del paciente. Estas imágenes son fundamentales para el propósito principal de la aplicación: apoyar el análisis y la decisión clínica dermatológica. La cámara no se activará en segundo plano ni para fines no relacionados con la evaluación clínica.',
    privacy_clinical:
      '<strong>Datos Personales y Clínicos (Anamnesis):</strong> Recopilamos datos ingresados por el usuario durante el registro de pacientes, que pueden incluir información de salud e historial clínico. Por tratarse de datos sensibles, garantizamos que su recopilación sea transparente y consentida.',
    privacy_storage_title: '2. Almacenamiento y Seguridad de los Datos',
    privacy_storage:
      'La seguridad de los datos es un pilar del proyecto Dermalert. La información clínica y las imágenes recopiladas se tratan con cifrado y se almacenan en servidores seguros de la UnB. Implementamos medidas técnicas y administrativas rigurosas para evitar accesos no autorizados, filtraciones o pérdidas.',
    privacy_research_title: '3. Intercambio y Uso para Investigación',
    privacy_research1:
      'Como parte de una iniciativa de investigación, los datos recopilados podrán utilizarse con fines académicos y científicos, como el entrenamiento de modelos de inteligencia artificial o estudios epidemiológicos. En estos escenarios, garantizamos la anonimización de los datos, desvinculando las imágenes y la información del expediente de la identidad real del paciente, conforme a la LGPD.',
    privacy_research2:
      'No vendemos ni compartimos datos personales con terceros para fines comerciales o publicitarios.',
    privacy_rights_title: '4. Derechos del Usuario (Titular de los Datos)',
    privacy_rights_intro: 'En conformidad con la LGPD, el usuario tiene derecho a:',
    privacy_right1: 'Confirmar la existencia de tratamiento de sus datos;',
    privacy_right2: 'Acceder a los datos almacenados;',
    privacy_right3: 'Corregir datos incompletos, inexactos o desactualizados;',
    privacy_right4: 'Solicitar la eliminación, bloqueo o anonimización de datos innecesarios o tratados en desconformidad con la ley;',
    privacy_right5: 'Revocar el consentimiento en cualquier momento.',
    privacy_delete_title: 'Solicitud de eliminación de cuenta y datos',
    privacy_delete_text:
      'Para solicitar la eliminación de la cuenta y de los datos asociados a Dermalert, envíe un mensaje a',
    privacy_delete_cta: 'Solicitar eliminación de cuenta y datos',
    privacy_changes_title: '5. Cambios en esta Política',
    privacy_changes:
      'Podemos actualizar nuestra Política de Privacidad periódicamente. Notificaremos cualquier cambio publicando la nueva versión en esta página. Se recomienda revisar esta página regularmente para mantenerse informado.',
    privacy_contact_title: '6. Contacto',
    privacy_contact:
      'Si tiene dudas, sugerencias o desea ejercer sus derechos en relación con sus datos, contáctenos por correo electrónico:',
    quick_access: 'Acceso rápido',
    privacy_nav_collection: 'Recopilación y uso',
    privacy_nav_security: 'Seguridad de los datos',
    privacy_nav_research: 'Investigación',
    privacy_nav_rights: 'Derechos del usuario',
    privacy_nav_delete: 'Eliminar cuenta y datos',

    support_title: 'Dermalert - Ayuda y Soporte',
    support_kicker: 'Centro de atencion',
    support_heading: 'Ayuda y Soporte DermAlert',
    support_sub:
      'Encuentre orientaciones de acceso, privacidad, documentacion tecnica y uso de DermAlert en flujos de triaje dermatologico.',
    support_primary_cta: 'Contactar al equipo',
    support_secondary_cta: 'Ver documentacion',
    support_access_title: 'Solicitar acceso',
    support_access_desc:
      'Para solicitar acceso a DermAlert o resolver dudas operativas, envíe un mensaje al equipo responsable.',
    support_delete_title: 'Eliminar cuenta y datos',
    support_delete_desc:
      'La solicitud de eliminación de cuenta y datos se realiza desde la Política de Privacidad.',
    support_docs_title: 'Documentación técnica',
    support_docs_desc:
      'Acceda a la documentación del proyecto, guías técnicas y materiales de apoyo.',
    support_tile_access_label: 'Acceso',
    support_tile_access_title: 'Solicitar acceso',
    support_tile_access_desc:
      'Solicite orientacion para entrar en la app, activar una cuenta o iniciar el uso en una unidad de salud.',
    support_tile_privacy_label: 'Datos',
    support_tile_privacy_title: 'Privacidad y eliminacion',
    support_tile_privacy_desc:
      'Consulte la politica de privacidad y solicite eliminacion de cuenta o datos cuando sea necesario.',
    support_tile_docs_label: 'Documentacion',
    support_tile_docs_title: 'Guias tecnicas',
    support_tile_docs_desc:
      'Acceda a materiales de frontend, backend, historial del proyecto y apoyo a la implantacion.',
    support_tile_flow_label: 'Uso',
    support_tile_flow_title: 'Flujo de triaje',
    support_tile_flow_desc:
      'Revise el paso a paso de registro, anamnesis, registro de lesiones y derivacion.',
    support_docs_kicker: 'Resolver por tema',
    support_docs_heading: 'Canales y documentos disponibles',
    support_card_access_title: 'Acceso a DermAlert',
    support_card_access_desc:
      'Use este canal para solicitar acceso, resolver dudas operativas o pedir orientacion de incorporacion.',
    support_card_email_cta: 'Enviar correo',
    support_card_delete_title: 'Eliminacion de cuenta y datos',
    support_card_delete_desc:
      'La solicitud formal de eliminacion esta en la Politica de Privacidad, con contacto directo del equipo responsable.',
    support_card_flow_title: 'Como funciona',
    support_card_flow_desc:
      'Entienda las etapas de la plataforma, desde el inicio de sesion hasta la derivacion de casos prioritarios.',
    support_card_front_title: 'Frontend mobile',
    support_card_front_desc:
      'Documentacion sobre React Native, Expo, navegacion, camara, almacenamiento local y pantallas de la app.',
    support_card_back_title: 'Backend y API',
    support_card_back_desc:
      'Documentacion sobre FastAPI, base de datos, autenticacion, rutas, Docker y migraciones.',
    support_card_project_title: 'Gestion del proyecto',
    support_card_project_desc:
      'Consulte equipo, actas, checklist, backlog y registros de evolucion del proyecto.',
    support_card_project_cta: 'Ver documentos',
    support_contact_kicker: 'Contacto institucional',
    support_contact_title: 'Necesita soporte directo?',
    support_contact_desc:
      'Para dudas, sugerencias o solicitudes relacionadas con DermAlert, contacte al equipo responsable.',

    course_title: 'Dermalert - Curso de Extensión',
    course_heading: 'Curso de Extensión DermAlert',
    course_sub:
      'Formacion para equipos que necesitan entender el flujo de DermAlert, desde el triaje dermatologico hasta el registro seguro de datos clinicos.',
    course_primary_cta: 'Acceder al material del curso',
    course_secondary_cta: 'Ver flujo de la plataforma',
    course_modules_kicker: 'Ruta de aprendizaje',
    course_modules_title: 'Contenidos esenciales para el uso responsable de DermAlert',
    course_modules_desc:
      'La ruta organiza los temas que aparecen en la aplicacion y en la documentacion tecnica disponible en el proyecto.',
    course_module1_title: 'Contexto clinico y prevencion',
    course_module1_desc:
      'Introduccion al problema del cancer de piel, la importancia de la deteccion temprana y el papel de la Atencion Primaria.',
    course_module2_title: 'Registro y consentimiento',
    course_module2_desc:
      'Buenas practicas para registrar pacientes, identificar atenciones y recopilar consentimientos adecuadamente.',
    course_module3_title: 'Anamnesis guiada',
    course_module3_desc:
      'Uso del cuestionario clinico para recopilar historial, factores de riesgo y senales relevantes durante el triaje.',
    course_module4_title: 'Registro fotografico',
    course_module4_desc:
      'Orientaciones para capturar imagenes de lesiones cutaneas en el flujo clinico, respetando finalidad y privacidad.',
    course_module5_title: 'Triaje y derivacion',
    course_module5_desc:
      'Comprension de las etapas de clasificacion, priorizacion de casos y derivacion para evaluacion responsable.',
    course_module6_title: 'Seguridad y LGPD',
    course_module6_desc:
      'Cuidados con datos sensibles, uso de imagenes, investigacion cientifica, anonimizacion y solicitudes de eliminacion.',
    course_audience_kicker: 'Publico recomendado',
    course_audience_title: 'Para quien fue pensada esta formacion',
    course_audience_desc:
      'El curso apoya a personas involucradas en la atencion, implantacion, investigacion y documentacion de DermAlert.',
    course_audience1_title: 'Profesionales de salud',
    course_audience1_desc:
      'Equipos que actuan en triaje, atencion inicial y registros clinicos de pacientes.',
    course_audience2_title: 'Unidades de salud',
    course_audience2_desc:
      'Equipos que necesitan estandarizar flujos de registro, consentimiento, imagen y derivacion.',
    course_audience3_title: 'Investigadores',
    course_audience3_desc:
      'Personas involucradas en estudios, organizacion de datos, modelos de IA y analisis epidemiologicos.',
    course_audience4_title: 'Equipos tecnicos',
    course_audience4_desc:
      'Desarrolladores y gestores que necesitan entender arquitectura, frontend, backend e implantacion.',
    course_materials_kicker: 'Materiales de apoyo',
    course_materials_title: 'Continue por los documentos del proyecto',
    course_material_flow_title: 'Flujo de la plataforma',
    course_material_flow_desc: 'Vea las etapas principales del uso de DermAlert.',
    course_material_privacy_title: 'Privacidad y datos',
    course_material_privacy_desc:
      'Entienda uso de camara, datos sensibles, investigacion y eliminacion.',
    course_material_front_desc: 'Consulte pantallas, tecnologias y flujo de la aplicacion.',
    course_material_back_desc: 'Consulte autenticacion, rutas, base de datos e implantacion.',
    course_status_kicker: 'Estado del material',
    course_status_title: 'Contenido en evolucion',
    course_status_desc:
      'La documentacion del curso aun se esta consolidando en el repositorio. Esta pagina organiza la ruta publica disponible y dirige a los documentos oficiales del proyecto.',
  },
};

Object.keys(PAGE_I18N).forEach((lang) => {
  I18N[lang] = { ...(I18N[lang] || {}), ...PAGE_I18N[lang] };
});






// (opcional) ainda deixo o registerDict
function registerDict(partial) {
  if (!partial) return;
  Object.keys(partial).forEach((lang) => {
    I18N[lang] = { ...(I18N[lang] || {}), ...(partial[lang] || {}) };
  });
  const current = localStorage.getItem('lang') || 'pt-BR';
  requestAnimationFrame(() => applyLang(current));
}

// ───────────────────────────────────────────────────────────
// Utilitários base
function setDarkMode(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  const themeToggleMobile   = document.getElementById('theme-toggle');
  const themeToggleDesktop  = document.getElementById('theme-toggle-desktop');
  if (themeToggleMobile)  themeToggleMobile.checked  = isDark;
  if (themeToggleDesktop) themeToggleDesktop.checked = isDark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Troca só conteúdo textual, sem remover filhos/ícones se existirem
function safeSetText(el, text) {
  if (!el || typeof text !== 'string') return;
  if (!el.firstElementChild) {
    if (el.textContent !== text) el.textContent = text;
    return;
  }
  const tn = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
  if (tn) {
    if (tn.nodeValue !== text) tn.nodeValue = text;
  }
  else el.insertBefore(document.createTextNode(text), el.firstChild);
}

function setTranslatedContent(el, text) {
  if (!el || typeof text !== 'string') return;
  if (el.hasAttribute('data-i18n-html')) {
    if (el.innerHTML !== text) el.innerHTML = text;
    return;
  }
  safeSetText(el, text);
}

// Atualiza APENAS os <span data-i18n> dos dois botões da hero
function updateHeroButtons(dict) {
  const spanAcc   = document.querySelector('[data-i18n="hero_cta_acesso"]');
  const spanSobre = document.querySelector('[data-i18n="hero_cta_sobre"]');

  if (spanAcc && dict.hero_cta_acesso) {
    spanAcc.textContent = dict.hero_cta_acesso;
    const a = spanAcc.closest('a');
    if (a) { a.setAttribute('aria-label', dict.hero_cta_acesso); a.title = dict.hero_cta_acesso; }
  }
  if (spanSobre && dict.hero_cta_sobre) {
    spanSobre.textContent = dict.hero_cta_sobre;
    const a = spanSobre.closest('a');
    if (a) { a.setAttribute('aria-label', dict.hero_cta_sobre); a.title = dict.hero_cta_sobre; }
  }
}

// Aplica TUDO
function applyLang(lang) {
  const dict = I18N[lang] || I18N['pt-BR'];
  const normalizedLang = I18N[lang] ? lang : 'pt-BR';

  // 1) Atualiza todo mundo com data-i18n
  document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
    if (dict[key]) setTranslatedContent(el, dict[key]);
  });

  // 2) Hero: título, subtítulo e botões (span-based)
  const t = document.getElementById('hero-title');
  const s = document.getElementById('hero-sub');
  if (t && dict.hero_title) t.textContent = dict.hero_title;
  if (s && dict.hero_sub)   s.textContent = dict.hero_sub;
  updateHeroButtons(dict);

  // 3) Sincronia UI (select mobile + label do dropdown desktop)
  const langSelectMobile = document.getElementById('lang-select');
  if (langSelectMobile) langSelectMobile.value = normalizedLang;
  const btnLabel = document.getElementById('lang-button-label');
  if (btnLabel) btnLabel.textContent = normalizedLang === 'en' ? 'EN' : normalizedLang === 'es' ? 'ES' : 'PT-BR';

  document.documentElement.lang = normalizedLang === 'pt-BR' ? 'pt-br' : normalizedLang;
  localStorage.setItem('lang', normalizedLang);
  document.dispatchEvent(new CustomEvent('dermalert:langchange', {
    detail: { lang: normalizedLang, dict },
  }));
}

function getDict(lang) {
  return I18N[lang] || I18N['pt-BR'];
}

// ───────────────────────────────────────────────────────────
// Header FIXO: spacer dinâmico e posicionamento do sheet mobile
function updateHeaderSpacer() {
  const header = document.getElementById('site-header');
  const shell  = document.querySelector('[data-header-shell]');
  const spacer = document.getElementById('header-spacer');
  if (!header || !shell) return;

  const rect = shell.getBoundingClientRect();
  const topCSS = getComputedStyle(header).top || '0px';
  const topGap = parseFloat(topCSS) || 0;

  const total = Math.ceil(rect.height + topGap + 8); // +8px de respiro
  document.documentElement.style.setProperty('--header-spacer', total + 'px');
  if (spacer) spacer.style.height = total + 'px';
}

function positionMobileSheet() {
  const header = document.getElementById('site-header');
  const sheet  = document.getElementById('mobile-sheet');
  if (!header || !sheet) return;

  const shellRect = document.querySelector('[data-header-shell]')?.getBoundingClientRect();
  const topCSS = getComputedStyle(header).top || '0px';
  const topGap = parseFloat(topCSS) || 0;

  const topPx = Math.max((shellRect?.bottom || 88) + topGap + 8, 72);
  sheet.style.top = `${topPx}px`;
}

// (opcional) reforça a sombra quando a página rola
function enhanceHeaderShadowOnScroll() {
  const shell = document.querySelector('[data-header-shell]');
  if (!shell) return;
  const y = window.scrollY || document.documentElement.scrollTop || 0;
  shell.style.boxShadow = y > 4
    ? '0 24px 68px rgba(14,26,43,.28), inset 0 1px 0 rgba(255,255,255,.12)'
    : '';
}

function markCurrentNavigation() {
  const currentPath = window.location.pathname;
  const currentFile = (currentPath.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('#site-header .da-nav-link[href]').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('http') || href.startsWith('mailto:')) return;

    const url = new URL(href, window.location.origin);
    const isDirectoryLink = url.pathname.endsWith('/');
    const hrefFile = url.pathname.split('/').pop().toLowerCase();
    const isCurrent = isDirectoryLink
      ? currentPath === url.pathname || currentPath.startsWith(url.pathname)
      : hrefFile && hrefFile === currentFile;

    if (isCurrent) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

// ───────────────────────────────────────────────────────────
// Dropdown custom de idioma (desktop)
function initDesktopLangDropdown() {
  const btn   = document.getElementById('lang-button');
  const menu  = document.getElementById('lang-menu');
  const label = document.getElementById('lang-button-label');
  if (!btn || !menu || !label) return;

  let open = false;
  const setOpen = (value) => {
    open = value;
    btn.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('invisible', !open);
    menu.classList.toggle('opacity-0', !open);
    menu.classList.toggle('scale-95', !open);
  };

  const selectLang = (value) => {
    applyLang(value);
    label.textContent = value === 'en' ? 'EN' : value === 'es' ? 'ES' : 'PT-BR';
    setOpen(false);
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!open);
    if (open) menu.focus();
  });

  menu.querySelectorAll('[data-lang]').forEach((opt) => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      selectLang(opt.getAttribute('data-lang'));
    });
  });

  document.addEventListener('click', () => open && setOpen(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) setOpen(false); });

  const savedLang = localStorage.getItem('lang') || 'pt-BR';
  label.textContent = savedLang === 'en' ? 'EN' : savedLang === 'es' ? 'ES' : 'PT-BR';
}

// ───────────────────────────────────────────────────────────
// Inicialização + observador para DOM dinâmico
document.addEventListener('DOMContentLoaded', () => {
  const btn       = document.getElementById('nav-toggle');
  const overlay   = document.getElementById('mobile-overlay');
  const sheet     = document.getElementById('mobile-sheet');
  const dim       = overlay?.firstElementChild || null;
  const icoOpen   = document.getElementById('icon-open');
  const icoClose  = document.getElementById('icon-close');
  const accBtn    = document.querySelector('[data-accordion-trigger]');
  const accPanel  = document.getElementById('ajuda-sub');
  const accCaret  = document.querySelector('[data-accordion-caret]');
  const langSelectMobile = document.getElementById('lang-select');

  // tema + idioma
  const savedTheme = localStorage.getItem('theme');
  setDarkMode(savedTheme ? savedTheme === 'dark' : false);

  const savedLang = localStorage.getItem('lang') || 'pt-BR';
  applyLang(savedLang);

  // dropdown de idioma (desktop)
  initDesktopLangDropdown();
  markCurrentNavigation();

  // manter spacer/posicionamento e sombra elegante
  updateHeaderSpacer();
  positionMobileSheet();
  enhanceHeaderShadowOnScroll();

  window.addEventListener('resize', () => {
    updateHeaderSpacer();
    positionMobileSheet();
  }, { passive: true });

  window.addEventListener('scroll', () => {
    enhanceHeaderShadowOnScroll();
    positionMobileSheet();
  }, { passive: true });

  // menu mobile
  const openMenu = () => {
    if (!overlay || !sheet || !dim) return;
    positionMobileSheet();
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => {
      dim.classList.remove('opacity-0');
      sheet.classList.remove('translate-y-3', 'opacity-0');
      icoOpen?.classList.add('opacity-0', 'pointer-events-none');
      icoClose?.classList.remove('opacity-0', 'pointer-events-none');
    });
    btn?.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    if (!overlay || !sheet || !dim) return;
    dim.classList.add('opacity-0');
    sheet.classList.add('translate-y-3', 'opacity-0');
    icoOpen?.classList.remove('opacity-0', 'pointer-events-none');
    icoClose?.classList.add('opacity-0', 'pointer-events-none');
    btn?.setAttribute('aria-expanded', 'false');
    setTimeout(() => overlay.classList.add('hidden'), 200);
  };

  btn?.addEventListener('click', () => {
    btn.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === dim) closeMenu();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn?.getAttribute('aria-expanded') === 'true') closeMenu();
  });
  sheet?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // submenu "Ajuda e Suporte"
  accBtn?.addEventListener('click', () => {
    const open = accPanel?.classList.toggle('hidden') === false;
    accBtn.setAttribute('aria-expanded', String(!!open));
    accCaret?.classList.toggle('rotate-180', !!open);
  });

  // eventos de tema
  document.getElementById('theme-toggle')?.addEventListener('change', (e) => setDarkMode(e.target.checked));
  document.getElementById('theme-toggle-desktop')?.addEventListener('change', (e) => setDarkMode(e.target.checked));

  // idioma MOBILE (select nativo)
  langSelectMobile?.addEventListener('change', (e) => applyLang(e.target.value));

  // MutationObserver: re-aplica idioma e reposiciona quando DOM muda (HMR, injeções, etc.)
  let rafId = null;
  const reapply = () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const lang = localStorage.getItem('lang') || 'pt-BR';
      applyLang(lang);
      updateHeaderSpacer();
      positionMobileSheet();
    });
  };
  const mo = new MutationObserver(reapply);
  mo.observe(document.body, { childList: true, subtree: true });
});

// ───────────────────────────────────────────────────────────
// Exporta utilidades
export const DermalertHeader = { applyLang, setDarkMode, registerDict, getDict };
window.DermalertHeader = DermalertHeader;
