# CLAUDE.md — content/

## Mission

Ce dossier est la **seule source de vérité** pour tout le contenu et le design du portfolio. Aucun texte, couleur, typographie ou comportement visuel ne doit être inventé — tout vient d'ici.

## Structure

```
content/
  CONTENT.md   — Tous les textes du portfolio (nav, hero, à propos, projets, compétences, contact, footer)
  DESIGN.md    — Système de design (palette, typo, animations, comportements visuels)
```

## Conventions

- Chaque texte affiché sur le site (titres, paragraphes, labels, CTAs) est défini dans `CONTENT.md`.
- Chaque décision visuelle (couleur, police, espacement, animation) est définie dans `DESIGN.md`.
- `DESIGN.md` fait référence à `CONTENT.md` pour le vrai contenu — ne jamais croiser les deux dans l'autre sens.
- Les fichiers dans ce dossier sont éditables : si le contenu évolue, c'est ici qu'on le change, pas directement dans les composants.

## Règles importantes

- IMPORTANT: Toujours lire `CONTENT.md` et `DESIGN.md` avant d'écrire ou de modifier un composant.
- NE JAMAIS inventer du texte, des couleurs ou des valeurs de design — si ce n'est pas dans ces fichiers, il faut d'abord l'y ajouter.
- NE JAMAIS copier le contenu du fichier HTML de référence `Portfolio2/` — son contenu texte est faux.
- TOUJOURS référencer une section précise du fichier source dans les commentaires si une valeur vient d'ici (ex: `// cf. content/CONTENT.md — section Hero`).
- Si une information nécessaire au développement est absente de ces fichiers, **poser la question à Jules avant d'écrire quoi que ce soit** — ne pas deviner, ne pas compléter avec du faux contenu.
