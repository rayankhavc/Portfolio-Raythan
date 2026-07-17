/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // /projets sans slug n'est pas une page : on renvoie vers l'index du
      // portfolio. Les anciennes redirections /portfolio et /projets/:slug
      // vers la home sont retirées : ces routes existent de nouveau.
      { source: '/projets', destination: '/portfolio', permanent: false },
    ]
  },
}

export default nextConfig
