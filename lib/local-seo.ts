// Pages SEO locales (par ville) et sectorielles (par métier).
//
// Chaque entrée porte un contenu RÉELLEMENT unique. Des pages quasi
// identiques avec juste le nom changé sont traitées par Google comme des
// « pages satellites » : découvertes, échantillonnées, puis déprioritisées
// au crawl (statut « Détectée, actuellement non indexée »). Mesure faite sur
// la première version : 56% des phrases étaient communes à toutes les pages
// villes, pour ~200 mots uniques par page seulement.
//
// D'où la structure ci-dessous : en plus de l'intro et de l'angle, chaque
// ville porte son propre contexte économique local, ses secteurs
// caractéristiques et sa FAQ, et chaque métier ses propres fonctionnalités
// de site. Le champ `nearby` maille les villes entre elles : sans lui, le
// graphe de liens est plat (hub -> page, sans lien latéral), ce qui limite
// aussi la priorité de crawl.

export interface LocalFAQ {
  question: string
  answer: string
}

export interface LocalFocus {
  title: string
  description: string
}

export interface CityPage {
  slug: string
  /** Nom affiché, ex. « Nantes ». */
  name: string
  /** Titre H1 complet, ex. « Création de site internet à Nantes ». */
  h1: string
  /** Balise <title> (le template ajoute « | Raythan Web Design »). */
  title: string
  metaDescription: string
  /** Accroche unique, 2 à 3 phrases, en tête de page (réponse autonome). */
  intro: string
  /** Paragraphe d'angle local, spécifique à la ville. */
  angle: string
  /** Contexte économique local, propre à la commune. */
  context: string
  /** Secteurs caractéristiques de la commune et ce que le site leur apporte. */
  focus: LocalFocus[]
  /** Slugs d'autres communes couvertes, pour le maillage interne. */
  nearby: string[]
  faq: LocalFAQ[]
  /**
   * Étude de cas montrée en preuve sur la page. Renseignée uniquement quand
   * le projet est vraiment de cette commune : un exemple approximatif ne
   * prouve rien.
   */
  caseStudySlug?: string
  /** Phrase qui introduit l'exemple. */
  caseStudyLead?: string
}

export const CITIES: CityPage[] = [
  {
    slug: 'nantes',
    name: 'Nantes',
    h1: 'Création de site internet à Nantes',
    title: 'Création de site internet à Nantes',
    metaDescription:
      'Agence web à Nantes : création de site internet sur-mesure, rapide et référencé. SEO technique inclus, rendu lisible par Google et les IA. Devis gratuit.',
    intro:
      "Capitale de la Loire-Atlantique, Nantes concentre une densité rare de commerces, d'artisans et de jeunes entreprises. Y être visible sur Google demande un site rapide, clair et pensé pour la recherche locale, pas une vitrine figée. On développe ce type de site à Nantes, avec le référencement technique inclus dès la livraison.",
    angle:
      "Du restaurant de quartier au cabinet indépendant, chaque activité nantaise a une clientèle et une concurrence qui lui sont propres. On construit un site qui colle à la vôtre : structure claire, contenu organisé, données structurées, pour être trouvé par vos clients comme par les assistants IA qui recommandent désormais des commerces.",
    context:
      "La concurrence en ligne n'est pas la même selon l'endroit où vous exercez. Un commerce du centre, entre Bouffay et Graslin, se bat sur des requêtes saturées où la fiche Google et les avis pèsent lourd. Une activité installée à Doulon, Chantenay ou dans les Hauts-Pavés joue davantage sur la recherche de proximité, où un site clair et bien structuré suffit souvent à passer devant. On adapte la structure du site à ce contexte plutôt que d'appliquer la même recette partout.",
    focus: [
      {
        title: 'Restaurants et bars',
        description:
          "Carte à jour, photos qui donnent envie, réservation accessible en deux clics et cohérence avec la fiche Google. Le choix se fait sur mobile, souvent à quelques minutes du repas.",
      },
      {
        title: 'Indépendants et professions libérales',
        description:
          "Un site sobre qui installe la crédibilité, explique la prestation sans jargon et rend la prise de contact évidente. C'est souvent le premier filtre avant l'appel.",
      },
      {
        title: 'Startups et jeunes entreprises',
        description:
          "Une base technique solide qui peut évoluer : ajout de pages, connexion à vos outils, automatisations. Pas un site à refaire dans six mois.",
      },
    ],
    nearby: ['saint-herblain', 'reze', 'orvault', 'saint-sebastien-sur-loire'],
    faq: [
      {
        question: 'Vous travaillez avec des entreprises basées à Nantes ?',
        answer:
          "Oui, c'est notre zone principale. On peut se voir sur place ou avancer à distance par appel vidéo, selon ce qui vous arrange.",
      },
      {
        question: 'Le site sera-t-il trouvable sur « à Nantes » dans Google ?',
        answer:
          "Le SEO technique est inclus (structure, metadata, données locales), ce qui rend le site éligible. Le classement dépend ensuite de votre fiche Google Business, de vos avis et du temps. Personne ne peut le garantir, on met en place ce qui compte.",
      },
      {
        question: 'La concurrence est forte à Nantes, un site suffit-il ?',
        answer:
          "Seul, non. Un site bien construit vous rend éligible et crédible, mais sur un marché dense il travaille en binôme avec votre fiche Google Business et vos avis clients. On aligne les deux pour qu'ils se renforcent.",
      },
    ],
    caseStudySlug: 'anas-pizza',
    caseStudyLead:
      "Un site livré à Nantes, en ligne aujourd'hui.",
  },
  {
    slug: 'saint-herblain',
    name: 'Saint-Herblain',
    h1: 'Création de site internet à Saint-Herblain',
    title: 'Création de site internet à Saint-Herblain',
    metaDescription:
      'Création de site internet à Saint-Herblain : sites sur-mesure pour commerces et indépendants, SEO inclus, mobile-first. Agence web locale. Devis gratuit.',
    intro:
      "Deuxième ville de l'agglomération nantaise, Saint-Herblain mêle grandes zones commerciales et tissu d'indépendants. Pour un professionnel herblinois, un site bien référencé fait la différence face à des concurrents parfois installés de longue date. On conçoit des sites qui donnent cette longueur d'avance.",
    angle:
      "Entre Atlantis et les quartiers résidentiels, la clientèle se déplace et compare en ligne avant de choisir. Un site rapide, lisible et bien structuré vous met dans la course au moment où la décision se prend, sur mobile la plupart du temps.",
    context:
      "Saint-Herblain a une particularité : la zone d'Atlantis attire une clientèle venue de toute l'agglomération, pendant que les quartiers comme Bellevue, Preux ou la Bernardière vivent sur une clientèle de proximité. Ces deux publics ne cherchent pas de la même façon. L'un compare et se déplace loin, l'autre veut le plus proche et le plus simple. On construit le site en fonction de celui que vous visez vraiment.",
    focus: [
      {
        title: 'Commerces et services de proximité',
        description:
          "Horaires, accès, stationnement, prestations : les informations que vos clients cherchent avant de se déplacer, immédiatement visibles sans avoir à fouiller.",
      },
      {
        title: 'Artisans et prestataires',
        description:
          "Vos réalisations en avant, votre zone d'intervention claire, et un formulaire de devis qui ne décourage personne. La preuve du travail fait avant l'argumentaire.",
      },
      {
        title: 'Entreprises et bureaux',
        description:
          "Une présentation nette de l'offre, orientée prise de contact, avec la possibilité de connecter le formulaire à vos outils internes.",
      },
    ],
    nearby: ['nantes', 'orvault', 'coueron', 'bouguenais'],
    faq: [
      {
        question: 'Vous intervenez à Saint-Herblain et autour ?',
        answer:
          "Oui, Saint-Herblain fait partie de notre zone directe autour de Nantes. Appel vidéo ou rencontre selon votre préférence.",
      },
      {
        question: "Mon activité est près d'Atlantis, ça change quelque chose ?",
        answer:
          "Oui. Une clientèle qui vient de loin compare davantage avant de se déplacer, donc le site doit rassurer et différencier plus qu'un simple site de proximité. On adapte le contenu à ça.",
      },
    ],
    caseStudySlug: 'mk-boulangeries',
    caseStudyLead:
      "Un site livré à Saint-Herblain, en ligne aujourd'hui.",
  },
  {
    slug: 'reze',
    name: 'Rezé',
    h1: 'Création de site internet à Rezé',
    title: 'Création de site internet à Rezé',
    metaDescription:
      'Création de site internet à Rezé : sites vitrines et e-commerce pour commerces de proximité et artisans, SEO inclus. Agence web près de Nantes. Devis gratuit.',
    intro:
      "Au sud de la Loire, Rezé vit au rythme de ses commerces de proximité et de ses artisans. Un site clair, rapide et trouvable sur Google leur permet d'être choisis avant même le premier appel. C'est ce qu'on met en place pour les professionnels rezéens.",
    angle:
      "Beaucoup d'activités locales à Rezé n'ont pas de site, ou un site ancien qui ne convertit plus. Repartir sur une base propre, mobile-first et référencée, c'est souvent le levier le plus rentable pour capter la clientèle du secteur.",
    context:
      "Rezé a plusieurs visages qui n'appellent pas la même stratégie. Trentemoult attire une clientèle de passage, souvent touristique, qui découvre et décide sur place avec son téléphone. Pont-Rousseau et le centre fonctionnent sur des habitués et du bouche-à-oreille, où le site sert surtout à confirmer et rassurer. Savoir lequel des deux vous concerne change ce qu'on met en avant sur la page d'accueil.",
    focus: [
      {
        title: 'Commerces de bouche et restauration',
        description:
          "Ce que vous proposez, en photo et à jour, avec horaires et accès évidents. Le réflexe du client, c'est de vérifier sur son téléphone avant de venir.",
      },
      {
        title: 'Artisans du bâtiment',
        description:
          "Photos de chantiers, métiers couverts, secteur d'intervention et demande de devis simple. De quoi trier les demandes sérieuses en amont.",
      },
      {
        title: 'Services aux particuliers',
        description:
          "Prestations et tarifs présentés clairement, contact direct, et une structure que Google comprend pour la recherche locale.",
      },
    ],
    nearby: ['nantes', 'bouguenais', 'vertou', 'saint-sebastien-sur-loire'],
    faq: [
      {
        question: "Un site pour un commerce de Rezé, c'est utile même sans vente en ligne ?",
        answer:
          "Oui. Beaucoup de clients cherchent horaires, adresse et avis avant de se déplacer. Un site clair rassure et vous fait choisir, même sans boutique en ligne.",
      },
      {
        question: "J'ai déjà un vieux site, faut-il repartir de zéro ?",
        answer:
          "Pas systématiquement. On regarde d'abord la base technique : si le rendu serveur et la structure tiennent, on rénove. Sinon, reconstruire coûte souvent moins cher que rafistoler.",
      },
    ],
  },
  {
    slug: 'saint-sebastien-sur-loire',
    name: 'Saint-Sébastien-sur-Loire',
    h1: 'Création de site internet à Saint-Sébastien-sur-Loire',
    title: 'Création de site internet à Saint-Sébastien-sur-Loire',
    metaDescription:
      'Création de site internet à Saint-Sébastien-sur-Loire : sites sur-mesure pour indépendants et commerces, SEO technique inclus. Agence web locale. Devis gratuit.',
    intro:
      "Ville résidentielle de l'agglomération, Saint-Sébastien-sur-Loire compte une clientèle exigeante et connectée. Un site soigné, rapide et bien référencé y installe tout de suite une image sérieuse. On développe ce niveau de finition pour les pros du secteur.",
    angle:
      "Cabinets, praticiens, commerces et services de proximité : la première impression se joue en ligne. Un site propre et lisible, côté visiteur comme côté moteurs de recherche, crédibilise votre activité dès la première visite.",
    context:
      "Le profil de la commune est très résidentiel, avec une population qui cherche des prestataires près de chez elle et compare peu au-delà. Ça change la priorité : moins de bataille sur des requêtes larges, davantage d'enjeu sur la clarté et la confiance. Un site qui répond vite aux questions concrètes, horaires, prestations, tarifs indicatifs, prise de rendez-vous, convertit mieux ici qu'un site vitrine purement esthétique.",
    focus: [
      {
        title: 'Santé et bien-être',
        description:
          "Présentation de la pratique, informations pratiques et prise de rendez-vous intégrée. Le patient veut comprendre et réserver, sans appeler.",
      },
      {
        title: 'Commerces de quartier',
        description:
          "Horaires fiables, produits mis en avant, accès facile à trouver. Cohérent avec votre fiche Google pour ne jamais afficher deux informations différentes.",
      },
      {
        title: 'Services à domicile',
        description:
          "Zone couverte, prestations détaillées et demande de devis en quelques champs. Moins de friction, plus de contacts qualifiés.",
      },
    ],
    nearby: ['nantes', 'reze', 'vertou'],
    faq: [
      {
        question: 'Combien de temps pour livrer un site sur Saint-Sébastien ?',
        answer:
          "5 à 15 jours en général, du premier appel à la mise en ligne, selon la taille du projet et la rapidité de vos retours.",
      },
      {
        question: 'Peut-on intégrer la prise de rendez-vous en ligne ?',
        answer:
          "Oui, on connecte votre outil de réservation existant ou on en met un en place. Le rendez-vous se prend depuis le site, sans appel.",
      },
    ],
    caseStudySlug: 'alex-moret',
    caseStudyLead:
      "Une maquette faite pour un atelier de Saint-Sébastien-sur-Loire.",
  },
  {
    slug: 'vertou',
    name: 'Vertou',
    h1: 'Création de site internet à Vertou',
    title: 'Création de site internet à Vertou',
    metaDescription:
      'Création de site internet à Vertou : sites sur-mesure pour artisans, vignerons et commerces, SEO inclus, mobile-first. Agence web près de Nantes. Devis gratuit.',
    intro:
      "Aux portes du vignoble nantais, Vertou réunit artisans, producteurs et commerces attachés au local. Un site qui raconte cette proximité et se trouve facilement sur Google renforce la relation avec la clientèle. C'est ce qu'on construit pour les activités vertaviennes.",
    angle:
      "Un domaine, une cave, un artisan : le web ne remplace pas le contact direct, il l'amorce. Un site clair et référencé amène des visiteurs déjà intéressés, qui vous trouvent au bon moment plutôt que par hasard.",
    context:
      "Vertou a une double clientèle : les habitants de la commune et de l'agglomération, et les visiteurs attirés par la Sèvre et le vignoble. Le deuxième public cherche avant de venir, souvent depuis l'extérieur du département, parfois plusieurs jours à l'avance. Ça justifie un contenu qui donne envie et qui répond aux questions pratiques, horaires d'ouverture, accès, visite ou dégustation possible, avant même le premier contact.",
    focus: [
      {
        title: 'Vignerons et producteurs',
        description:
          "Présentation du domaine, gamme, conditions de visite et de vente directe. Les visiteurs préparent en ligne, la page doit répondre avant l'appel.",
      },
      {
        title: 'Artisans et métiers manuels',
        description:
          "Le travail montré en photo, les prestations expliquées simplement, la demande de devis en accès direct depuis chaque page.",
      },
      {
        title: 'Commerces et loisirs',
        description:
          "Informations pratiques toujours à jour et mise en avant de ce qui vous distingue, pour capter aussi la clientèle de passage.",
      },
    ],
    nearby: ['reze', 'saint-sebastien-sur-loire', 'nantes'],
    faq: [
      {
        question: 'Vous couvrez Vertou et le vignoble autour ?',
        answer:
          "Oui, Vertou et sa périphérie font partie de notre zone autour de Nantes. On avance par appel vidéo ou en se rencontrant.",
      },
      {
        question: 'Peut-on vendre en ligne depuis le site ?',
        answer:
          "Oui, on peut intégrer une boutique si le volume le justifie. Pour beaucoup de producteurs, une page claire sur la vente directe et les horaires suffit et coûte moins cher à faire vivre.",
      },
    ],
  },
  {
    slug: 'carquefou',
    name: 'Carquefou',
    h1: 'Création de site internet à Carquefou',
    title: 'Création de site internet à Carquefou',
    metaDescription:
      'Création de site internet à Carquefou : sites sur-mesure pour PME, artisans et commerces, SEO technique inclus. Agence web près de Nantes. Devis gratuit.',
    intro:
      "Avec ses parcs d'activités et son tissu de PME, Carquefou a des besoins web souvent plus B2B qu'ailleurs. Un site qui inspire confiance et se référence bien y génère des contacts qualifiés. On conçoit ce type de site pour les entreprises carquefoliennes.",
    angle:
      "Pour une PME ou un prestataire, le site est un commercial qui travaille en continu : il présente l'offre, rassure et capte les demandes. Encore faut-il qu'il soit rapide, lisible et trouvable, c'est le socle qu'on met en place.",
    context:
      "Carquefou est l'une des communes de l'agglomération où l'activité économique pèse le plus, avec des zones comme la Fleuriaye qui concentrent bureaux et entreprises. La conséquence pour le web : beaucoup de recherches ne viennent pas de particuliers mais d'autres professionnels, qui évaluent un prestataire avant de le contacter. Le cycle est plus long, le site doit donc démontrer le sérieux et la compétence, pas seulement afficher des coordonnées.",
    focus: [
      {
        title: 'PME et prestataires B2B',
        description:
          "Offre structurée, références, et parcours qui mène à la prise de contact. Le site travaille pendant que vos commerciaux font autre chose.",
      },
      {
        title: 'Artisans et techniciens',
        description:
          "Compétences, interventions et zone couverte présentées clairement, avec les preuves du travail réalisé.",
      },
      {
        title: 'Automatisation des demandes',
        description:
          "Formulaire connecté à vos outils (CRM, tableur, relances) pour que chaque demande atterrisse au bon endroit sans ressaisie.",
      },
    ],
    nearby: ['nantes', 'la-chapelle-sur-erdre'],
    faq: [
      {
        question: 'Vous faites des sites pour les PME de Carquefou ?',
        answer:
          "Oui, du site vitrine au site plus orienté génération de contacts. On adapte la structure à votre cycle de vente, pas à un modèle générique.",
      },
      {
        question: 'Peut-on connecter le site à nos outils métier ?',
        answer:
          "Oui. On met en place des automatisations (Make.com, outils IA) pour relier le formulaire à votre CRM ou vos process internes, sans double saisie.",
      },
    ],
  },
  {
    slug: 'orvault',
    name: 'Orvault',
    h1: 'Création de site internet à Orvault',
    title: 'Création de site internet à Orvault',
    metaDescription:
      'Création de site internet à Orvault : sites sur-mesure pour commerces, indépendants et PME, SEO inclus. Agence web près de Nantes. Devis gratuit.',
    intro:
      "Au nord-ouest de Nantes, Orvault combine zones résidentielles et pôles d'activité. Ses professionnels ont tout à gagner à être visibles en ligne au moment où un habitant cherche un service près de chez lui. On développe des sites pensés pour cette recherche locale.",
    angle:
      "La plupart des recherches locales se font sur mobile, souvent juste avant de choisir. Un site rapide, clair et bien structuré vous place dans les résultats utiles et transforme cette recherche en contact.",
    context:
      "Orvault est étendue et organisée en secteurs assez distincts, du Grand Val à la Bugallière en passant par le bourg. Les habitants raisonnent en quartier plus qu'en commune : on cherche un professionnel « pas loin », pas « à Orvault » au sens large. Un site qui nomme précisément les secteurs desservis et les prestations, plutôt que de rester vague, capte mieux ces recherches de proximité.",
    focus: [
      {
        title: 'Commerces et services de quartier',
        description:
          "Ce que vous faites, où, et quand vous êtes ouvert. Simple à dire, souvent mal présenté, et décisif pour une recherche de proximité.",
      },
      {
        title: 'Indépendants',
        description:
          "Un site qui pose votre crédibilité et explique la prestation, pour que le prospect arrive déjà convaincu au moment de l'appel.",
      },
      {
        title: 'Entreprises locales',
        description:
          "Une vitrine sérieuse, rapide, et pensée pour générer des demandes plutôt que pour faire joli.",
      },
    ],
    nearby: ['nantes', 'saint-herblain', 'la-chapelle-sur-erdre'],
    faq: [
      {
        question: 'Un site mobile-first, ça change quoi pour un pro orvaltais ?',
        answer:
          "La majorité de vos visiteurs viennent du mobile. Un site pensé mobile d'abord charge vite et se lit sans effort, ce qui augmente les chances qu'on vous contacte.",
      },
      {
        question: 'Peut-on cibler un quartier précis plutôt que toute la commune ?',
        answer:
          "Oui, et c'est souvent plus efficace. On structure le contenu autour des secteurs que vous desservez réellement, ce qui correspond mieux à la façon dont les gens cherchent.",
      },
    ],
  },
  {
    slug: 'bouguenais',
    name: 'Bouguenais',
    h1: 'Création de site internet à Bouguenais',
    title: 'Création de site internet à Bouguenais',
    metaDescription:
      'Création de site internet à Bouguenais : sites sur-mesure pour artisans, commerces et PME, SEO technique inclus. Agence web près de Nantes. Devis gratuit.',
    intro:
      "Au sud-ouest de l'agglomération, Bouguenais mêle activité économique et commerces de proximité. Un site rapide et bien référencé y aide les professionnels à sortir du lot sur Google. On construit ce type de site pour les activités bouguenaisiennes.",
    angle:
      "Artisan, commerçant ou prestataire : vos futurs clients vous cherchent en ligne avant de vous appeler. Un site clair, à jour et trouvable fait pencher la balance en votre faveur au bon moment.",
    context:
      "La commune accueille des activités liées au pôle aéronautique et à l'aéroport, aux côtés d'un tissu commerçant classique dans les bourgs et aux Couëts. Deux réalités très différentes : d'un côté des prestataires techniques dont les clients sont d'autres entreprises, de l'autre des commerces qui vivent du quartier. On ne construit pas le même site pour l'un et pour l'autre, et c'est la première question qu'on pose.",
    focus: [
      {
        title: 'Prestataires techniques et industriels',
        description:
          "Savoir-faire, certifications et références présentés sérieusement, pour un interlocuteur professionnel qui évalue avant de contacter.",
      },
      {
        title: 'Commerces et artisans locaux',
        description:
          "Informations pratiques claires et preuves du travail, pour capter la clientèle des environs au moment où elle cherche.",
      },
      {
        title: 'Services aux entreprises',
        description:
          "Offre lisible et appel à l'action direct, avec un formulaire qui peut alimenter automatiquement votre suivi commercial.",
      },
    ],
    nearby: ['reze', 'nantes', 'saint-herblain'],
    faq: [
      {
        question: 'Vous intervenez à Bouguenais ?',
        answer:
          "Oui, Bouguenais fait partie de notre zone directe autour de Nantes. Appel vidéo ou rencontre, comme vous préférez.",
      },
      {
        question: "Mon activité s'adresse à des entreprises, pas à des particuliers.",
        answer:
          "Ça change la structure du site : moins d'accroche émotionnelle, plus de preuves, de précision technique et de facilité à vous contacter. On construit en fonction.",
      },
    ],
  },
  {
    slug: 'la-chapelle-sur-erdre',
    name: 'La Chapelle-sur-Erdre',
    h1: 'Création de site internet à La Chapelle-sur-Erdre',
    title: 'Création de site internet à La Chapelle-sur-Erdre',
    metaDescription:
      'Création de site internet à La Chapelle-sur-Erdre : sites sur-mesure pour commerces et indépendants, SEO inclus. Agence web près de Nantes. Devis gratuit.',
    intro:
      "Commune dynamique au nord de Nantes, La Chapelle-sur-Erdre voit son tissu d'indépendants et de commerces s'étoffer. Être bien référencé localement y devient vite un avantage concurrentiel. On développe des sites taillés pour cette visibilité de proximité.",
    angle:
      "Quand une activité s'installe ou se développe, le site est souvent le premier point de contact. Un site propre, rapide et référencé pose une image sérieuse et attire les bons clients dès le départ.",
    context:
      "La commune attire régulièrement de nouveaux habitants, et une population qui arrive n'a pas ses habitudes : elle cherche tout en ligne, du coiffeur au plombier. C'est une opportunité concrète pour les professionnels déjà installés, à condition d'être visibles au moment de cette recherche. Un site correctement référencé capte ces nouveaux arrivants avant que les habitudes ne se créent ailleurs.",
    focus: [
      {
        title: 'Commerces et services de proximité',
        description:
          "Être trouvé par les nouveaux arrivants qui cherchent un prestataire près de chez eux, avec des informations pratiques immédiatement lisibles.",
      },
      {
        title: 'Indépendants et professions libérales',
        description:
          "Une présentation claire de la pratique et un contact simple, pour convertir une recherche en rendez-vous.",
      },
      {
        title: 'Activités en développement',
        description:
          "Une base technique qui suit la croissance : nouvelles pages, nouveaux services, sans tout reconstruire.",
      },
    ],
    nearby: ['nantes', 'orvault', 'carquefou'],
    faq: [
      {
        question: 'Je démarre mon activité, le site vaut-il le coup tout de suite ?',
        answer:
          "Oui. Un site clair vous rend crédible dès le lancement et commence à travailler votre visibilité pendant que vous développez le reste. C'est plus efficace que d'attendre.",
      },
      {
        question: 'Comment être visible auprès des nouveaux habitants ?',
        answer:
          "Par la recherche locale : un site structuré pour Google, cohérent avec une fiche Google Business complète. C'est ce que consultent les gens qui ne connaissent pas encore la commune.",
      },
    ],
  },
  {
    slug: 'coueron',
    name: 'Couëron',
    h1: 'Création de site internet à Couëron',
    title: 'Création de site internet à Couëron',
    metaDescription:
      'Création de site internet à Couëron : sites sur-mesure pour commerces, artisans et indépendants, SEO technique inclus. Agence web près de Nantes. Devis gratuit.',
    intro:
      "À l'ouest de Nantes, en bord de Loire, Couëron s'appuie sur ses commerces et artisans de proximité. Un site rapide et trouvable sur Google leur ouvre une clientèle qui, sinon, passe à côté. On met en place cette visibilité pour les pros couëronnais.",
    angle:
      "Loin de la sur-concurrence du centre de Nantes, une activité couëronnaise bien référencée peut vite occuper le terrain local en ligne. Encore faut-il un site solide et pensé pour la recherche de proximité, ce qu'on construit avec vous.",
    context:
      "C'est probablement l'argument le plus concret pour une activité couëronnaise : la concurrence en ligne y est nettement moins dense qu'au centre de l'agglomération. Beaucoup de professionnels du secteur n'ont pas de site, ou un site laissé à l'abandon depuis des années. Sur des recherches locales précises, un site propre et bien structuré peut donc se positionner plus facilement qu'ailleurs, pour un effort équivalent.",
    focus: [
      {
        title: 'Artisans et bâtiment',
        description:
          "Réalisations en photo, secteur d'intervention explicite et devis facile à demander. De quoi être choisi sans se déplacer d'abord.",
      },
      {
        title: 'Commerces du bourg et des quartiers',
        description:
          "Horaires, accès et offre présentés simplement, alignés sur votre fiche Google pour ne pas semer le doute.",
      },
      {
        title: 'Services de proximité',
        description:
          "Une présence en ligne claire là où beaucoup de concurrents n'en ont pas encore, sur des recherches locales précises.",
      },
    ],
    nearby: ['saint-herblain', 'nantes', 'orvault'],
    faq: [
      {
        question: 'Vous couvrez Couëron et les communes autour ?',
        answer:
          "Oui, Couëron et l'ouest de l'agglomération font partie de notre zone. On travaille par appel vidéo ou en se rencontrant selon vos disponibilités.",
      },
      {
        question: 'Est-ce plus facile de ressortir sur Google ici ?',
        answer:
          "Souvent oui, la concurrence en ligne est moins dense qu'au centre de Nantes. Ça ne dispense pas d'un site solide et d'une fiche Google active, mais l'effort paie plus vite.",
      },
    ],
  },
]

export interface TradePage {
  slug: string
  /** Nom du métier au singulier, ex. « restaurant ». */
  name: string
  h1: string
  title: string
  metaDescription: string
  intro: string
  angle: string
  /** Contexte propre au métier. */
  context: string
  /** Éléments concrets du site pour ce métier. */
  features: LocalFocus[]
  faq: LocalFAQ[]
  /** Étude de cas du même métier, montrée en preuve sur la page. */
  caseStudySlug?: string
  /** Phrase qui introduit l'exemple. */
  caseStudyLead?: string
}

export const TRADES: TradePage[] = [
  {
    slug: 'restaurant',
    name: 'restaurant',
    h1: 'Création de site internet pour restaurant',
    title: 'Création de site internet pour restaurant',
    metaDescription:
      'Site internet pour restaurant : carte à jour, réservation, photos, référencement local. Sites sur-mesure et rapides. Agence web à Nantes. Devis gratuit.',
    intro:
      "Un client qui cherche où manger regarde d'abord la carte, les photos et les avis sur son téléphone. Un site de restaurant lent ou daté lui fait choisir le voisin. On conçoit des sites de restaurant rapides, appétissants et référencés, avec la carte toujours à jour.",
    angle:
      "Menu lisible, prise de réservation, accès aux avis, cohérence avec la fiche Google : chaque détail réduit la friction entre la faim et la réservation. On structure le site pour que Google et les assistants IA comprennent votre établissement et le recommandent au bon moment.",
    context:
      "La décision se prend vite, souvent à moins d'une heure du repas, et presque toujours sur mobile. Le parcours type : recherche Google, coup d'œil aux photos et aux avis, vérification de la carte et des horaires, puis appel ou réservation. Chaque étape où l'information manque ou charge trop lentement fait perdre le client. Une carte en PDF qui met dix secondes à s'ouvrir sur un téléphone, c'est une réservation qui part chez le concurrent.",
    features: [
      {
        title: 'Carte consultable en une seconde',
        description:
          "En vraie page web, pas en PDF à télécharger. Lisible sur mobile, modifiable quand les plats changent, et compréhensible par Google.",
      },
      {
        title: 'Réservation sans friction',
        description:
          "Bouton visible partout, connecté à votre outil de réservation ou au téléphone en un tap. Le moins d'étapes possible.",
      },
      {
        title: 'Photos qui donnent faim',
        description:
          "Mises en valeur et optimisées pour charger vite, y compris en 4G. Ce sont elles qui déclenchent la venue.",
      },
      {
        title: 'Horaires et accès fiables',
        description:
          "Cohérents avec votre fiche Google, avec les cas particuliers (jours de fermeture, service continu) traités clairement.",
      },
    ],
    faq: [
      {
        question: 'On peut mettre à jour la carte nous-mêmes ?',
        answer:
          "Oui, on prévoit une gestion simple de la carte, ou on s'en occupe au cas par cas. Une carte à jour est un signal important pour Google comme pour vos clients.",
      },
      {
        question: 'Le site remplace-t-il notre fiche Google ?',
        answer:
          "Non, les deux se complètent. On rend le site cohérent avec la fiche (mêmes horaires, même carte, mêmes infos), ce qui renforce votre visibilité locale.",
      },
      {
        question: 'Faut-il un système de réservation en ligne ?',
        answer:
          "Ça dépend de votre organisation. Si vous gérez au téléphone, un bouton d'appel bien placé suffit. Si vous avez déjà un outil, on l'intègre proprement au site.",
      },
    ],
    caseStudySlug: 'chikano',
    caseStudyLead:
      "Un site de restauration rapide, livré et en ligne.",
  },
  {
    slug: 'artisan',
    name: 'artisan',
    h1: 'Création de site internet pour artisan',
    title: 'Création de site internet pour artisan',
    metaDescription:
      "Site internet pour artisan : réalisations, zone d'intervention, demande de devis, SEO local. Sites sur-mesure et rapides. Agence web à Nantes. Devis gratuit.",
    intro:
      "Un artisan est choisi sur la confiance et la preuve du travail bien fait. Sans site, vos réalisations restent invisibles pour ceux qui cherchent en ligne. On conçoit des sites d'artisan qui montrent vos chantiers, votre zone et facilitent la demande de devis.",
    angle:
      "Photos avant/après, métiers couverts, secteur d'intervention, formulaire de contact clair : le site répond aux questions du prospect avant même l'appel. Bien référencé localement, il vous amène des demandes qualifiées plutôt que des curieux.",
    context:
      "Le vrai problème d'un artisan qui marche, ce n'est pas le manque de demandes, c'est leur qualité. Trop d'appels pour des chantiers hors zone, hors budget ou hors métier, et du temps perdu à trier. Un site bien construit filtre en amont : il dit ce que vous faites, où vous intervenez et à quel type de projet vous répondez. Les gens qui vous contactent ensuite savent déjà où ils mettent les pieds.",
    features: [
      {
        title: 'Vos réalisations en avant',
        description:
          "Photos de chantiers organisées par type de travaux. C'est la preuve la plus convaincante, et elle vaut tous les arguments écrits.",
      },
      {
        title: "Zone d'intervention explicite",
        description:
          "Les communes que vous desservez, écrites noir sur blanc. Moins d'appels hors secteur, et un signal utile pour la recherche locale.",
      },
      {
        title: 'Demande de devis qui ne décourage pas',
        description:
          "Quelques champs bien choisis, pas un questionnaire. Assez pour qualifier, assez court pour être rempli.",
      },
      {
        title: 'Métiers et prestations détaillés',
        description:
          "Ce que vous faites vraiment, dit simplement. C'est aussi ce qui vous rend trouvable sur des recherches précises.",
      },
    ],
    faq: [
      {
        question: "Je n'ai que des photos de chantier, ça suffit ?",
        answer:
          "Oui, c'est même l'essentiel. De bonnes photos de vos réalisations valent tous les arguments. On les met en valeur dans une structure claire qui inspire confiance.",
      },
      {
        question: 'Le site peut-il cibler ma zone de déplacement ?',
        answer:
          "Oui. On indique clairement votre secteur d'intervention et on structure le contenu pour la recherche locale, pour être trouvé là où vous travaillez.",
      },
      {
        question: 'Je reçois déjà des appels, à quoi bon un site ?',
        answer:
          "À trier. Un site qui précise vos métiers, votre zone et vos types de chantiers réduit les demandes hors sujet et vous fait gagner du temps sur chaque appel.",
      },
    ],
  },
  {
    slug: 'commerce-local',
    name: 'commerce local',
    h1: 'Création de site internet pour commerce local',
    title: 'Création de site internet pour commerce local',
    metaDescription:
      'Site internet pour commerce local : horaires, produits, accès, avis, référencement de proximité. Sites sur-mesure et rapides. Agence web à Nantes. Devis gratuit.',
    intro:
      "Avant de pousser la porte d'un commerce, on vérifie horaires, adresse et avis en ligne. Un commerce sans site clair perd ces clients au profit d'un concurrent mieux référencé. On conçoit des sites de commerce de proximité, rapides et trouvables sur Google.",
    angle:
      "Le rôle du site n'est pas de tout vendre en ligne, mais de faire venir en boutique : montrer les produits, donner envie, rassurer sur l'accès et les horaires. Cohérent avec votre fiche Google, il devient un vrai aimant à clientèle locale.",
    context:
      "Une erreur fréquente est de croire qu'un commerce a besoin d'une boutique en ligne. Dans la majorité des cas, l'objectif est plus simple : faire venir des gens qui habitent ou passent à côté. Ce qui compte alors, c'est que l'information soit juste et immédiate. Un horaire faux, une adresse qui ne correspond pas à la fiche Google ou une page qui met cinq secondes à charger coûtent des visites, bien plus qu'une absence de paiement en ligne.",
    features: [
      {
        title: 'Horaires justes, partout',
        description:
          "Sur le site et sur la fiche Google, sans contradiction. C'est la première chose vérifiée avant un déplacement.",
      },
      {
        title: 'Vos produits mis en avant',
        description:
          "De quoi donner envie de venir voir, sans forcément vendre en ligne. Les photos font le travail.",
      },
      {
        title: 'Accès et stationnement',
        description:
          "Comment vous trouver et où se garer. Un détail négligé qui décide pourtant de la visite.",
      },
      {
        title: 'Recherche locale soignée',
        description:
          "Structure et données qui disent clairement à Google où vous êtes et ce que vous vendez.",
      },
    ],
    faq: [
      {
        question: 'Un commerce a-t-il besoin de vendre en ligne pour avoir un site ?',
        answer:
          "Non. La plupart des commerces locaux ont surtout besoin d'être trouvés et de donner envie de venir. Un site vitrine clair suffit souvent à ramener du monde en boutique.",
      },
      {
        question: "J'ai déjà une fiche Google, est-ce suffisant ?",
        answer:
          "C'est un bon début, mais elle est limitée : peu de place pour présenter vos produits et votre univers. Le site complète la fiche, et les deux se renforcent quand ils disent la même chose.",
      },
    ],
  },
  {
    slug: 'coach',
    name: 'coach',
    h1: 'Création de site internet pour coach',
    title: 'Création de site internet pour coach',
    metaDescription:
      'Site internet pour coach sportif ou bien-être : présentation, prise de rendez-vous, preuves, SEO. Sites sur-mesure et rapides. Agence web à Nantes. Devis gratuit.',
    intro:
      "Un coach vend d'abord une relation et une transformation. Le site doit incarner ça : qui vous êtes, pour qui, avec quels résultats, et comment réserver. On conçoit des sites de coach clairs, crédibles et taillés pour la prise de rendez-vous.",
    angle:
      "Présentation directe, offres lisibles, témoignages, réservation en un clic : chaque section réduit l'hésitation du prospect. Bien référencé, le site vous amène des personnes déjà convaincues qui n'ont plus qu'à franchir le pas.",
    context:
      "Le frein d'un prospect n'est presque jamais le prix, c'est le doute : est-ce que ça marche pour quelqu'un comme moi, et est-ce que le courant va passer. Un site de coach efficace répond à ces deux questions avant le premier contact. Il dit clairement à qui vous vous adressez, montre des parcours concrets, et laisse transparaître votre façon de travailler. Le reste, tarifs et logistique, se règle ensuite.",
    features: [
      {
        title: 'Un positionnement clair',
        description:
          "Pour qui vous travaillez et sur quoi. Un coach qui parle à tout le monde ne convainc personne.",
      },
      {
        title: 'Des preuves concrètes',
        description:
          "Témoignages et parcours réels, présentés sobrement. C'est ce qui lève le doute mieux que n'importe quelle promesse.",
      },
      {
        title: 'Réservation immédiate',
        description:
          "Votre outil de prise de rendez-vous intégré au site, accessible depuis chaque page. Pas de formulaire à rallonge.",
      },
      {
        title: 'Offres lisibles',
        description:
          "Ce que contient chaque accompagnement, dit simplement, pour que le prospect se projette sans avoir à demander.",
      },
    ],
    faq: [
      {
        question: 'On peut brancher un système de réservation ?',
        answer:
          "Oui, on intègre votre outil de prise de rendez-vous pour que le prospect réserve sans friction, directement depuis le site.",
      },
      {
        question: 'Faut-il afficher mes tarifs ?',
        answer:
          "Souvent oui, au moins un ordre de grandeur. Ça évite les rendez-vous avec des gens hors budget et rassure ceux qui hésitent à demander.",
      },
    ],
  },
  {
    slug: 'photographe',
    name: 'photographe',
    h1: 'Création de site internet pour photographe',
    title: 'Création de site internet pour photographe',
    metaDescription:
      'Site internet pour photographe : portfolio, galeries rapides, contact, référencement local. Sites sur-mesure et rapides. Agence web à Nantes. Devis gratuit.',
    intro:
      "Pour un photographe, le site EST le portfolio. Des images qui chargent lentement ou mal cadrées sur mobile font fuir avant le premier contact. On conçoit des sites de photographe rapides, où vos photos s'affichent nettes et donnent envie de vous écrire.",
    angle:
      "Galeries fluides, mise en avant de vos univers, contact évident, chargement optimisé même sur de gros visuels : la technique se fait oublier pour laisser parler les images. Bien référencé localement, le site attire les demandes de votre région.",
    context:
      "Le paradoxe du métier : les images doivent être superbes, donc lourdes, mais un site lent fait fuir avant même la première photo affichée. C'est le point technique qui distingue un vrai site de photographe d'un template mal réglé. Formats modernes, chargement progressif, dimensions adaptées à l'écran : bien fait, on garde la qualité visuelle sans sacrifier la vitesse, y compris sur une connexion mobile moyenne.",
    features: [
      {
        title: 'Galeries rapides malgré le poids',
        description:
          "Images optimisées et chargées au fil du défilement. La qualité reste, l'attente disparaît.",
      },
      {
        title: 'Univers séparés',
        description:
          "Mariage, portrait, corporate : chaque univers a sa page, ce qui aide le visiteur et le référencement.",
      },
      {
        title: 'Contact évident',
        description:
          "Accessible depuis n'importe quelle photo, au moment précis où le visiteur est convaincu.",
      },
      {
        title: 'Référencement local',
        description:
          "Pour ressortir sur les recherches de votre région, là où se trouvent vos clients.",
      },
    ],
    faq: [
      {
        question: 'Mes photos vont-elles ralentir le site ?',
        answer:
          "Non si c'est bien fait. On optimise le poids et le chargement des images pour garder un site rapide, y compris avec de grandes galeries.",
      },
      {
        question: 'Puis-je ajouter des photos moi-même ?',
        answer:
          "Oui, on met en place une gestion simple des galeries, ou on s'occupe des mises à jour selon ce que vous préférez.",
      },
    ],
  },
  {
    slug: 'pme',
    name: 'PME',
    h1: 'Création de site internet pour PME',
    title: 'Création de site internet pour PME',
    metaDescription:
      "Site internet pour PME : crédibilité, génération de contacts, présentation de l'offre, SEO technique inclus. Sites sur-mesure. Agence web à Nantes. Devis gratuit.",
    intro:
      "Pour une PME, le site est souvent le premier filtre d'un prospect ou d'un partenaire. Un site daté ou peu clair envoie le mauvais signal. On conçoit des sites de PME qui crédibilisent l'entreprise et génèrent des contacts qualifiés.",
    angle:
      "Offre lisible, preuves, appels à l'action clairs : le site guide le visiteur vers la prise de contact. On peut aussi le connecter à vos outils (CRM, automatisations) pour que chaque demande arrive au bon endroit, sans ressaisie.",
    context:
      "En B2B, le site est rarement l'endroit où se conclut l'affaire, mais c'est souvent celui où elle se perd. Un prospect vous a été recommandé, il vérifie en ligne avant d'appeler : si le site fait amateur ou date visiblement de dix ans, le doute s'installe alors que la recommandation était bonne. Le rôle du site est donc double, confirmer le sérieux auprès de ceux qui vous connaissent déjà, et capter ceux qui vous cherchent sans vous connaître.",
    features: [
      {
        title: 'Offre structurée',
        description:
          "Ce que vous vendez, à qui, et pourquoi vous. Lisible en trente secondes par quelqu'un qui ne vous connaît pas.",
      },
      {
        title: 'Preuves et références',
        description:
          "Cas concrets et clients, présentés sobrement. C'est ce que regarde un décideur avant de vous contacter.",
      },
      {
        title: 'Contact qualifiant',
        description:
          "Un formulaire qui recueille ce qu'il faut pour préparer le premier échange, sans faire fuir.",
      },
      {
        title: 'Connexion à vos outils',
        description:
          "Les demandes arrivent directement dans votre CRM ou vos process, sans double saisie ni oubli.",
      },
    ],
    faq: [
      {
        question: 'Vous pouvez connecter le site à nos outils internes ?',
        answer:
          "Oui. En plus du site, on met en place des automatisations (Make.com, outils IA) pour relier le formulaire à votre CRM ou vos process, sans double saisie.",
      },
      {
        question: 'Notre site actuel est ancien, faut-il tout refaire ?',
        answer:
          "On audite d'abord l'existant : rendu serveur, structure, vitesse, contenu. Selon l'état, on rénove ou on reconstruit. Le diagnostic est gratuit.",
      },
    ],
  },
  {
    slug: 'boulangerie',
    name: 'boulangerie',
    h1: 'Création de site internet pour boulangerie',
    title: 'Création de site internet pour boulangerie',
    metaDescription:
      "Site internet pour boulangerie : horaires justes, une page par boutique, appel et itinéraire en un tap, référencement local. Agence web à Nantes. Devis gratuit.",
    intro:
      "Une boulangerie se cherche à 7h du matin, sur un téléphone, avec deux questions : c'est ouvert, et c'est loin ? Le site doit répondre à ça en une seconde, avant même de parler de savoir-faire. On construit ces sites-là, avec les horaires justes et l'itinéraire à portée de pouce.",
    angle:
      "L'action utile n'est pas un formulaire de contact, c'est un appel, un itinéraire, ou un message pour commander un gâteau. On met ces trois gestes en avant et on cale le reste autour : spécialités, quartier, horaires réels, et les données structurées que Google reprend directement dans ses résultats.",
    context:
      "Le pain se décide dans un rayon de dix minutes, en marchant ou sur le trajet du travail. La recherche est brève, très locale, souvent dictée à voix haute. Ce qui fait perdre le client, c'est un horaire faux, une page lente en 4G, ou une adresse imprécise qui envoie au mauvais bout de la rue. Et quand une maison tient plusieurs boutiques, chaque adresse a besoin de sa page : deux boutiques sur une seule page se font concurrence, et Google finit par n'en montrer qu'une.",
    features: [
      {
        title: 'Des horaires justes, jour de fermeture compris',
        description:
          "Le badge ouvert ou fermé se calcule à l'heure de Paris, pas à celle du visiteur, et reste muet tant que le site n'en est pas sûr. Mieux vaut ne rien annoncer qu'annoncer « ouvert » à tort.",
      },
      {
        title: 'Une page complète par boutique',
        description:
          "Adresse, téléphone, quartier et données structurées propres à chaque boutique. Elles ressortent séparément sur Google tout en partageant l'autorité d'un seul domaine.",
      },
      {
        title: 'Appel et itinéraire à portée de pouce',
        description:
          "Barre fixe sur mobile, présente du haut au bas de la page. Le client est debout, téléphone en main : il ne remplira pas un formulaire.",
      },
      {
        title: 'Commandes écrites pour les commandes spéciales',
        description:
          "WhatsApp ou SMS avec message pré-rempli. Beaucoup de clients n'osent pas appeler, et un gâteau sur mesure se décrit mieux à l'écrit.",
      },
    ],
    faq: [
      {
        question: 'On a plusieurs boutiques, il faut plusieurs sites ?',
        answer:
          "Non, et c'est même contre-productif : trois sites, ce sont trois référencements qui repartent de zéro et trois endroits où corriger un horaire. Un seul domaine, une page complète par boutique : chacune ressort sur son quartier, toutes profitent de l'autorité du domaine.",
      },
      {
        question: 'Nos horaires changent l\'été, on peut les modifier ?',
        answer:
          "Oui. Les horaires vivent à un seul endroit et se répercutent partout : pages, badge ouvert ou fermé, données envoyées à Google. Une ligne à changer, ou on s'en charge.",
      },
      {
        question: 'Faut-il afficher notre note Google sur le site ?',
        answer:
          "On préfère renvoyer vers la fiche. Une note recopiée en dur devient fausse en quelques semaines, et personne ne pense à la corriger.",
      },
    ],
    caseStudySlug: 'mk-boulangeries',
    caseStudyLead:
      'Trois boulangeries réunies sur un seul site, en ligne aujourd\'hui.',
  },
  {
    slug: 'pizzeria',
    name: 'pizzeria',
    h1: 'Création de site internet pour pizzeria',
    title: 'Création de site internet pour pizzeria',
    metaDescription:
      'Site internet pour pizzeria : carte en ligne, commande et paiement, zone de livraison, écran de cuisine. Agence web à Nantes. Devis gratuit.',
    intro:
      "Une pizzeria vit du téléphone, et le téléphone sature au coup de feu. Un site qui prend la commande, encaisse et affiche le ticket en cuisine libère le service au moment où il en a le plus besoin. On développe ce site-là, de la carte au paiement.",
    angle:
      "La carte n'est pas un PDF à télécharger : c'est la source qui alimente la commande, les prix, les allergènes et ce que Google affiche. On la traite comme telle, puis on branche dessus la prise de commande, le paiement et l'écran de cuisine.",
    context:
      "La commande se décide vite, entre 19h et 21h, presque toujours sur mobile, souvent en comparant deux ou trois enseignes ouvertes à proximité. Un PDF qui met dix secondes à s'ouvrir, une attente au téléphone ou une zone de livraison floue coûtent des paniers. Côté cuisine, l'enjeu est autant l'encaissement que la prise de commande : un site qui impose un second compte marchand et une seconde comptabilité crée plus de travail qu'il n'en enlève.",
    features: [
      {
        title: 'Une carte tenue à un seul endroit',
        description:
          "Un plat modifié une fois, et la page carte, la commande, le calcul du prix et le tableau des allergènes suivent. Aucune recopie, donc aucune divergence entre ce qui est affiché et ce qui est facturé.",
      },
      {
        title: 'Commande et paiement en ligne',
        description:
          "Le navigateur n'envoie jamais un prix, seulement des identifiants de plats et de tailles. Le serveur relit chaque tarif et recalcule le total avant d'encaisser, et le paiement peut tomber sur le compte déjà utilisé au comptoir.",
      },
      {
        title: 'Zone de livraison, minimum et frais',
        description:
          'Codes postaux desservis, minimum de commande et frais vérifiés côté serveur, pas seulement masqués dans la page.',
      },
      {
        title: 'Écran de cuisine',
        description:
          "Les commandes payées s'affichent au fur et à mesure et sonnent à l'arrivée. Aucune base de données à sauvegarder, aucun matériel à acheter.",
      },
    ],
    faq: [
      {
        question: 'Il faut ouvrir un compte de paiement en plus ?',
        answer:
          "Non, si vous encaissez déjà par SumUp ou Stripe au comptoir : le site utilise le même compte, donc les recettes du site et celles de la boutique tombent au même endroit, avec une seule réconciliation bancaire.",
      },
      {
        question: 'On peut couper les commandes en pleine soirée ?',
        answer:
          "Oui. Un bouton suspend les commandes en ligne à toute heure, avec un motif affiché au client, et un plat épuisé se retire en un appui. Une commande qui le contiendrait encore est refusée côté serveur.",
      },
      {
        question: 'Un client peut-il trafiquer les prix ?',
        answer:
          "Non. Le site n'envoie que des identifiants ; le serveur relit les prix dans le catalogue et recalcule le total avant le paiement. Des tests automatiques vérifient ce calcul à chaque déploiement.",
      },
    ],
    caseStudySlug: 'anas-pizza',
    caseStudyLead:
      'Une pizzeria nantaise qui prend et encaisse ses commandes en ligne.',
  },
]

export function getCity(slug: string): CityPage | undefined {
  return CITIES.find((c) => c.slug === slug)
}

export function getTrade(slug: string): TradePage | undefined {
  return TRADES.find((t) => t.slug === slug)
}
