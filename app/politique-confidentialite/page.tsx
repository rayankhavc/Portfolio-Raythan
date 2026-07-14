import type { Metadata } from 'next'
import Link from 'next/link'
import { CopyableLink } from '@/components/CopyableLink'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données de Raythan Web Design.',
}

export default function PolitiqueConfidentialite() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-xs text-metallic hover:text-metallic-light transition-colors mb-8 inline-block">
          ← Retour à l'accueil
        </Link>

        <h1 className="font-semibold tracking-tight text-4xl text-foreground mb-2">Politique de confidentialité</h1>
        <p className="text-metallic text-sm mb-12">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-10 text-metallic-light text-sm leading-relaxed">

          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données est Rayan Khalifa (Raythan Web Design), joignable à <CopyableLink href="mailto:raythanwebdesign@gmail.com" label="raythanwebdesign@gmail.com" copyValue="raythanwebdesign@gmail.com" className="text-accent hover:underline" />.</p>
          </section>

          <div className="border-t border-white/8" />

          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">2. Données collectées</h2>
            <p>Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de contact :</p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Contenu du message</li>
            </ul>
            <p className="mt-3">Aucune donnée n'est collectée automatiquement sans votre consentement explicite.</p>
          </section>

          <div className="border-t border-white/8" />

          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">3. Finalité du traitement</h2>
            <p>Les données collectées sont utilisées exclusivement pour :</p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Vous contacter dans le cadre d'une relation commerciale</li>
            </ul>
          </section>

          <div className="border-t border-white/8" />

          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">4. Durée de conservation</h2>
            <p>Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.</p>
          </section>

          <div className="border-t border-white/8" />

          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">5. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li><strong className="text-foreground">Droit d'accès</strong> : obtenir une copie de vos données</li>
              <li><strong className="text-foreground">Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong className="text-foreground">Droit à l'effacement</strong> : supprimer vos données</li>
              <li><strong className="text-foreground">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong className="text-foreground">Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            </ul>
            <p className="mt-3">Pour exercer vos droits : <CopyableLink href="mailto:raythanwebdesign@gmail.com" label="raythanwebdesign@gmail.com" copyValue="raythanwebdesign@gmail.com" className="text-accent hover:underline" /></p>
            <p className="mt-3">Vous pouvez également introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">cnil.fr</a></p>
          </section>

          <div className="border-t border-white/8" />

          <section>
            <h2 className="font-semibold text-foreground text-xl mb-4">6. Sous-traitants</h2>
            <p>Nous utilisons les services tiers suivants :</p>
            <ul className="mt-3 space-y-2 ml-4 list-disc">
              <li><strong className="text-foreground">Formspree</strong> (formspree.io) — traitement des formulaires de contact</li>
              <li><strong className="text-foreground">Cal.com</strong> (cal.com) — prise de rendez-vous en ligne</li>
              <li><strong className="text-foreground">Vercel</strong> (vercel.com) — hébergement du site</li>
            </ul>
            <p className="mt-3">Ces prestataires disposent de leurs propres politiques de confidentialité conformes au RGPD.</p>
          </section>

        </div>
      </div>
    </main>
  )
}
