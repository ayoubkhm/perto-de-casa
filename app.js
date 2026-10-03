'use strict';

const translations = {
  fr: {
    skip:'Aller au contenu', navServices:'Nos services', navHow:'Comment ça marche', navTeam:'Notre équipe', navPricing:'Tarifs', client:'Espace client',
    heroTitle:'<span>Vos démarches</span><span>au Portugal, même</span><span>depuis la France.</span>',
    heroDescription:'Un abonnement pour garder un interlocuteur sur place et suivre vos démarches au fil des mois.', describe:'Décrire mon besoin', discover:'Découvrir les abonnements',
    servicesTitle:'Un accompagnement à chaque étape', documents:'Documents', remote:'Démarches à distance', return:'Retour au Portugal',
    documentsDescription:'Faire le point sur les pièces et les formalités de votre dossier.', remoteDescription:'Un relais au Portugal, même lorsque vous êtes à l’étranger.', returnDescription:'Préparer votre retour et organiser les prochaines démarches.',
    howTitle:'Un abonnement.\nUn suivi clair.', howDescription:'Vous savez ce qu’il faut préparer, qui vous accompagne et quelle est la prochaine étape.', talk:'Parlons de votre situation',
    stepOneTitle:'Vous nous expliquez votre besoin', stepOneDescription:'Votre situation, votre projet et les difficultés que vous rencontrez.', stepTwoTitle:'Vous choisissez votre formule', stepTwoDescription:'Un niveau d’aide et un volume de temps mensuel adaptés à votre situation.', stepThreeTitle:'Vous avancez avec un interlocuteur', stepThreeDescription:'Un contact pour suivre votre dossier et comprendre les prochaines étapes.',
    teamLocation:'Un lien entre la France et le Portugal.', teamTitle:'Une présence sur place.\nUne relation de confiance.', teamDescription:'Issue d’une famille portugaise installée en France, Hélèna est revenue au Portugal pour entreprendre. Elle connaît ce lien que l’on garde avec son pays, même lorsque l’on vit ailleurs.', teamDescriptionTwo:'À Lisbonne, elle souhaite vous apporter un accompagnement humain et une présence locale pour vos démarches.',
    footer:'Vos démarches au Portugal, avec quelqu’un sur place.', privacy:'Confidentialité', requestTitle:'Parlons de votre besoin.', requestIntro:'Préparez votre demande pour rassembler les informations utiles à votre premier échange.',
    name:'Votre nom', email:'Votre e-mail', country:'Vous vivez en', subject:'Votre besoin concerne', switzerland:'Suisse', germany:'Allemagne', uk:'Royaume-Uni', other:'Autre pays', unsure:'Je souhaite en discuter',
    message:'Expliquez-nous votre situation', messagePlaceholder:'Quelle démarche souhaitez-vous préparer ?', formNote:'Ne joignez pas de document d’identité ni d’information sensible à ce premier descriptif.', prepare:'Préparer ma demande',
    resultTitle:'Votre demande est prête.', resultIntro:'Téléchargez ce récapitulatif pour votre premier échange. Aucune information n’a été envoyée.', download:'Télécharger ma demande', edit:'Modifier ma demande',
    clientTitle:'Votre dossier, au même endroit.', clientIntro:'Un aperçu du suivi de votre accompagnement.', example:'Exemple de dossier', clientFile:'Documents administratifs', fileReceived:'Demande reçue', fileReceivedText:'Votre besoin est identifié.', fileProgress:'Préparation du dossier', fileProgressText:'Les pièces utiles sont rassemblées.', fileNext:'Prochaine étape', fileNextText:'Un point avec votre interlocuteur.', clientNote:'L’accès personnel aux dossiers sera disponible au lancement du service.',
    privacyText:'Le formulaire prépare un récapitulatif sur votre appareil. Il ne transmet pas vos informations et ne les conserve pas après la fermeture de la page. Ce site n’utilise pas de cookies publicitaires ni d’outil de suivi.',
    close:'Fermer', openMenu:'Ouvrir le menu', closeMenu:'Fermer le menu', imageAlt:'Azulejos portugais bleus et blancs, un carreau jaune, des documents et un vase en céramique.', home:'Perto de Casa, accueil', title:'Perto de Casa — Vos démarches au Portugal', metaDescription:'Vos démarches au Portugal, même depuis la France. Découvrez un accompagnement humain, avec une présence sur place et un suivi clair.',
    pricingPageTitle:'Tarifs — Perto de Casa', pricingMeta:'Trois abonnements indicatifs pour garder un interlocuteur au Portugal : Essentiel à 19 €, Accompagnement à 49 € et Sérénité à 99 € par mois.',
    pricingTitle:'Un abonnement.\nQuelqu’un sur place, toute l’année.', pricingIntro:'Gardez un interlocuteur de confiance au Portugal. Choisissez le niveau d’aide qui vous convient pour vos questions, vos documents et vos démarches à distance.', subscriptionTerms:'Abonnements mensuels, sans engagement de durée.', indicative:'Prix et prestations indicatifs, à valider avec Hélèna avant le lancement du service.', perMonth:'par mois',
    essentialTitle:'Essentiel', essentialDescription:'Pour garder un contact au Portugal et savoir par où commencer.', essentialAllowance:'20 min d’aide incluses / mois', essentialOne:'Un interlocuteur dédié au Portugal', essentialTwo:'Réponses à vos questions et orientation', essentialThree:'Rappels des échéances identifiées', essentialFour:'Suivi de vos dossiers dans l’espace client',
    supportTitle:'Accompagnement', supportDescription:'Pour déléguer des démarches simples et suivre leur avancement.', supportAllowance:'1 h d’aide incluse / mois', supportOne:'Interlocuteur dédié, rappels et espace client', supportTwo:'Aide à la préparation de vos documents', supportThree:'Appels et prise de rendez-vous à distance', supportFour:'Suivi des démarches simples confiées',
    serenityTitle:'Sérénité', serenityDescription:'Pour plusieurs sujets à gérer, avec un suivi plus régulier.', serenityAllowance:'2 h d’aide incluses / mois', serenityOne:'Les services de la formule Accompagnement', serenityTwo:'Traitement prioritaire de vos demandes', serenityThree:'Coordination de plusieurs interlocuteurs', serenityFour:'Un point mensuel sur vos démarches',
    chooseEssential:'Choisir Essentiel', chooseSupport:'Choisir Accompagnement', chooseSerenity:'Choisir Sérénité', plan:'Formule envisagée', noPlan:'À définir ensemble', priceNote:'Chaque formule inclut un volume total de temps par mois, échanges et interventions compris. Les heures supplémentaires, les dossiers complexes et les déplacements font l’objet d’un devis accepté avant intervention. Les frais externes sont facturés séparément.',
    pricingQuestions:'Votre abonnement, en clair.', faqOne:'Comment fonctionne le temps inclus ?', faqOneAnswer:'Le temps consacré à vos échanges, à la préparation de documents et aux interventions est déduit du volume mensuel de votre formule. Le point mensuel de Sérénité est compris dans ses 2 heures. Le temps inutilisé n’est pas reporté. Toute intervention au-delà du forfait nécessite votre accord sur un devis.',
    faqTwo:'Les frais externes sont-ils compris ?', faqTwoAnswer:'Les frais de l’administration, les traductions et les éventuels honoraires de professionnels ne sont pas inclus dans l’abonnement. Ils vous sont précisés avant toute dépense.',
    faqThree:'Puis-je changer de formule ou arrêter ?', faqThreeAnswer:'Les formules sont proposées sans engagement de durée. Un changement ou une résiliation prend effet à la fin du mois d’abonnement en cours. Ces modalités restent à valider avec Hélèna avant le lancement.',
    unsureTitle:'Vous hésitez sur l’offre ?', unsureDescription:'Décrivez votre situation. Nous pourrons définir le périmètre d’accompagnement qui vous correspond.'
  },
  pt: {
    skip:'Ir para o conteúdo', navServices:'Os nossos serviços', navHow:'Como funciona', navTeam:'A nossa equipa', navPricing:'Preços', client:'Área de cliente',
    heroTitle:'<span>Os seus assuntos</span><span>em Portugal, mesmo</span><span>a viver em França.</span>',
    heroDescription:'Uma subscrição para ter um interlocutor em Portugal e acompanhar os seus assuntos ao longo dos meses.', describe:'Descrever o meu pedido', discover:'Conhecer as subscrições',
    servicesTitle:'Acompanhamento em cada etapa', documents:'Documentos', remote:'Assuntos à distância', return:'Regresso a Portugal',
    documentsDescription:'Organizar os documentos e as formalidades do seu processo.', remoteDescription:'Um apoio em Portugal, mesmo quando vive no estrangeiro.', returnDescription:'Preparar o seu regresso e organizar os próximos passos.',
    howTitle:'Uma subscrição.\nUm acompanhamento claro.', howDescription:'Saiba o que preparar, quem o acompanha e qual é o próximo passo.', talk:'Vamos falar da sua situação',
    stepOneTitle:'Explique-nos o que precisa', stepOneDescription:'A sua situação, o seu projeto e as dificuldades que encontra.', stepTwoTitle:'Escolha o seu plano', stepTwoDescription:'Um nível de apoio e um volume de tempo mensal adaptados à sua situação.', stepThreeTitle:'Avance com um interlocutor', stepThreeDescription:'Um contacto para acompanhar o seu processo e compreender os próximos passos.',
    teamLocation:'Uma ligação entre França e Portugal.', teamTitle:'Uma presença em Portugal.\nUma relação de confiança.', teamDescription:'De uma família portuguesa instalada em França, Hélèna regressou a Portugal para empreender. Conhece a ligação que se mantém com o nosso país, mesmo quando se vive longe.', teamDescriptionTwo:'Em Lisboa, pretende oferecer-lhe um acompanhamento próximo e uma presença local para tratar dos seus assuntos.',
    footer:'Os seus assuntos em Portugal, com alguém no terreno.', privacy:'Privacidade', requestTitle:'Conte-nos o que precisa.', requestIntro:'Prepare o seu pedido e reúna as informações úteis para uma primeira conversa.',
    name:'O seu nome', email:'O seu e-mail', country:'Vive em', subject:'O seu pedido diz respeito a', switzerland:'Suíça', germany:'Alemanha', uk:'Reino Unido', other:'Outro país', unsure:'Gostaria de conversar primeiro',
    message:'Explique-nos a sua situação', messagePlaceholder:'Que assunto gostaria de preparar?', formNote:'Não inclua documentos de identidade nem informações sensíveis nesta primeira descrição.', prepare:'Preparar o meu pedido',
    resultTitle:'O seu pedido está preparado.', resultIntro:'Descarregue este resumo para a sua primeira conversa. Nenhuma informação foi enviada.', download:'Descarregar o meu pedido', edit:'Alterar o meu pedido',
    clientTitle:'O seu processo, num só lugar.', clientIntro:'Uma apresentação do acompanhamento do seu processo.', example:'Exemplo de processo', clientFile:'Documentos administrativos', fileReceived:'Pedido recebido', fileReceivedText:'A sua necessidade foi identificada.', fileProgress:'Preparação do processo', fileProgressText:'Os documentos necessários estão a ser reunidos.', fileNext:'Próximo passo', fileNextText:'Uma conversa com o seu interlocutor.', clientNote:'O acesso pessoal aos processos estará disponível no lançamento do serviço.',
    privacyText:'O formulário prepara um resumo no seu dispositivo. Não transmite as suas informações e não as conserva depois de fechar a página. Este site não utiliza cookies publicitários nem ferramentas de monitorização.',
    close:'Fechar', openMenu:'Abrir menu', closeMenu:'Fechar menu', imageAlt:'Azulejos portugueses azuis e brancos, um azulejo amarelo, documentos e uma jarra de cerâmica.', home:'Perto de Casa, início', title:'Perto de Casa — Os seus assuntos em Portugal', metaDescription:'Os seus assuntos em Portugal, mesmo a viver em França. Um acompanhamento próximo, com presença local e um seguimento claro.',
    pricingPageTitle:'Preços — Perto de Casa', pricingMeta:'Três subscrições indicativas para ter um interlocutor em Portugal: Essencial a 19 €, Acompanhamento a 49 € e Serenidade a 99 € por mês.',
    pricingTitle:'Uma subscrição.\nAlguém em Portugal, todo o ano.', pricingIntro:'Tenha um interlocutor de confiança em Portugal. Escolha o nível de apoio para as suas perguntas, os seus documentos e os assuntos a tratar à distância.', subscriptionTerms:'Subscrições mensais, sem período mínimo de permanência.', indicative:'Preços e serviços indicativos, a validar com Hélèna antes do lançamento do serviço.', perMonth:'por mês',
    essentialTitle:'Essencial', essentialDescription:'Para manter um contacto em Portugal e saber por onde começar.', essentialAllowance:'20 min de apoio incluídos / mês', essentialOne:'Um interlocutor dedicado em Portugal', essentialTwo:'Respostas às suas perguntas e orientação', essentialThree:'Lembretes dos prazos identificados', essentialFour:'Acompanhamento dos processos na área de cliente',
    supportTitle:'Acompanhamento', supportDescription:'Para delegar assuntos simples e acompanhar o seu progresso.', supportAllowance:'1 h de apoio incluída / mês', supportOne:'Interlocutor dedicado, lembretes e área de cliente', supportTwo:'Apoio na preparação dos seus documentos', supportThree:'Chamadas e marcações à distância', supportFour:'Acompanhamento dos assuntos simples confiados',
    serenityTitle:'Serenidade', serenityDescription:'Para gerir vários assuntos, com acompanhamento mais regular.', serenityAllowance:'2 h de apoio incluídas / mês', serenityOne:'Os serviços do plano Acompanhamento', serenityTwo:'Tratamento prioritário dos seus pedidos', serenityThree:'Coordenação de vários interlocutores', serenityFour:'Um ponto de situação mensal',
    chooseEssential:'Escolher Essencial', chooseSupport:'Escolher Acompanhamento', chooseSerenity:'Escolher Serenidade', plan:'Plano pretendido', noPlan:'A definir em conjunto', priceNote:'Cada plano inclui um volume total de tempo por mês, incluindo conversas e intervenções. As horas adicionais, os processos complexos e as deslocações exigem um orçamento aceite antes da intervenção. Os custos externos são cobrados separadamente.',
    pricingQuestions:'A sua subscrição, sem dúvidas.', faqOne:'Como funciona o tempo incluído?', faqOneAnswer:'O tempo dedicado às conversas, à preparação de documentos e às intervenções é descontado do volume mensal do seu plano. O ponto de situação mensal de Serenidade está incluído nas suas 2 horas. O tempo não utilizado não transita para o mês seguinte. Qualquer intervenção além do plano exige a sua aceitação de um orçamento.',
    faqTwo:'Os custos externos estão incluídos?', faqTwoAnswer:'As taxas administrativas, as traduções e os eventuais honorários de profissionais não estão incluídos na subscrição. São indicados antes de qualquer despesa.',
    faqThree:'Posso mudar de plano ou cancelar?', faqThreeAnswer:'Os planos são propostos sem período mínimo de permanência. Uma alteração ou um cancelamento entra em vigor no fim do mês de subscrição em curso. Estas condições devem ser validadas com Hélèna antes do lançamento.',
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

function openDialog(kind, service, plan) {
  dialogs.forEach(dialog => { if (dialog.open) dialog.close(); });
  closeMenu();
  if (kind === 'request') {
    entry.hidden = false;
    result.hidden = true;
    if (service) form.elements.service.value = service;
    if (plan) form.elements.plan.value = plan;
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
document.querySelectorAll('[data-plan]').forEach(button => {
  button.addEventListener('click', () => openDialog('request', 'other', button.dataset.plan));
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

function planLabel(value) {
  const key = {essential:'essentialTitle',support:'supportTitle',serenity:'serenityTitle'}[value] || 'noPlan';
  return translations[language][key];
}

function renderSummary() {
  if (!draft) return;
  document.querySelector('#summary-name').textContent = draft.name;
  document.querySelector('#summary-service').textContent = serviceLabel(draft.service);
  document.querySelector('#summary-plan').textContent = planLabel(draft.plan);
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
  const content = ['Perto de Casa', t.requestTitle, '', t.name + ': ' + draft.name, t.email + ': ' + draft.email, t.country + ': ' + countryLabel, t.subject + ': ' + serviceLabel(draft.service), t.plan + ': ' + planLabel(draft.plan), '', t.message + ':', draft.message, '', t.resultIntro].join('\n');
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
