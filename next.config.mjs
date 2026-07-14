/** @type {import('next').NextConfig} */
const nextConfig = {
  // Portfolio retiré temporairement — évite les 404 sur les URLs déjà indexées
  async redirects() {
    return [
      { source: '/portfolio', destination: '/', permanent: false },
      { source: '/projets/:slug*', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig
