import type { Metadata } from 'next'
import Link from 'next/link'
import { CopyableLink } from '@/components/CopyableLink'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de Raythan Web Design.',
}

export default function MentionsLegales() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-xs text-metallic hover:text-metallic-light transition-colors mb-8 inline-block">
          ← Retour à l'accueil
        </Link>

        <h1 className="font-semibold tracking-tight text-4xl text-foreground mb-2">Mentions légales</h1>
        <p className="text-metallic text-sm mb-12">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-10 text-metallic-light text-sm leading-relaxed">

          {/* Éditeur */}
          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">1. Éditeur du site</h2>
            <p>Le présent site web est édité par :</p>
            <ul className="mt-3 space-y-1 list-none pl-0">
              <li><span className="text-metallic">Nom :</span> <span className="text-foreground">Rayan Khalifa</span></li>
              <li><span className="text-metallic">Activité :</span> <span className="text-foreground">Raythan Web Design</span></li>
              <li><span className="text-metallic">Statut :</span> <span className="text-foreground">Micro-entrepreneur</span></li>
              <li><span className="text-metallic">SIRET :</span> <span className="text-metallic-light"></span></li>
              <li><span className="text-metallic">Adresse :</span> <span className="text-metallic-light"></span></li>
              <li><span className="text-metallic">Email :</span> <CopyableLink href="mailto:raythanwebdesign@gmail.com" label="raythanwebdesign@gmail.com" copyValue="raythanwebdesign@gmail.com" className="text-accent hover:underline" /></li>
              <li><span className="text-metallic">Téléphone :</span> <CopyableLink href="tel:+33651598293" label="06 51 59 82 93" copyValue="06 51 59 82 93" className="text-accent hover:underline" /></li>
            </ul>
          </section>

          <div className="border-t border-white/8" />

          {/* Hébergeur */}
          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">2. Hébergeur</h2>
            <p>Le site est hébergé par :</p>
            <ul className="mt-3 space-y-1 list-none pl-0">
              <li><span className="text-metallic">Société :</span> <span className="text-foreground">Vercel Inc.</span></li>
              <li><span className="text-metallic">Adresse :</span> <span className="text-foreground">340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</span></li>
              <li><span className="text-metallic">Site :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">vercel.com</a></li>
            </ul>
          </section>

          <div className="border-t border-white/8" />

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments constituant ce site (textes, images, graphismes, logo, icônes, sons, logiciels…) est la propriété exclusive de Raythan Web Design, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
            </p>
          </section>

          <div className="border-t border-white/8" />

          {/* Responsabilité */}
          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">4. Limitation de responsabilité</h2>
            <p>
              Raythan Web Design s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Raythan Web Design ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.
            </p>
            <p className="mt-3">
              En conséquence, Raythan Web Design décline toute responsabilité pour les imprécisions, inexactitudes ou omissions portant sur des informations disponibles sur ce site.
            </p>
          </section>

          <div className="border-t border-white/8" />

          {/* Données personnelles */}
          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">5. Données personnelles (RGPD)</h2>
            <p>
              Les données collectées via le formulaire de contact (nom, email, téléphone, message) sont utilisées uniquement pour répondre à votre demande. Elles ne sont pas cédées à des tiers.
            </p>
            <p className="mt-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données.
            </p>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:raythanwebdesign@gmail.com" className="text-accent hover:underline">raythanwebdesign@gmail.com</a>
            </p>
            <p className="mt-3">
              Le traitement des formulaires est assuré par Formspree (formspree.io). Consultez leur <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">politique de confidentialité</a>.
            </p>
          </section>

          <div className="border-t border-white/8" />

          {/* Cookies */}
          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">6. Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de traçage ou publicitaires. Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés. Ils ne collectent aucune donnée personnelle.
            </p>
          </section>

          <div className="border-t border-white/8" />

          {/* Droit applicable */}
          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
