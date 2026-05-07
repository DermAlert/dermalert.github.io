const FLOW_DURATION = 5200;
const IMAGE_FLOW_DURATION = 9200;
const FEATURE_IMAGE_STEP_DURATION = 1300;
const FEATURE_IMAGE_SEQUENCE = ['choice', 'camera', 'camera-captured', 'gallery', 'preview', 'remove'];

const FLOW_COPY = {
  'pt-BR': {
    status_1: 'Cadastro',
    status_2: 'Lesão',
    status_3: 'Triagem',
    play_label: 'Reproduzir animação',
    pause_label: 'Pausar animação',
    reduced_label: 'Movimento reduzido ativo',
    screen1_kicker: 'Novo atendimento',
    screen1_title: 'Identificação segura',
    secure_chip: 'Seguro',
    screen1_field_name: 'Nome',
    screen1_field_birth: 'Nascimento',
    screen1_field_card: 'Cartão SUS',
    screen1_field_unit: 'Unidade',
    screen1_field_consent: 'Consentimento',
    screen1_consent_ok: 'Registrado',
    screen1_field_sync: 'Sincronização',
    screen1_sync_ready: 'Pronta',
    screen1_action: 'Salvar cadastro',
    screen2_kicker: 'Etapa clínica',
    screen2_title: 'Registrar lesão',
    screen2_question_label: 'Sinais observados',
    screen2_chip_a: 'Assimetria',
    screen2_chip_b: 'Bordas',
    screen2_chip_c: 'Cor',
    screen2_chip_d: 'Evolução',
    screen2_check1: 'Perguntas guiadas completas',
    screen2_check2: 'Imagem clínica vinculada',
    screen2_action: 'Enviar para triagem',
    screen3_kicker: 'Resultado',
    screen3_title: 'Triagem e pesquisa',
    screen3_badge: 'OK',
    screen3_priority_label: 'Prioridade',
    screen3_priority_value: 'Avaliação médica',
    screen3_priority_note: 'Caso organizado para encaminhamento.',
    screen3_check1: 'Histórico clínico salvo',
    screen3_check2: 'Dados prontos para análise',
    screen3_check3: 'Encaminhamento rastreável',
    screen3_action: 'Concluir atendimento',
    metric_steps: 'etapas guiadas',
    metric_privacy: 'dados sensíveis protegidos',
    metric_referral: 'encaminhamento rastreável',
  },
  en: {
    status_1: 'Registration',
    status_2: 'Lesion',
    status_3: 'Triage',
    play_label: 'Play animation',
    pause_label: 'Pause animation',
    reduced_label: 'Reduced motion is active',
    screen1_kicker: 'New visit',
    screen1_title: 'Secure identification',
    secure_chip: 'Secure',
    screen1_field_name: 'Name',
    screen1_field_birth: 'Birth date',
    screen1_field_card: 'Health ID',
    screen1_field_unit: 'Unit',
    screen1_field_consent: 'Consent',
    screen1_consent_ok: 'Recorded',
    screen1_field_sync: 'Sync',
    screen1_sync_ready: 'Ready',
    screen1_action: 'Save registration',
    screen2_kicker: 'Clinical step',
    screen2_title: 'Register lesion',
    screen2_question_label: 'Observed signs',
    screen2_chip_a: 'Asymmetry',
    screen2_chip_b: 'Borders',
    screen2_chip_c: 'Color',
    screen2_chip_d: 'Evolution',
    screen2_check1: 'Guided questions complete',
    screen2_check2: 'Clinical image linked',
    screen2_action: 'Send to triage',
    screen3_kicker: 'Result',
    screen3_title: 'Triage & research',
    screen3_badge: 'OK',
    screen3_priority_label: 'Priority',
    screen3_priority_value: 'Medical review',
    screen3_priority_note: 'Case organized for referral.',
    screen3_check1: 'Clinical history saved',
    screen3_check2: 'Data ready for analysis',
    screen3_check3: 'Traceable referral',
    screen3_action: 'Finish visit',
    metric_steps: 'guided steps',
    metric_privacy: 'sensitive data protected',
    metric_referral: 'traceable referral',
  },
  es: {
    status_1: 'Registro',
    status_2: 'Lesión',
    status_3: 'Triaje',
    play_label: 'Reproducir animación',
    pause_label: 'Pausar animación',
    reduced_label: 'Movimiento reducido activo',
    screen1_kicker: 'Nueva atención',
    screen1_title: 'Identificación segura',
    secure_chip: 'Seguro',
    screen1_field_name: 'Nombre',
    screen1_field_birth: 'Nacimiento',
    screen1_field_card: 'Tarjeta de salud',
    screen1_field_unit: 'Unidad',
    screen1_field_consent: 'Consentimiento',
    screen1_consent_ok: 'Registrado',
    screen1_field_sync: 'Sincronización',
    screen1_sync_ready: 'Lista',
    screen1_action: 'Guardar registro',
    screen2_kicker: 'Etapa clínica',
    screen2_title: 'Registrar lesión',
    screen2_question_label: 'Signos observados',
    screen2_chip_a: 'Asimetría',
    screen2_chip_b: 'Bordes',
    screen2_chip_c: 'Color',
    screen2_chip_d: 'Evolución',
    screen2_check1: 'Preguntas guiadas completas',
    screen2_check2: 'Imagen clínica vinculada',
    screen2_action: 'Enviar a triaje',
    screen3_kicker: 'Resultado',
    screen3_title: 'Triaje e investigación',
    screen3_badge: 'OK',
    screen3_priority_label: 'Prioridad',
    screen3_priority_value: 'Evaluación médica',
    screen3_priority_note: 'Caso organizado para derivación.',
    screen3_check1: 'Historial clínico guardado',
    screen3_check2: 'Datos listos para análisis',
    screen3_check3: 'Derivación rastreable',
    screen3_action: 'Concluir atención',
    metric_steps: 'etapas guiadas',
    metric_privacy: 'datos sensibles protegidos',
    metric_referral: 'derivación rastreable',
  },
};

function getCurrentLang() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const htmlLang = document.documentElement.lang || 'pt-BR';
  return htmlLang.toLowerCase().startsWith('pt') ? 'pt-BR' : htmlLang;
}

function getFlowCopy(lang) {
  return FLOW_COPY[lang] || FLOW_COPY['pt-BR'];
}

function setText(el, value) {
  if (!el || typeof value !== 'string' || el.textContent === value) return;
  el.textContent = value;
}

export function initFeaturesBaseEffects(root = document) {
  const section = root.querySelector('#functionalities');
  if (!section || section.dataset.featuresBaseWired === 'true') return;
  section.dataset.featuresBaseWired = 'true';

  const flowRoot = section.querySelector('[data-feature-flow]') || section;
  const screens = Array.from(section.querySelectorAll('[data-flow-screen]'));
  const cards = Array.from(section.querySelectorAll('[data-flow-card]'));
  const railSteps = Array.from(section.querySelectorAll('[data-flow-step-button]'));
  const status = section.querySelector('[data-flow-status]');
  const prevButton = section.querySelector('[data-flow-prev]');
  const nextButton = section.querySelector('[data-flow-next]');
  const playButton = section.querySelector('[data-flow-play]');
  const playIcon = section.querySelector('[data-play-icon]');
  const pauseIcon = section.querySelector('[data-pause-icon]');
  const progressBar = section.querySelector('[data-flow-progress-bar]');
  const cardMeters = Array.from(section.querySelectorAll('.flow-card-meter span'));
  const swipeSurface = section.querySelector('[data-flow-swipe]');
  const registerScreen = section.querySelector('.register-screen');
  const registerPages = Array.from(section.querySelectorAll('[data-register-page]'));
  const registerProgress = section.querySelector('.register-progress span');
  const registerStepLabel = section.querySelector('.register-step');
  const registerInputs = Array.from(section.querySelectorAll('[data-register-input]'));
  const registerInputFrames = Array.from(section.querySelectorAll('[data-register-input-frame]'));
  const registerNextButton = section.querySelector('[data-register-next]');
  const registerBackButton = section.querySelector('[data-register-back]');
  const registerActions = section.querySelector('[data-register-actions]');
  const registerKeyboard = section.querySelector('[data-register-keyboard]');
  const registerClearButton = section.querySelector('[data-register-clear]');
  const lesionScreen = section.querySelector('.lesion-screen');
  const lesionPages = Array.from(section.querySelectorAll('[data-lesion-page]'));
  const lesionProgress = section.querySelector('[data-lesion-progress]');
  const lesionStepLabel = section.querySelector('[data-lesion-step-label]');
  const lesionNextButton = section.querySelector('[data-lesion-next]');
  const lesionBackButton = section.querySelector('[data-lesion-back]');
  const lesionActions = section.querySelector('[data-lesion-actions]');
  const lesionClearButton = section.querySelector('[data-lesion-clear]');
  const lesionUploadGrid = section.querySelector('[data-lesion-upload-grid]');
  const lesionAddButtons = Array.from(section.querySelectorAll('[data-lesion-add-image]'));
  const lesionLocationButtons = Array.from(section.querySelectorAll('[data-lesion-location]'));
  const lesionImageFlow = section.querySelector('[data-lesion-image-flow]');
  const lesionImagePanels = Array.from(section.querySelectorAll('[data-lesion-image-panel]'));
  const lesionImageCloseButtons = Array.from(section.querySelectorAll('[data-lesion-image-close]'));
  const lesionOpenCameraButtons = Array.from(section.querySelectorAll('[data-lesion-open-camera]'));
  const lesionOpenGalleryButtons = Array.from(section.querySelectorAll('[data-lesion-open-gallery]'));
  const lesionCaptureButtons = Array.from(section.querySelectorAll('[data-lesion-capture-image]'));
  const lesionUseImageButtons = Array.from(section.querySelectorAll('[data-lesion-use-image]'));
  const lesionGalleryItems = Array.from(section.querySelectorAll('[data-lesion-gallery-item]'));
  const lesionPreviewButtons = Array.from(section.querySelectorAll('[data-lesion-preview-image]'));
  const lesionDeleteImageButtons = Array.from(section.querySelectorAll('[data-lesion-delete-image]'));
  const lesionRemoveConfirmButtons = Array.from(section.querySelectorAll('[data-lesion-remove-confirm]'));
  const lesionRemoveCancelButtons = Array.from(section.querySelectorAll('[data-lesion-remove-cancel]'));
  const featureImageDemo = section.querySelector('[data-feature-image-demo]');
  const featureImagePanels = Array.from(section.querySelectorAll('[data-feature-image-panel]'));
  const featureImageTargetButtons = Array.from(section.querySelectorAll('[data-feature-image-target]'));
  const featureGalleryItems = Array.from(section.querySelectorAll('[data-feature-gallery-item]'));
  const featureImageDots = Array.from(section.querySelectorAll('[data-feature-image-dot]'));

  if (!screens.length || !cards.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const steps = screens
    .map((screen) => Number(screen.dataset.flowScreen))
    .filter((step) => Number.isFinite(step));
  const firstStep = Math.min(...steps);
  const lastStep = Math.max(...steps);

  let activeStep = firstStep;
  let timerId = null;
  let inView = !('IntersectionObserver' in window);
  let hoverPaused = false;
  let isPlaying = !reduceMotion;
  let registerStep = 1;
  let lesionStep = 1;
  let lesionHasImages = false;
  let activeRegisterInput = registerInputs[0] || null;
  let featureImageStep = 0;
  let featureImageTimerId = null;
  let progressFrameId = null;
  let progressStartedAt = 0;
  let progressStartValue = 0;
  let progressValue = 0;
  let progressDuration = FLOW_DURATION;
  const registerTotalSteps = registerPages.length || 1;
  const lesionTotalPages = lesionPages.length || 1;
  const lesionProgressSteps = 8;

  function shouldRun() {
    return isPlaying && inView && !hoverPaused;
  }

  function getActiveFlowDuration() {
    return activeStep === 3 ? IMAGE_FLOW_DURATION : FLOW_DURATION;
  }

  function nextStep(step = activeStep) {
    return step >= lastStep ? firstStep : step + 1;
  }

  function previousStep(step = activeStep) {
    return step <= firstStep ? lastStep : step - 1;
  }

  function getActiveCardMeter() {
    const activeCard = cards.find((card) => Number(card.dataset.step) === activeStep);
    return activeCard?.querySelector('.flow-card-meter span') || null;
  }

  function applyFlowProgress(value = progressValue) {
    progressValue = Math.max(0, Math.min(1, Number(value) || 0));
    const width = `${(progressValue * 100).toFixed(3)}%`;
    const activeMeter = getActiveCardMeter();

    if (progressBar) progressBar.style.width = width;
    cardMeters.forEach((meter) => {
      meter.style.width = meter === activeMeter ? width : '0%';
    });
  }

  function clearProgressFrame() {
    if (progressFrameId) window.cancelAnimationFrame(progressFrameId);
    progressFrameId = null;
  }

  function getCurrentProgress(now = window.performance.now()) {
    if (!progressStartedAt) return progressValue;
    const duration = Math.max(1, progressDuration);
    const elapsed = Math.max(0, now - progressStartedAt);
    return Math.min(1, progressStartValue + (elapsed / duration) * (1 - progressStartValue));
  }

  function tickFlowProgress(now) {
    applyFlowProgress(getCurrentProgress(now));
    if (progressValue >= 1) {
      clearProgressFrame();
      return;
    }
    progressFrameId = window.requestAnimationFrame(tickFlowProgress);
  }

  function pauseFlowProgress() {
    applyFlowProgress(getCurrentProgress());
    clearProgressFrame();
    progressStartedAt = 0;
  }

  function resetFlowProgress(value = 0) {
    clearProgressFrame();
    progressStartedAt = 0;
    progressStartValue = value;
    progressValue = value;
    progressDuration = getActiveFlowDuration();
    applyFlowProgress(progressValue);
  }

  function startFlowProgress() {
    clearProgressFrame();
    progressDuration = getActiveFlowDuration();
    progressStartValue = progressValue;
    progressStartedAt = window.performance.now();
    applyFlowProgress(progressValue);
    progressFrameId = window.requestAnimationFrame(tickFlowProgress);
  }

  function getRemainingFlowDuration() {
    return Math.max(0, Math.round((1 - progressValue) * getActiveFlowDuration()));
  }

  function updatePlayButton() {
    if (!playButton) return;
    const copy = getFlowCopy(getCurrentLang());
    const label = reduceMotion
      ? copy.reduced_label
      : isPlaying
        ? copy.pause_label
        : copy.play_label;

    playButton.setAttribute('aria-label', label);
    playButton.setAttribute('title', label);
    playButton.setAttribute('aria-pressed', String(isPlaying && !reduceMotion));
    playButton.disabled = reduceMotion;
    if (playIcon) playIcon.hidden = isPlaying || reduceMotion;
    if (pauseIcon) pauseIcon.hidden = !isPlaying || reduceMotion;
  }

  function setFeatureImagePanel(panelName) {
    if (!featureImageDemo || !featureImagePanels.length) return;
    const activePanelName = panelName === 'camera-captured' ? 'camera' : panelName;
    featureImageDemo.classList.toggle('is-camera-captured', panelName === 'camera-captured');
    featureImageDemo.dataset.imageState = panelName;

    featureImagePanels.forEach((panel) => {
      const active = panel.dataset.featureImagePanel === activePanelName;
      panel.classList.toggle('is-active', active);
      panel.setAttribute('aria-hidden', String(!active));
    });

    featureImageDots.forEach((dot) => {
      dot.classList.toggle('is-active', dot.dataset.featureImageDot === panelName);
    });

    const sequenceIndex = FEATURE_IMAGE_SEQUENCE.indexOf(panelName);
    if (sequenceIndex >= 0) featureImageStep = sequenceIndex;
  }

  function stopFeatureImageAuto() {
    clearTimeout(featureImageTimerId);
    featureImageTimerId = null;
  }

  function scheduleFeatureImageAuto(restart = false) {
    stopFeatureImageAuto();
    if (restart) {
      featureImageStep = 0;
      setFeatureImagePanel(FEATURE_IMAGE_SEQUENCE[featureImageStep]);
    }
    if (reduceMotion || activeStep !== 3 || !shouldRun()) return;

    featureImageTimerId = window.setTimeout(() => {
      featureImageStep = (featureImageStep + 1) % FEATURE_IMAGE_SEQUENCE.length;
      setFeatureImagePanel(FEATURE_IMAGE_SEQUENCE[featureImageStep]);
      scheduleFeatureImageAuto();
    }, FEATURE_IMAGE_STEP_DURATION);
  }

  function pauseForFeatureImageInteraction() {
    if (!reduceMotion && isPlaying) setPlaying(false);
  }

  function updateRunningState(restart = false) {
    clearTimeout(timerId);
    timerId = null;

    section.classList.toggle('is-paused', !shouldRun());

    if (!shouldRun()) {
      section.classList.remove('is-playing');
      pauseFlowProgress();
      scheduleFeatureImageAuto(false);
      return;
    }

    if (restart) {
      section.classList.remove('is-playing');
      section.offsetWidth;
      resetFlowProgress(0);
    }

    section.classList.add('is-playing');
    startFlowProgress();
    scheduleFeatureImageAuto(false);
    timerId = window.setTimeout(() => {
      setActiveStep(nextStep(), { source: 'auto' });
    }, getRemainingFlowDuration());
  }

  function applyFlowLanguage(lang = getCurrentLang()) {
    const copy = getFlowCopy(lang);
    section.querySelectorAll('[data-flow-i18n]').forEach((el) => {
      const key = el.getAttribute('data-flow-i18n');
      setText(el, copy[key]);
    });
    setText(status, copy[`status_${activeStep}`]);
    updatePlayButton();
  }

  function setActiveStep(step, options = {}) {
    if (!steps.includes(Number(step))) return;

    const numericStep = Number(step);
    const previousActiveStep = activeStep;
    const wrappingForward = activeStep === lastStep && numericStep === firstStep;
    const movingForward = numericStep > activeStep || wrappingForward;
    flowRoot.dataset.direction = movingForward ? 'forward' : 'back';
    activeStep = numericStep;
    section.style.setProperty('--flow-duration', `${getActiveFlowDuration()}ms`);
    resetFlowProgress(0);
    if (activeStep !== 2) closeLesionImageFlow();
    if (previousActiveStep !== 3 && activeStep === 3) {
      scheduleFeatureImageAuto(true);
    } else if (activeStep !== 3) {
      stopFeatureImageAuto();
    }

    screens.forEach((screen) => {
      const active = Number(screen.dataset.flowScreen) === activeStep;
      screen.classList.toggle('is-active', active);
      screen.setAttribute('aria-hidden', String(!active));
    });

    cards.forEach((card) => {
      const active = Number(card.dataset.step) === activeStep;
      card.classList.toggle('is-active', active);
      card.setAttribute('aria-selected', String(active));
    });

    railSteps.forEach((stepEl) => {
      stepEl.classList.toggle('is-active', Number(stepEl.dataset.step) === activeStep);
    });

    applyFlowLanguage();
    updateRunningState(options.source !== 'init');
  }

  function setPlaying(value) {
    if (reduceMotion) return;
    isPlaying = Boolean(value);
    updatePlayButton();
    updateRunningState(false);
  }

  function pauseForRegisterInteraction() {
    if (!reduceMotion && isPlaying) setPlaying(false);
  }

  function pauseForLesionInteraction() {
    if (!reduceMotion && isPlaying) setPlaying(false);
  }

  function syncLesionButton() {
    if (!lesionNextButton) return;
    const hasValue = lesionStep === 1 || (lesionStep === 2 && lesionHasImages);
    lesionNextButton.classList.toggle('has-value', hasValue);
    lesionNextButton.disabled = lesionStep === 2 && !lesionHasImages;
  }

  function showLesionUploadEmptyState() {
    if (!lesionUploadGrid) return;
    lesionUploadGrid.classList.remove('is-empty-shake');
    lesionUploadGrid.offsetWidth;
    lesionUploadGrid.classList.add('is-empty-shake');
  }

  function setLesionStep(step, options = {}) {
    if (!lesionPages.length) return;
    const nextLesionStep = Math.min(Math.max(Number(step), 1), lesionTotalPages);
    if (!Number.isFinite(nextLesionStep)) return;

    const movingBack = nextLesionStep < lesionStep || options.source === 'back';
    lesionStep = nextLesionStep;
    lesionScreen?.setAttribute('data-lesion-direction', movingBack ? 'back' : 'forward');

    lesionPages.forEach((page) => {
      const active = Number(page.dataset.lesionPage) === lesionStep;
      page.classList.toggle('is-active', active);
      page.setAttribute('aria-hidden', String(!active));
    });

    const isComplete = lesionStep === lesionTotalPages;
    const visibleStep = Math.min(lesionStep, 2);
    lesionScreen?.classList.toggle('is-complete', isComplete);
    lesionScreen?.classList.toggle('has-images', lesionHasImages);
    lesionActions?.classList.toggle('is-first', lesionStep === 1);
    lesionActions?.classList.toggle('is-final', lesionStep === 2);
    if (lesionProgress) lesionProgress.style.width = `${(visibleStep / lesionProgressSteps) * 100}%`;
    setText(lesionStepLabel, `Passo ${visibleStep} de ${lesionProgressSteps}`);
    syncLesionButton();
  }

  function commitLesionStep() {
    pauseForLesionInteraction();
    if (lesionStep === 1) {
      setLesionStep(2, { source: 'next' });
      return;
    }
    if (lesionStep === 2) {
      if (!lesionHasImages) {
        showLesionUploadEmptyState();
        return;
      }
      setLesionStep(3, { source: 'next' });
      return;
    }
    setActiveStep(nextStep(), { source: 'lesion-complete' });
  }

  function previousLesionStep() {
    pauseForLesionInteraction();
    if (lesionStep > 1 && lesionStep < lesionTotalPages) setLesionStep(lesionStep - 1, { source: 'back' });
  }

  function setLesionImagePanel(panelName) {
    if (!lesionImageFlow || !lesionImagePanels.length) return;
    const activePanelName = panelName === 'camera-captured' ? 'camera' : panelName;
    lesionImageFlow.classList.add('is-open');
    lesionImageFlow.classList.toggle('is-camera-captured', panelName === 'camera-captured');
    lesionImageFlow.dataset.imageState = panelName;
    lesionImageFlow.setAttribute('aria-hidden', 'false');
    lesionScreen?.classList.add('is-image-flow-open');

    lesionImagePanels.forEach((panel) => {
      const active = panel.dataset.lesionImagePanel === activePanelName;
      panel.classList.toggle('is-active', active);
      panel.setAttribute('aria-hidden', String(!active));
    });
  }

  function openLesionImageChoice() {
    pauseForLesionInteraction();
    setLesionImagePanel('choice');
  }

  function closeLesionImageFlow() {
    if (!lesionImageFlow) return;
    lesionImageFlow.classList.remove('is-open', 'is-camera-captured');
    lesionImageFlow.removeAttribute('data-image-state');
    lesionImageFlow.setAttribute('aria-hidden', 'true');
    lesionScreen?.classList.remove('is-image-flow-open');
  }

  function finishLesionImageFlow() {
    pauseForLesionInteraction();
    lesionHasImages = true;
    lesionScreen?.classList.add('has-images');
    closeLesionImageFlow();
    syncLesionButton();
  }

  function removeLesionImages() {
    pauseForLesionInteraction();
    lesionHasImages = false;
    lesionScreen?.classList.remove('has-images');
    closeLesionImageFlow();
    syncLesionButton();
  }

  function resetLesionFlow() {
    pauseForLesionInteraction();
    lesionHasImages = false;
    lesionScreen?.classList.remove('has-images');
    closeLesionImageFlow();
    lesionLocationButtons.forEach((button) => {
      button.classList.remove('is-selected');
      button.setAttribute('aria-expanded', 'false');
    });
    setLesionStep(1, { source: 'clear' });
  }

  function getActiveRegisterPage() {
    return registerPages.find((page) => Number(page.dataset.registerPage) === registerStep) || registerPages[0] || null;
  }

  function getActiveRegisterInput() {
    const activePage = getActiveRegisterPage();
    return activePage?.querySelector('[data-register-input]') || activeRegisterInput || registerInputs[0] || null;
  }

  function formatRegisterField(input) {
    if (!input) return;
    const digits = input.value.replace(/\D/g, '');
    if (input.id === 'feature-register-cpf') {
      input.value = digits
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      return;
    }
    if (input.id === 'feature-register-birth') {
      input.value = digits
        .slice(0, 8)
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2');
      return;
    }
    if (input.id === 'feature-register-sus') {
      input.value = digits.slice(0, 15);
    }
  }

  function hasRegisterChoice(groupName) {
    return Boolean(section.querySelector(`[data-register-choice="${groupName}"].is-selected`));
  }

  function hasRegisterConsent() {
    return Boolean(section.querySelector('[data-register-consent].is-selected'));
  }

  function isRegisterStepValid() {
    const activePage = getActiveRegisterPage();
    const input = activePage?.querySelector('[data-register-input]');
    if (input && ['1', '2', '3', '6'].includes(activePage.dataset.registerPage)) {
      return input.value.trim().length > 0;
    }
    if (registerStep === 4) return hasRegisterChoice('gender');
    if (registerStep === 7) return hasRegisterConsent();
    return true;
  }

  function syncRegisterButton() {
    if (!registerNextButton) return;
    registerNextButton.classList.toggle('has-value', isRegisterStepValid());
    registerNextButton.disabled = registerStep === 7 && !hasRegisterConsent();
  }

  function showRegisterEmptyState() {
    const activePage = getActiveRegisterPage();
    const inputFrame = activePage?.querySelector('[data-register-input-frame]');
    const choiceArea = activePage?.querySelector('.register-options, .register-consent-box');
    const target = inputFrame || choiceArea;
    if (!target) return;
    target.classList.remove('is-empty-shake');
    target.offsetWidth;
    target.classList.add('is-empty-shake');
    getActiveRegisterInput()?.focus({ preventScroll: true });
  }

  function setRegisterStep(step, options = {}) {
    if (!registerPages.length) return;
    const nextRegisterStep = Math.min(Math.max(Number(step), 1), registerTotalSteps);
    if (!Number.isFinite(nextRegisterStep)) return;

    const movingBack = nextRegisterStep < registerStep || options.source === 'back';
    registerStep = nextRegisterStep;
    registerScreen?.setAttribute('data-register-direction', movingBack ? 'back' : 'forward');

    registerPages.forEach((page) => {
      const active = Number(page.dataset.registerPage) === registerStep;
      page.classList.toggle('is-active', active);
      page.setAttribute('aria-hidden', String(!active));
    });

    const activePage = getActiveRegisterPage();
    const usesKeyboard = activePage?.dataset.registerKeyboard === 'true';
    registerScreen?.classList.toggle('has-keyboard', usesKeyboard);
    registerActions?.classList.toggle('is-first', registerStep === 1);
    registerActions?.classList.toggle('is-final', registerStep === registerTotalSteps);
    if (registerProgress) registerProgress.style.width = `${(registerStep / registerTotalSteps) * 100}%`;
    setText(registerStepLabel, `Passo ${registerStep} de ${registerTotalSteps}`);

    if (registerNextButton) {
      const label = registerStep === registerTotalSteps ? 'Concluir' : 'Próximo';
      registerNextButton.querySelector('span')?.replaceChildren(document.createTextNode(label));
    }

    activeRegisterInput = activePage?.querySelector('[data-register-input]') || activeRegisterInput;
    if (usesKeyboard && options.source !== 'init') activeRegisterInput?.focus({ preventScroll: true });
    syncRegisterButton();
  }

  function commitRegisterStep() {
    pauseForRegisterInteraction();
    if (!isRegisterStepValid()) {
      showRegisterEmptyState();
      return;
    }
    if (registerStep < registerTotalSteps) {
      setRegisterStep(registerStep + 1, { source: 'next' });
      return;
    }
    if (!registerPages.length) {
      setActiveStep(nextStep(), { source: 'register-next' });
      return;
    }
    setActiveStep(nextStep(), { source: 'register-complete' });
  }

  function previousRegisterStep() {
    pauseForRegisterInteraction();
    if (registerStep > 1) setRegisterStep(registerStep - 1, { source: 'back' });
  }

  function writeRegisterValue(nextValue, cursorPosition = nextValue.length) {
    const input = getActiveRegisterInput();
    if (!input) return;
    input.value = nextValue;
    formatRegisterField(input);
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus({ preventScroll: true });
    const nextCursor = Math.min(cursorPosition, input.value.length);
    input.setSelectionRange(nextCursor, nextCursor);
  }

  function insertRegisterText(text) {
    const input = getActiveRegisterInput();
    if (!input || !text) return;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    const nextValue = `${input.value.slice(0, start)}${text}${input.value.slice(end)}`;
    writeRegisterValue(nextValue.slice(0, input.maxLength || 80), start + text.length);
  }

  function deleteRegisterText() {
    const input = getActiveRegisterInput();
    if (!input) return;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    if (start !== end) {
      writeRegisterValue(`${input.value.slice(0, start)}${input.value.slice(end)}`, start);
      return;
    }
    if (start <= 0) return;
    writeRegisterValue(`${input.value.slice(0, start - 1)}${input.value.slice(end)}`, start - 1);
  }

  function getRegisterLetter(letter) {
    const input = getActiveRegisterInput();
    if (!input) return letter;
    if (input.inputMode === 'numeric') return '';
    const cursor = input.selectionStart ?? input.value.length;
    const beforeCursor = input.value.slice(0, cursor);
    return beforeCursor.length === 0 || /\s$/.test(beforeCursor) ? letter.toUpperCase() : letter;
  }

  function handleRegisterKeyboardClick(event) {
    if (!registerKeyboard || !getActiveRegisterInput()) return;
    const key = event.target.closest('.keyboard-row span, .keyboard-row strong, .keyboard-row i');
    if (!key || !registerKeyboard.contains(key)) return;

    event.preventDefault();
    event.stopPropagation();
    pauseForRegisterInteraction();

    if (key.classList.contains('keyboard-enter')) {
      commitRegisterStep();
      return;
    }
    if (key.classList.contains('keyboard-delete')) {
      deleteRegisterText();
      return;
    }
    if (key.classList.contains('keyboard-space')) {
      insertRegisterText(' ');
      return;
    }
    if (key.classList.contains('keyboard-dot')) {
      insertRegisterText('.');
      return;
    }
    if (key.classList.contains('keyboard-shift') || key.classList.contains('keyboard-emoji') || key.classList.contains('keyboard-globe')) {
      getActiveRegisterInput()?.focus({ preventScroll: true });
      return;
    }

    const value = key.textContent.trim();
    if (/^[a-z]$/i.test(value)) insertRegisterText(getRegisterLetter(value.toLowerCase()));
  }

  registerInputFrames.forEach((frame) => frame.addEventListener('click', () => {
    pauseForRegisterInteraction();
    activeRegisterInput = frame.querySelector('[data-register-input]') || activeRegisterInput;
    activeRegisterInput?.focus({ preventScroll: true });
  }));

  registerInputs.forEach((input) => {
    input.addEventListener('focus', () => {
      activeRegisterInput = input;
      pauseForRegisterInteraction();
    });
    input.addEventListener('input', () => {
      formatRegisterField(input);
      syncRegisterButton();
    });
  });
  registerNextButton?.addEventListener('click', commitRegisterStep);
  registerBackButton?.addEventListener('click', previousRegisterStep);
  registerKeyboard?.addEventListener('click', handleRegisterKeyboardClick);
  registerClearButton?.addEventListener('click', () => {
    pauseForRegisterInteraction();
    registerInputs.forEach((input) => {
      input.value = '';
    });
    section.querySelectorAll('[data-register-choice], [data-register-consent]').forEach((item) => {
      item.classList.remove('is-selected');
      item.setAttribute('aria-pressed', 'false');
    });
    setRegisterStep(1, { source: 'clear' });
  });

  section.querySelectorAll('[data-register-choice]').forEach((choice) => {
    choice.addEventListener('click', () => {
      pauseForRegisterInteraction();
      const group = choice.dataset.registerChoice;
      section.querySelectorAll(`[data-register-choice="${group}"]`).forEach((item) => {
        item.classList.toggle('is-selected', item === choice);
        item.setAttribute('aria-pressed', String(item === choice));
      });
      syncRegisterButton();
    });
  });

  section.querySelector('[data-register-consent]')?.addEventListener('click', (event) => {
    pauseForRegisterInteraction();
    const button = event.currentTarget;
    const selected = !button.classList.contains('is-selected');
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
    syncRegisterButton();
  });

  lesionNextButton?.addEventListener('click', commitLesionStep);
  lesionBackButton?.addEventListener('click', previousLesionStep);
  lesionClearButton?.addEventListener('click', resetLesionFlow);

  lesionAddButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openLesionImageChoice();
    });
  });

  lesionImageCloseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pauseForLesionInteraction();
      closeLesionImageFlow();
    });
  });

  lesionOpenCameraButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pauseForLesionInteraction();
      setLesionImagePanel('camera');
    });
  });

  lesionOpenGalleryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pauseForLesionInteraction();
      setLesionImagePanel('gallery');
    });
  });

  lesionCaptureButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pauseForLesionInteraction();
      setLesionImagePanel('camera-captured');
    });
  });

  lesionUseImageButtons.forEach((button) => {
    button.addEventListener('click', finishLesionImageFlow);
  });

  lesionGalleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      pauseForLesionInteraction();
      const selected = !item.classList.contains('is-selected');
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
  });

  lesionPreviewButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pauseForLesionInteraction();
      if (!lesionHasImages) {
        openLesionImageChoice();
        return;
      }
      setLesionImagePanel('preview');
    });
  });

  lesionDeleteImageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pauseForLesionInteraction();
      setLesionImagePanel('remove');
    });
  });

  lesionRemoveConfirmButtons.forEach((button) => {
    button.addEventListener('click', removeLesionImages);
  });

  lesionRemoveCancelButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pauseForLesionInteraction();
      setLesionImagePanel('preview');
    });
  });

  featureImageTargetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetPanel = button.dataset.featureImageTarget;
      if (!targetPanel) return;
      pauseForFeatureImageInteraction();
      setFeatureImagePanel(targetPanel);
    });
  });

  featureGalleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      pauseForFeatureImageInteraction();
      const selected = !item.classList.contains('is-selected');
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
  });

  lesionLocationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pauseForLesionInteraction();
      const isSelected = button.classList.contains('is-selected');
      lesionLocationButtons.forEach((item) => {
        item.classList.remove('is-selected');
        item.setAttribute('aria-expanded', 'false');
      });
      button.classList.toggle('is-selected', !isSelected);
      button.setAttribute('aria-expanded', String(!isSelected));
    });
  });

  setRegisterStep(1, { source: 'init' });
  setLesionStep(1, { source: 'init' });

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      setActiveStep(Number(card.dataset.step), { source: 'card' });
    });

    card.addEventListener('keydown', (event) => {
      const key = event.key;
      if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(key)) return;

      event.preventDefault();
      let targetIndex = index;
      if (key === 'ArrowRight' || key === 'ArrowDown') targetIndex = (index + 1) % cards.length;
      if (key === 'ArrowLeft' || key === 'ArrowUp') targetIndex = (index - 1 + cards.length) % cards.length;
      if (key === 'Home') targetIndex = 0;
      if (key === 'End') targetIndex = cards.length - 1;

      cards[targetIndex]?.focus();
      setActiveStep(Number(cards[targetIndex]?.dataset.step), { source: 'keyboard' });
    });
  });

  prevButton?.addEventListener('click', () => {
    setActiveStep(previousStep(), { source: 'previous' });
  });

  nextButton?.addEventListener('click', () => {
    setActiveStep(nextStep(), { source: 'next' });
  });

  playButton?.addEventListener('click', () => {
    hoverPaused = false;
    setPlaying(!isPlaying);
  });

  if (swipeSurface) {
    let startX = 0;
    let startY = 0;
    let tracking = false;

    swipeSurface.addEventListener('pointerdown', (event) => {
      if (event.button !== 0) return;
      if (event.target.closest('input, button, .register-keyboard, .lesion-image-flow')) return;
      tracking = true;
      startX = event.clientX;
      startY = event.clientY;
      swipeSurface.setPointerCapture?.(event.pointerId);
    });

    swipeSurface.addEventListener('pointerup', (event) => {
      if (!tracking) return;
      tracking = false;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      if (Math.abs(deltaX) < 46 || Math.abs(deltaX) < Math.abs(deltaY)) return;
      setActiveStep(deltaX < 0 ? nextStep() : previousStep(), { source: 'swipe' });
    });

    swipeSurface.addEventListener('pointercancel', () => {
      tracking = false;
    });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        section.classList.toggle('is-inview', inView);
        updateRunningState(inView);
      },
      { threshold: 0.24, rootMargin: '-8% 0px -8% 0px' }
    );
    observer.observe(section);
  }

  document.addEventListener('dermalert:langchange', (event) => {
    applyFlowLanguage(event.detail?.lang || getCurrentLang());
  });

  section.style.setProperty('--flow-duration', `${FLOW_DURATION}ms`);
  applyFlowLanguage();
  updatePlayButton();
  setActiveStep(firstStep, { source: 'init' });
}
