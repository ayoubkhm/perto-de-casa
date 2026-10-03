'use strict';

const translations = {
  fr: {
    skip:'Aller au contenu', navServices:'Nos services', navHow:'Comment ça marche', navTeam:'Notre équipe', navPricing:'Tarifs', client:'Espace client',
    heroTitle:'<span>Vos démarches</span><span>au Portugal, même</span><span>depuis la France.</span>',
    heroDescription:'Une équipe sur place pour vous accompagner et suivre votre dossier.', describe:'Décrire mon besoin', discover:'Découvrir les services',
    servicesTitle:'Un accompagnement à chaque étape', documents:'Documents', remote:'Démarches à distance', return:'Retour au Portugal',
    documentsDescription:'Faire le point sur les pièces et les formalités de votre dossier.', remoteDescription:'Un relais au Portugal, même lorsque vous êtes à l’étranger.', returnDescription:'Préparer votre retour et organiser les prochaines démarches.',
    howTitle:'Une démarche.\nUn suivi clair.', howDescription:'Vous savez ce qu’il faut préparer, qui vous accompagne et quelle est la prochaine étape.', talk:'Parlons de votre situation',
    stepOneTitle:'Vous nous expliquez votre besoin', stepOneDescription:'Votre situation, votre projet et les difficultés que vous rencontrez.', stepTwoTitle:'Nous définissons l’accompagnement', stepTwoDescription:'Les démarches à prendre en charge, les pièces utiles et le périmètre du service.', stepThreeTitle:'Vous avancez avec un interlocuteur', stepThreeDescription:'Un contact pour suivre votre dossier et comprendre les prochaines étapes.',
    teamLocation:'Un lien entre la France et le Portugal.', teamTitle:'Une présence sur place.\nUne relation de confiance.', teamDescription:'Issue d’une famille portugaise installée en France, Hélèna est revenue au Portugal pour entreprendre. Elle connaît ce lien que l’on garde avec son pays, même lorsque l’on vit ailleurs.', teamDescriptionTwo:'À Lisbonne, elle souhaite vous apporter un accompagnement humain et une présence locale pour vos démarches.',
    footer:'Vos démarches au Portugal, avec quelqu’un sur place.', privacy:'Confidentialité', requestTitle:'Parlons de votre besoin.', requestIntro:'Préparez votre demande pour rassembler les informations utiles à votre premier échange.',
    name:'Votre nom', email:'Votre e-mail', country:'Vous vivez en', subject:'Votre besoin concerne', switzerland:'Suisse', germany:'Allemagne', uk:'Royaume-Uni', other:'Autre pays', unsure:'Je souhaite en discuter',
    message:'Expliquez-nous votre situation', messagePlaceholder:'Quelle démarche souhaitez-vous préparer ?', formNote:'Ne joignez pas de document d’identité ni d’information sensible à ce premier descriptif.', prepare:'Préparer ma demande',
    resultTitle:'Votre demande est prête.', resultIntro:'Téléchargez ce récapitulatif pour votre premier échange. Aucune information n’a été envoyée.', download:'Télécharger ma demande', edit:'Modifier ma demande',
    clientTitle:'Votre dossier, au même endroit.', clientIntro:'Un aperçu du suivi de votre accompagnement.', example:'Exemple de dossier', clientFile:'Documents administratifs', fileReceived:'Demande reçue', fileReceivedText:'Votre besoin est identifié.', fileProgress:'Préparation du dossier', fileProgressText:'Les pièces utiles sont rassemblées.', fileNext:'Prochaine étape', fileNextText:'Un point avec votre interlocuteur.', clientNote:'L’accès personnel aux dossiers sera disponible au lancement du service.',
    privacyText:'Le formulaire prépare un récapitulatif sur votre appareil. Il ne transmet pas vos informations et ne les conserve pas après la fermeture de la page. Ce site n’utilise pas de cookies publicitaires ni d’outil de suivi.',
    close:'Fermer', openMenu:'Ouvrir le menu', closeMenu:'Fermer le menu', imageAlt:'Azulejos portugais bleus et blancs, un carreau jaune, des documents et un vase en céramique.', home:'Perto de Casa, accueil', title:'Perto de Casa — Vos démarches au Portugal', metaDescription:'Vos démarches au Portugal, même depuis la France. Découvrez un accompagnement humain, avec une présence sur place et un suivi clair.',
    pricingPageTitle:'Tarifs — Perto de Casa', pricingMeta:'Découvrez les offres indicatives de Perto de Casa : une démarche, plusieurs démarches ou un projet de retour au Portugal.',
    pricingTitle:'Des tarifs clairs.\nUn accompagnement à votre mesure.', pricingIntro:'Une démarche ponctuelle ou un projet plus large : choisissez le point de départ qui correspond à votre situation.', indicative:'Prix indicatifs, à valider avant le lancement du service.', from:'À partir de', perTask:'par démarche', perFile:'par dossier', perProject:'par projet',
    essentialTitle:'Une démarche', essentialDescription:'Pour un besoin précis, avec des étapes bien identifiées.', essentialOne:'Un besoin administratif identifié', essentialTwo:'Liste des documents utiles', essentialThree:'Point sur les prochaines étapes',
    supportTitle:'Plusieurs démarches', supportDescription:'Pour organiser plusieurs sujets et suivre leur avancement.', supportOne:'Plusieurs démarches regroupées', supportTwo:'Coordination des interlocuteurs', supportThree:'Suivi des étapes de votre dossier',
    returnTitle:'Un projet de retour', returnOfferDescription:'Pour préparer votre retour au Portugal avec un accompagnement adapté.', returnOne:'Point sur votre projet de retour', returnTwo:'Organisation des démarches à prévoir', returnThree:'Accompagnement selon votre situation',
    choose:'Préparer ma demande', priceNote:'Chaque accompagnement fait l’objet d’un devis. Les frais administratifs et les éventuels honoraires de professionnels sont précisés séparément.',
    pricingQuestions:'Quelques précisions sur les offres.', faqOne:'Comment le prix définitif est-il établi ?', faqOneAnswer:'Le devis précise les démarches prises en charge, les pièces utiles et les éventuels besoins de coordination. Les montants présentés sont des indications de travail à confirmer avec Hélèna.',
    faqTwo:'Les frais externes sont-ils compris ?', faqTwoAnswer:'Les frais de l’administration, les traductions et les éventuels honoraires de professionnels sont distingués de l’accompagnement et précisés dans le devis.',
    faqThree:'Puis-je commencer par une seule démarche ?', faqThreeAnswer:'Oui. L’offre « Une démarche » est prévue pour un besoin ponctuel. Vous pourrez ensuite définir un accompagnement plus large si votre situation le demande.',
    unsureTitle:'Vous hésitez sur l’offre ?', unsureDescription:'Décrivez votre situation. Nous pourrons définir le périmètre d’accompagnement qui vous correspond.'
  },
  pt: {
    skip:'Ir para o conteúdo', navServices:'Os nossos serviços', navHow:'Como funciona', navTeam:'A nossa equipa', navPricing:'Preços', client:'Área de cliente',
    heroTitle:'<span>Os seus assuntos</span><span>em Portugal, mesmo</span><span>a viver em França.</span>',
    heroDescription:'Uma equipa em Portugal para o acompanhar e seguir o seu processo.', describe:'Descrever o meu pedido', discover:'Conhecer os serviços',
    servicesTitle:'Acompanhamento em cada etapa', documents:'Documentos', remote:'Assuntos à distância', return:'Regresso a Portugal',
    documentsDescription:'Organizar os documentos e as formalidades do seu processo.', remoteDescription:'Um apoio em Portugal, mesmo quando vive no estrangeiro.', returnDescription:'Preparar o seu regresso e organizar os próximos passos.',
    howTitle:'Um processo.\nUm acompanhamento claro.', howDescription:'Saiba o que preparar, quem o acompanha e qual é o próximo passo.', talk:'Vamos falar da sua situação',
    stepOneTitle:'Explique-nos o que precisa', stepOneDescription:'A sua situação, o seu projeto e as dificuldades que encontra.', stepTwoTitle:'Definimos o acompanhamento', stepTwoDescription:'Os assuntos a tratar, os documentos necessários e o âmbito do serviço.', stepThreeTitle:'Avance com um interlocutor', stepThreeDescription:'Um contacto para acompanhar o seu processo e compreender os próximos passos.',
    teamLocation:'Uma ligação entre França e Portugal.', teamTitle:'Uma presença em Portugal.\nUma relação de confiança.', teamDescription:'De uma família portuguesa instalada em França, Hélèna regressou a Portugal para empreender. Conhece a ligação que se mantém com o nosso país, mesmo quando se vive longe.', teamDescriptionTwo:'Em Lisboa, pretende oferecer-lhe um acompanhamento próximo e uma presença local para tratar dos seus assuntos.',
    footer:'Os seus assuntos em Portugal, com alguém no terreno.', privacy:'Privacidade', requestTitle:'Conte-nos o que precisa.', requestIntro:'Prepare o seu pedido e reúna as informações úteis para uma primeira conversa.',
    name:'O seu nome', email:'O seu e-mail', country:'Vive em', subject:'O seu pedido diz respeito a', switzerland:'Suíça', germany:'Alemanha', uk:'Reino Unido', other:'Outro país', unsure:'Gostaria de conversar primeiro',
    message:'Explique-nos a sua situação', messagePlaceholder:'Que assunto gostaria de preparar?', formNote:'Não inclua documentos de identidade nem informações sensíveis nesta primeira descrição.', prepare:'Preparar o meu pedido',
    resultTitle:'O seu pedido está preparado.', resultIntro:'Descarregue este resumo para a sua primeira conversa. Nenhuma informação foi enviada.', download:'Descarregar o meu pedido', edit:'Alterar o meu pedido',
    clientTitle:'O seu processo, num só lugar.', clientIntro:'Uma apresentação do acompanhamento do seu processo.', example:'Exemplo de processo', clientFile:'Documentos administrativos', fileReceived:'Pedido recebido', fileReceivedText:'A sua necessidade foi identificada.', fileProgress:'Preparação do processo', fileProgressText:'Os documentos necessários estão a ser reunidos.', fileNext:'Próximo passo', fileNextText:'Uma conversa com o seu interlocutor.', clientNote:'O acesso pessoal aos processos estará disponível no lançamento do serviço.',
    privacyText:'O formulário prepara um resumo no seu dispositivo. Não transmite as suas informações e não as conserva depois de fechar a página. Este site não utiliza cookies publicitários nem ferramentas de monitorização.',
    close:'Fechar', openMenu:'Abrir menu', closeMenu:'Fechar menu', imageAlt:'Azulejos portugueses azuis e brancos, um azulejo amarelo, documentos e uma jarra de cerâmica.', home:'Perto de Casa, início', title:'Perto de Casa — Os seus assuntos em Portugal', metaDescription:'Os seus assuntos em Portugal, mesmo a viver em França. Um acompanhamento próximo, com presença local e um seguimento claro.',
    pricingPageTitle:'Preços — Perto de Casa', pricingMeta:'Conheça as ofertas indicativas da Perto de Casa: um assunto, vários assuntos ou um projeto de regresso a Portugal.',
    pricingTitle:'Preços claros.\nAcompanhamento à sua medida.', pricingIntro:'Um assunto pontual ou um projeto mais amplo: escolha o ponto de partida que corresponde à sua situação.', indicative:'Preços indicativos, a validar antes do lançamento do serviço.', from:'A partir de', perTask:'por assunto', perFile:'por processo', perProject:'por projeto',
    essentialTitle:'Um assunto', essentialDescription:'Para uma necessidade concreta, com etapas bem definidas.', essentialOne:'Uma necessidade administrativa identificada', essentialTwo:'Lista dos documentos necessários', essentialThree:'Orientação sobre os próximos passos',
    supportTitle:'Vários assuntos', supportDescription:'Para organizar vários assuntos e acompanhar o seu progresso.', supportOne:'Vários assuntos reunidos', supportTwo:'Coordenação dos interlocutores', supportThree:'Acompanhamento das etapas do processo',
    returnTitle:'Um projeto de regresso', returnOfferDescription:'Para preparar o seu regresso a Portugal com acompanhamento adaptado.', returnOne:'Análise do seu projeto de regresso', returnTwo:'Organização dos assuntos a tratar', returnThree:'Acompanhamento adaptado à sua situação',
    choose:'Preparar o meu pedido', priceNote:'Cada acompanhamento é objeto de um orçamento. As taxas administrativas e os eventuais honorários de profissionais são indicados separadamente.',
    pricingQuestions:'Alguns esclarecimentos sobre as ofertas.', faqOne:'Como é definido o preço final?', faqOneAnswer:'O orçamento especifica os assuntos a tratar, os documentos necessários e as eventuais necessidades de coordenação. Os valores apresentados são indicativos e devem ser confirmados com Hélèna.',
    faqTwo:'Os custos externos estão incluídos?', faqTwoAnswer:'As taxas administrativas, as traduções e os eventuais honorários de profissionais são separados do acompanhamento e especificados no orçamento.',
    faqThree:'Posso começar com um único assunto?', faqThreeAnswer:'Sim. A oferta « Um assunto » destina-se a uma necessidade pontual. Depois, poderá definir um acompanhamento mais amplo se a sua situação o exigir.',
    unsureTitle:'Não sabe qual oferta escolher?', unsureDescription:'Descreva a sua situação. Poderemos definir o acompanhamento adequado às suas necessidades.'
  }
};

let language = 'fr';
let draft = null;
const form = document.querySelector('#request-form');
const entry = document.querySelector('#request-entry');
const result = document.querySelector('#request-result');
const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-navigation');
const dialogs = [...document.querySelectorAll('dialog')];
const isPricing = document.body.dataset.page === 'pricing';

function setLanguage(next) {
  if (!translations[next]) return;
  language = next;
  const t = translations[next];
  document.documentElement.lang = next;
  document.title = isPricing ? t.pricingPageTitle : t.title;
  document.querySelector('meta[name="description"]').content = isPricing ? t.pricingMeta : t.metaDescription;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const text = t[element.dataset.i18n];
    if (text !== undefined) {
      element.textContent = text;
      if (text.includes('\n')) element.style.whiteSpace = 'pre-line';
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    element.innerHTML = t[element.dataset.i18nHtml];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.placeholder = t[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === next));
  });
  document.querySelectorAll('[data-close]').forEach(button => button.setAttribute('aria-label', t.close));
  const heroImage = document.querySelector('.hero-art img');
  if (heroImage) heroImage.alt = t.imageAlt;
  document.querySelector('.site-header .wordmark').setAttribute('aria-label', t.home);
  document.querySelector('.desktop-nav').setAttribute('aria-label', next === 'fr' ? 'Navigation principale' : 'Navegação principal');
  document.querySelector('.language-switch').setAttribute('aria-label', next === 'fr' ? 'Langue du site' : 'Idioma do site');
  menuButton.setAttribute('aria-label', menuButton.getAttribute('aria-expanded') === 'true' ? t.closeMenu : t.openMenu);
  document.querySelectorAll('a[data-preserve-language]').forEach(link => {
    const target = new URL(link.dataset.destination || link.getAttribute('href'), location.href);
    link.dataset.destination = target.pathname + target.hash;
    if (next === 'pt') target.searchParams.set('lang', 'pt');
    else target.searchParams.delete('lang');
    link.setAttribute('href', target.pathname + target.search + target.hash);
  });
  const current = new URL(location.href);
  if (next === 'pt') current.searchParams.set('lang', 'pt');
  else current.searchParams.delete('lang');
  history.replaceState(null, '', current.pathname + current.search + current.hash);
  if (draft) renderSummary();
}

function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', translations[language].openMenu);
}

function openDialog(kind, service) {
  dialogs.forEach(dialog => { if (dialog.open) dialog.close(); });
  closeMenu();
  if (kind === 'request') {
    entry.hidden = false;
    result.hidden = true;
    if (service) form.elements.service.value = service;
  }
  const dialog = document.querySelector('#' + kind + '-dialog');
  if (!dialog) return;
  dialog.showModal();
  document.body.classList.add('modal-open');
  const heading = dialog.querySelector('h2');
  heading.focus({preventScroll:true});
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
document.querySelectorAll('[data-open]').forEach(button => {
  button.addEventListener('click', () => openDialog(button.dataset.open));
});
document.querySelectorAll('[data-service]').forEach(button => {
  button.addEventListener('click', () => openDialog('request', button.dataset.service));
});
document.querySelectorAll('[data-close]').forEach(button => {
  button.addEventListener('click', () => button.closest('dialog').close());
});
dialogs.forEach(dialog => {
  dialog.addEventListener('close', () => {
    if (!dialogs.some(item => item.open)) document.body.classList.remove('modal-open');
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
});
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.setAttribute('aria-label', translations[language][expanded ? 'closeMenu' : 'openMenu']);
  mobileNav.hidden = !expanded;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

function serviceLabel(value) {
  const key = {documents:'documents',remote:'remote',return:'return',other:'unsure'}[value] || 'unsure';
  return translations[language][key];
}

function renderSummary() {
  if (!draft) return;
  document.querySelector('#summary-name').textContent = draft.name;
  document.querySelector('#summary-service').textContent = serviceLabel(draft.service);
  document.querySelector('#summary-message').textContent = draft.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  draft = Object.fromEntries(new FormData(form).entries());
  draft.name = draft.name.trim();
  draft.message = draft.message.trim();
  if (!draft.name || !draft.message) {
    const target = !draft.name ? form.elements.name : form.elements.message;
    target.setCustomValidity(language === 'fr' ? 'Veuillez renseigner ce champ.' : 'Preencha este campo.');
    target.reportValidity();
    target.addEventListener('input', () => target.setCustomValidity(''), {once:true});
    return;
  }
  renderSummary();
  entry.hidden = true;
  result.hidden = false;
  document.querySelector('#request-dialog').scrollTop = 0;
  result.querySelector('h2').focus({preventScroll:true});
});

document.querySelector('#edit-request').addEventListener('click', () => {
  entry.hidden = false;
  result.hidden = true;
  document.querySelector('#request-title').focus({preventScroll:true});
});

document.querySelector('#download-request').addEventListener('click', () => {
  if (!draft) return;
  const t = translations[language];
  const countryLabel = form.elements.country.selectedOptions[0].textContent;
  const content = ['Perto de Casa', t.requestTitle, '', t.name + ': ' + draft.name, t.email + ': ' + draft.email, t.country + ': ' + countryLabel, t.subject + ': ' + serviceLabel(draft.service), '', t.message + ':', draft.message, '', t.resultIntro].join('\n');
  const blob = new Blob([content], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = language === 'fr' ? 'perto-de-casa-ma-demande.txt' : 'perto-de-casa-o-meu-pedido.txt';
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

setLanguage(new URL(location.href).searchParams.get('lang') === 'pt' ? 'pt' : 'fr');
