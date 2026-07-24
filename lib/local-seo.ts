// Pages SEO locales (par ville) et sectorielles (par métier).
// Chaque entrée porte un contenu RÉELLEMENT unique (intro + angle + FAQ) :
// des pages quasi identiques avec juste le nom changé sont considérées par
// Google comme des « pages satellites » et pénalisées. Le socle d'offre est
// partagé (composant LocalLanding), la valeur unique vit ici.

export interface LocalFAQ {
  question: string
  answer: string
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
  faq: LocalFAQ[]
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
    ],
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
    faq: [
      {
        question: 'Vous intervenez à Saint-Herblain et autour ?',
        answer:
          "Oui, Saint-Herblain fait partie de notre zone directe autour de Nantes. Appel vidéo ou rencontre selon votre préférence.",
      },
    ],
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
    faq: [
      {
        question: "Un site pour un commerce de Rezé, c'est utile même sans vente en ligne ?",
        answer:
          "Oui. Beaucoup de clients cherchent horaires, adresse et avis avant de se déplacer. Un site clair rassure et vous fait choisir, même sans boutique en ligne.",
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
    faq: [
      {
        question: 'Combien de temps pour livrer un site sur Saint-Sébastien ?',
        answer:
          "5 à 15 jours en général, du premier appel à la mise en ligne, selon la taille du projet et la rapidité de vos retours.",
      },
    ],
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
    faq: [
      {
        question: 'Vous couvrez Vertou et le vignoble autour ?',
        answer:
          "Oui, Vertou et sa périphérie font partie de notre zone autour de Nantes. On avance par appel vidéo ou en se rencontrant.",
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
    faq: [
      {
        question: 'Vous faites des sites pour les PME de Carquefou ?',
        answer:
          "Oui, du site vitrine au site plus orienté génération de contacts. On adapte la structure à votre cycle de vente, pas à un modèle générique.",
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
    faq: [
      {
        question: 'Un site mobile-first, ça change quoi pour un pro orvaltais ?',
        answer:
          "La majorité de vos visiteurs viennent du mobile. Un site pensé mobile d'abord charge vite et se lit sans effort, ce qui augmente les chances qu'on vous contacte.",
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
    faq: [
      {
        question: 'Vous intervenez à Bouguenais ?',
        answer:
          "Oui, Bouguenais fait partie de notre zone directe autour de Nantes. Appel vidéo ou rencontre, comme vous préférez.",
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
    faq: [
      {
        question: 'Je démarre mon activité, le site vaut-il le coup tout de suite ?',
        answer:
          "Oui. Un site clair vous rend crédible dès le lancement et commence à travailler votre visibilité pendant que vous développez le reste. C'est plus efficace que d'attendre.",
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
    faq: [
      {
        question: 'Vous couvrez Couëron et les communes autour ?',
        answer:
          "Oui, Couëron et l'ouest de l'agglomération font partie de notre zone. On travaille par appel vidéo ou en se rencontrant selon vos disponibilités.",
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
  faq: LocalFAQ[]
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
    ],
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
    faq: [
      {
        question: 'Un commerce a-t-il besoin de vendre en ligne pour avoir un site ?',
        answer:
          "Non. La plupart des commerces locaux ont surtout besoin d'être trouvés et de donner envie de venir. Un site vitrine clair suffit souvent à ramener du monde en boutique.",
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
    faq: [
      {
        question: 'On peut brancher un système de réservation ?',
        answer:
          "Oui, on intègre votre outil de prise de rendez-vous pour que le prospect réserve sans friction, directement depuis le site.",
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
    faq: [
      {
        question: 'Mes photos vont-elles ralentir le site ?',
        answer:
          "Non si c'est bien fait. On optimise le poids et le chargement des images pour garder un site rapide, y compris avec de grandes galeries.",
      },
    ],
  },
  {
    slug: 'pme',
    name: 'PME',
    h1: 'Création de site internet pour PME',
    title: 'Création de site internet pour PME',
    metaDescription:
      'Site internet pour PME : crédibilité, génération de contacts, présentation de l\'offre, SEO technique inclus. Sites sur-mesure. Agence web à Nantes. Devis gratuit.',
    intro:
      "Pour une PME, le site est souvent le premier filtre d'un prospect ou d'un partenaire. Un site daté ou peu clair envoie le mauvais signal. On conçoit des sites de PME qui crédibilisent l'entreprise et génèrent des contacts qualifiés.",
    angle:
      "Offre lisible, preuves, appels à l'action clairs : le site guide le visiteur vers la prise de contact. On peut aussi le connecter à vos outils (CRM, automatisations) pour que chaque demande arrive au bon endroit, sans ressaisie.",
    faq: [
      {
        question: 'Vous pouvez connecter le site à nos outils internes ?',
        answer:
          "Oui. En plus du site, on met en place des automatisations (Make.com, outils IA) pour relier le formulaire à votre CRM ou vos process, sans double saisie.",
      },
    ],
  },
]

export function getCity(slug: string): CityPage | undefined {
  return CITIES.find((c) => c.slug === slug)
}

export function getTrade(slug: string): TradePage | undefined {
  return TRADES.find((t) => t.slug === slug)
}
