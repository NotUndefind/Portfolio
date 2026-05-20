# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Commandes

```bash
npm run dev      # Démarrer le serveur de développement (Turbopack)
npm run build    # Build de production
npm run lint     # Linter ESLint
```

Déploiement : automatique sur Vercel depuis `main` → https://julesbourin.com

---

## Architecture

**Stack :** Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · shadcn/ui

```
app/
  layout.tsx       — Métadonnées SEO + OpenGraph
  page.tsx         — Assemblage des sections (single-page)
  globals.css      — Tokens Tailwind v4 + variables CSS + classes utilitaires

components/
  ui/              — Primitives shadcn/ui (NE PAS MODIFIER)

content/           — Sources de vérité pour le contenu et le design
  CONTENT.md       — Tout le texte du portfolio
  DESIGN.md        — Système de design (couleurs, typo, animations)

lib/utils.ts       — cn() : clsx + tailwind-merge
```

---

## Contenu & Design — règles non négociables

> Voir aussi `content/CLAUDE.md` pour les règles détaillées sur ce dossier.

- **`content/CONTENT.md`** — Seule source de vérité pour tous les textes du site. Lire avant d'écrire n'importe quel composant.
- **`content/DESIGN.md`** — Seule source de vérité pour les couleurs, la typographie et les animations. Lire avant de poser des classes ou des tokens.
- **`Portfolio2/Portfolio Jules Bourin.html`** — Référence visuelle/technique uniquement — le contenu texte est faux, ne jamais le copier.

**IMPORTANT :** Aucun texte, couleur ou valeur visuelle ne doit être inventé. Tout ce qui s'affiche sur le site doit être tracé jusqu'à un fichier dans `content/`.

**IMPORTANT :** Si une information nécessaire est absente de `content/`, poser la question à Jules avant d'écrire quoi que ce soit — ne pas deviner, ne pas compléter avec du faux contenu.

---

## Design System

### Tokens disponibles comme classes Tailwind

Les variables CSS sont déclarées dans `globals.css` et exposées via `@theme inline` — elles sont donc utilisables directement comme classes Tailwind :

| Token CSS          | Classe Tailwind         | Valeur           |
|--------------------|-------------------------|------------------|
| `--bg`             | `bg-background`         | `#F7F5F0`        |
| `--paper`          | `bg-paper`              | `#FBFAF5`        |
| `--bg-warm`        | `bg-bg-warm`            | `#EFEBE0`        |
| `--bg-deep`        | `bg-bg-deep`            | `#E7E2D2`        |
| `--sage`           | `bg-sage` / `text-sage` | `#7A9E7E`        |
| `--sage-deep`      | `text-sage-deep`        | `#5E8163`        |
| `--text-dark`      | `text-foreground`       | `#2C3830`        |
| `--border`         | `border-border`         | `rgba(44,56,48,0.188)` |

### Typographie

- **`font-display`** (`Imperial Script`) : uniquement pour "Jules Bourin", le logo "JB", et les signatures décoratives
- **`font-sans`** (`DM Sans`) : tout le reste — titres, corps, boutons, labels

### Comportements visuels

- Sections qui se chevauchent : utiliser la classe `.section-overlap` définie dans `globals.css` (encapsule `rounded-t-[32px]`, shadow et `margin-top: -100vh`)
- Reveal au scroll : ajouter `data-reveal` (+ `data-delay="XXX"` en ms optionnel) sur les éléments, passer `ref={useRevealObserver()}` à la `<section>` — le hook ajoute `.reveal-animate` qui déclenche `animation: reveal-up`
- Parallax : uniquement via `style={{ transform }}` calculé dans un `useEffect` + `scroll` listener (seul cas où `style={}` est toléré — voir règles ci-dessous)
- Curseur personnalisé : `components/layout/cursor/cursor.tsx`, dot vert `mix-blend-mode: multiply`

---

## Règles de code — NON NÉGOCIABLES

### 1. INTERDIT : `style={{}}` dans le JSX

**Toujours utiliser des classes Tailwind.** Les styles inline cassent la cohérence, sont illisibles et contournent le système de design.

```tsx
// INTERDIT
<div style={{ display: "flex", gap: "32px", color: "#2C3830" }}>

// CORRECT
<div className="flex gap-8 text-foreground">
```

**Seules exceptions autorisées pour `style={{}}`** :
1. Valeurs **calculées dynamiquement** par JavaScript (ex: position d'un parallax, `transform: translateY(${progress}px)`)
2. `animationDelay` dynamique (reveal au scroll avec délai variable par index)
3. `willChange: "transform"` sur un élément animé

Tout le reste → Tailwind.

### 2. INTERDIT : `<style>` tags dans le JSX

Les blocs `<style>{`...`}</style>` dans les composants sont formellement interdits. Utiliser à la place :

- Classes Tailwind responsive : `md:grid-cols-2`, `max-md:order-last`
- Variants Tailwind : `hover:text-sage`, `focus-visible:ring-2`
- Si une animation custom est indispensable : la déclarer dans `globals.css` sous `@layer utilities`

```tsx
// INTERDIT
<style>{`
  .about-grid { display: grid; }
  @media (min-width: 800px) { .about-grid { grid-template-columns: 1fr 1fr; } }
`}</style>

// CORRECT
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
```

### 3. INTERDIT : Manipulation DOM directe pour les états visuels

Ne pas utiliser `ref.current.style.color = ...` pour des états qui peuvent être gérés par React.

```tsx
// INTERDIT
const handleMouseEnter = () => {
  nameEl.style.color = "var(--sage)";
};

// CORRECT — état React + classe Tailwind
const [hovered, setHovered] = useState(false);
<span className={cn("transition-colors", hovered && "text-sage")}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
/>

// OU plus simple avec CSS pur
<span className="transition-colors hover:text-sage" />
```

### 4. Composition React — découper les composants

Un fichier de section (ex: `about.tsx`) ne doit pas dépasser ~150 lignes. Découper en sous-composants dans le même fichier ou dans `components/`.

```tsx
// INTERDIT — un seul composant de 300 lignes avec tout dedans

// CORRECT — composition claire
function StatItem({ value, label }: { value: string; label: string }) { ... }
function AboutStats() { return <div className="grid grid-cols-3">...</div>; }
function AboutPortrait() { return <div className="aspect-[4/5]">...</div>; }

export function About() {
  return (
    <section id="about">
      <AboutStats />
      <AboutPortrait />
    </section>
  );
}
```

### 5. Server Components par défaut

Ne pas ajouter `"use client"` sans raison. Un composant est Server Component par défaut.

`"use client"` est nécessaire seulement si le composant utilise :
- `useState`, `useReducer`, `useRef`, `useEffect`
- Des event handlers (`onClick`, `onSubmit`, etc.)
- Des APIs navigateur (`window`, `document`, `IntersectionObserver`)

Les sections purement statiques (texte, structure HTML) **ne doivent pas** avoir `"use client"`.

### 6. Utiliser `cn()` pour les classes conditionnelles

```tsx
import { cn } from "@/lib/utils";

// INTERDIT
<div className={`base-class ${condition ? "active" : ""}`}>

// CORRECT
<div className={cn("base-class", condition && "active")}>
```

### 7. TypeScript strict

- Toujours typer les props avec une interface ou un type nommé
- Pas de `any`
- Les interfaces de données (ex: `Skill`, `Project`) se déclarent en haut du fichier ou dans `lib/types.ts`

```tsx
// INTERDIT
function SkillRow({ skill, isLast }: any) { ... }

// CORRECT
interface SkillRowProps {
  skill: Skill;
  isLast: boolean;
}
function SkillRow({ skill, isLast }: SkillRowProps) { ... }
```

### 8. shadcn/ui — utiliser les primitives existantes

Avant de créer un composant from scratch, vérifier si shadcn/ui en fournit un dans `components/ui/` :

- Boutons → `Button` de `@/components/ui/button`
- Champs de formulaire → `Input`, `Textarea` de `@/components/ui/input`
- Badges → `Badge` de `@/components/ui/badge`
- Ne JAMAIS modifier les fichiers dans `components/ui/` directement

---

## Contact — EmailJS

```
Service ID  : service_l9d9uzb
Template ID : template_47ikpaq
Public Key  : Mt7fnUzLnrJ2ByHDy
```

## Assets publics

- `/public/CVJulesBourin.pdf` — CV à télécharger
- `/public/avatar.png` — Photo portrait
- `/public/favicon.svg` — Favicon
