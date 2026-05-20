# components/

Répertoire des composants React. Toute UI du portfolio passe ici.

## Stack de référence

- **React 19** via Next.js 15 App Router
- **Tailwind CSS v4** — classes utilitaires, pas de `style={{}}` ni `<style>` tags
- **TypeScript strict** — props typées avec interfaces nommées, pas de `any`
- **shadcn/ui** — primitives dans `ui/`, ne jamais les modifier directement
- **`cn()`** (`clsx` + `tailwind-merge`) pour les classes conditionnelles

## Structure cible

```
components/
├── ui/            — shadcn/ui primitives (NE PAS MODIFIER) + led.tsx (custom, modifiable)
├── layout/        — Éléments présents sur toutes les pages
│   ├── header/
│   │   └── header.tsx
│   ├── footer/
│   │   └── footer.tsx
│   └── cursor/
│       └── cursor.tsx
└── sections/      — Blocs de contenu de la page
    ├── hero/
    │   └── hero.tsx
    ├── about/
    │   ├── about.tsx       ← composant racine + AboutPortrait (inline)
    │   └── about-stats.tsx ← sous-composant extrait
    ├── skills/
    │   └── skills.tsx
    ├── projects/
    │   ├── projects.tsx
    │   └── project-feature-item.tsx
    └── contact/
        └── contact.tsx
```

> État actuel (2026-05-19) : structure en place.

---

## Règle de placement

| Composant                                    | Dossier     |
| -------------------------------------------- | ----------- |
| Primitives génériques (Button, Input, Badge) | `ui/`       |
| Structure globale (nav, footer, curseur)     | `layout/`   |
| Bloc de contenu de la page                   | `sections/` |

---

## Un dossier par composant

Chaque composant visible dans `components/` possède son propre sous-dossier :

```
layout/header/
├── header.tsx      ← composant principal exporté
└── index.ts        ← ré-export (seulement si plusieurs fichiers)
```

`index.ts` est **optionnel** — l'ajouter uniquement si le dossier contient plusieurs fichiers (sous-composants, types locaux, tests).

---

## Taille limite

**150 lignes par fichier.** Au-delà → découper en sous-composants dans le même dossier.

```
sections/about/
├── about.tsx          ← composant racine de la section
├── about-portrait.tsx ← sous-composant extrait
└── about-stats.tsx    ← sous-composant extrait
```

---

## Imports

Toujours par alias absolu, jamais par chemin relatif :

```tsx
// CORRECT
import { Header } from "@/components/layout/header/header";

// INTERDIT
import { Header } from "../../components/layout/header/header";
```
