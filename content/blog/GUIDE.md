# Guide de rédaction du blog

Ce fichier est lu par la tâche planifiée qui rédige les brouillons, et par
quiconque écrit un article à la main. Les fichiers dont le nom commence par
une majuscule (`GUIDE.md`, `SUJETS.md`) ne sont jamais publiés.

## Le circuit

1. La tâche prend le **premier sujet non coché** de `SUJETS.md`.
2. Elle rédige l'article dans `content/blog/<slug>.md`, coche le sujet
   (`- [x]`, avec la date et le slug) et ouvre une **PR vers `main`, sans la
   merger**. Une PR par article.
3. Rayan relit, corrige ou demande des changements, puis merge. Le merge
   déploie (Vercel), l'article est en ligne.

Si aucun sujet n'est libre, la tâche n'écrit rien et le signale.

## Format du fichier

```
---
title: Titre de 70 caractères maximum
description: Résumé pour Google, 160 caractères maximum, une phrase complète.
date: 2026-10-14
category: Référencement local
caseStudySlug: mk-boulangeries
---

Premier paragraphe, sans titre au-dessus.

## Première partie
...
```

- `slug` = nom du fichier : minuscules, tirets, sans accents, 3 à 6 mots
  (`afficher-ses-prix-en-ligne.md`).
- `date` = jour de rédaction. `updated` seulement lors d'une vraie révision.
- `category` : une des rubriques de `SUJETS.md`.
- `caseStudySlug` (optionnel) : seulement si le projet illustre vraiment le
  sujet. Valeurs possibles : les `slug` de `CASE_STUDIES` dans `lib/data.ts`.
- `draft: true` cache l'article sans le supprimer.
- Pas de `# Titre` dans le corps : le titre de la page vient de `title`.

Le build échoue si un champ manque, si une longueur est dépassée, si un
tiret long apparaît ou si `caseStudySlug` est inconnu.

## Lecteur

Un commerçant, un artisan ou un dirigeant de PME, plutôt autour de Nantes,
qui n'est pas technique et qui se pose une question précise. Il doit repartir
avec une réponse qu'il peut appliquer, même s'il ne fait jamais appel à nous.

## Ton

Direct, neutre, carré. Comme les textes courts du site (FAQ, réassurance).

- **Jamais de tiret long (—)**. Virgule, point, deux-points ou reformulation.
  Le point médian (·) reste autorisé pour séparer de courts éléments.
- Vouvoiement.
- Phrases courtes. Un paragraphe = une idée, quatre lignes maximum.
- Interdits, parce qu'ils signent un texte généré sans relecture : « Dans cet
  article », « Dans un monde où », « Il est important de noter », « N'hésitez
  pas à », « En conclusion », « En résumé », « Plongeons », « incontournable »,
  « véritable atout », « booster », « levier », « à l'ère du numérique »,
  « que vous soyez X ou Y », les questions rhétoriques en ouverture, les
  listes de trois adjectifs.
- Pas d'émoji, pas de point d'exclamation.
- Ouvrir sur la réponse ou sur un fait concret, pas sur une généralité.
- Finir sur ce que le lecteur peut faire maintenant, pas sur un résumé.

## Faits et sources

- **Ne jamais inventer un chiffre** : pas de statistique sans source, pas de
  « 75 % des consommateurs » de mémoire. Une source officielle (CNIL,
  service-public.fr, legifrance, Google Search Central, web.dev) est citée
  avec un lien. Sans source vérifiable, on reformule sans chiffre.
- **Prix de l'agence** : jamais, sauf s'ils sont écrits dans le code du site
  ou fournis par Rayan dans `SUJETS.md`. Pour un sujet sur les prix, donner
  des fourchettes de marché sourcées, ou laisser `[À COMPLÉTER PAR RAYAN]`
  et le signaler dans la PR.
- **Expérience réelle** : le meilleur matériau, ce sont nos projets. Les
  études de cas (`lib/data.ts`) et l'historique git des repos clients
  (clonés à côté du portfolio dans les sessions Claude) racontent des
  problèmes vrais : le bug des commandes du midi d'Anas Pizza, les prix non
  estimés de MK, l'absence de bandeau cookies chez O'dinner. Les citer avec
  un lien vers l'étude de cas. Ne jamais attribuer à un client une
  déclaration ou un résultat qui n'est pas dans le code ou les commits.
- Ne pas parler de l'envoi des commandes Anas Pizza vers l'écran SumUp.
- Vérifier l'état actuel d'un repo client avant de le citer : un clone peut
  dater.

## Référencement

- Un article répond à **une** question que les gens tapent vraiment. Le
  titre la reprend avec leurs mots.
- Ne pas viser « création site internet + ville » ni « site internet +
  métier » : ces requêtes appartiennent aux pages locales
  (`/creation-site-internet/*`, `/site-internet/*`). Le blog y renvoie, il
  ne les concurrence pas.
- 900 à 1 500 mots. Plus long seulement si le sujet l'exige.
- Des `##` qui se lisent seuls : quelqu'un qui ne lit que les intertitres
  doit comprendre la réponse.
- 2 à 4 liens internes utiles : une étude de cas, une page métier ou ville
  pertinente, `/services`, `/contact`. Pas de lien forcé.
- Pas de bourrage de mots-clés. Écrire pour le lecteur.

## Ce que la PR doit contenir

- Titre : `Blog : <titre de l'article>`.
- Corps : le sujet traité, les sources utilisées (liens), les faits tirés de
  nos projets avec leur origine (fichier ou commit), et la liste de ce que
  Rayan doit vérifier ou compléter (`[À COMPLÉTER PAR RAYAN]`).
- `npx tsc --noEmit`, `npm run lint` et `npm run build` verts avant
  d'ouvrir la PR.
