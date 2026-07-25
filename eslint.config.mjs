// eslint-config-next distribue déjà des configs flat natives (tableaux) sous
// ./core-web-vitals et ./typescript. Les importer directement plutôt que de
// passer par compat.extends('next/core-web-vitals', ...) : le pont legacy
// FlatCompat tente de sérialiser ces configs en JSON pour les valider, et
// plante sur une structure circulaire (plugin react qui se référence
// lui-même), incompatible avec ESLint 9/10.
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // Contenu du site en français : les apostrophes littérales dans le
      // texte JSX ("qu'on", "d'un"...) s'affichent sans problème, la règle
      // n'a de valeur que stylistique. La désactiver évite de réécrire des
      // dizaines de phrases (dont les pages légales) sans aucun bénéfice
      // fonctionnel.
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default eslintConfig
