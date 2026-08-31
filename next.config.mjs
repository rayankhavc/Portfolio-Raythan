/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // /projets sans slug n'est pas une page : on renvoie vers l'index du
      // portfolio. Les anciennes redirections /portfolio et /projets/:slug
      // vers la home sont retirées : ces routes existent de nouveau.
      //
      // permanent: true (308) et non false (307). Une redirection temporaire
      // dit à Google de garder l'ancienne URL en réserve, donc il la
      // revérifie indéfiniment (d'où la ligne « Page avec redirection » en
      // échec de validation dans la Search Console) et ne transfère pas le
      // signal de l'ancienne URL vers la nouvelle. /projets ne redeviendra
      // jamais une page : la redirection est définitive, autant le dire.
      { source: '/projets', destination: '/portfolio', permanent: true },
      // L'étude « Au Fournil » couvrait les deux anciens sites séparés du
      // Sillon et du Sud. Ils ont été regroupés avec MK Boulangerie dans un
      // site unique : l'étude est remplacée, pas supprimée. 308 pour
      // transférer le signal de l'ancienne URL vers la nouvelle.
      { source: '/projets/au-fournil', destination: '/projets/mk-boulangeries', permanent: true },
    ]
  },
}

export default nextConfig
