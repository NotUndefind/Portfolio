# Design System — Portfolio Jules Bourin

## Référence visuelle
Le fichier de référence généré par Claude Design est disponible ici :
`/Users/julesbourin/Downloads/Portfolio2/Portfolio Jules Bourin.html`

Utilise ce fichier comme référence pour la structure, les animations et le style visuel.
**Attention : tout le contenu texte de ce fichier est faux** (inventé par Claude Design). Se référer à `CONTENT.md` pour le vrai contenu.

---

## Couleurs

```css
:root {
  --bg:           #F7F5F0; /* Crème chaud — fond de page */
  --bg-warm:      #EFEBE0; /* Fond légèrement plus chaud — sections alternées */
  --bg-deep:      #E7E2D2; /* Fond profond — placeholders, encarts */
  --accent:       #7A9E7E; /* Vert sauge — couleur principale */
  --accent-deep:  #5E8163; /* Vert sauge foncé — hover, accents forts */
  --text:         #2C3830; /* Ardoise foncée — textes principaux */
  --text-soft:    #2C383099; /* Texte atténué */
  --text-mute:    #2C383066; /* Texte très discret */
  --hairline:     #2C383018; /* Bordures légères */
  --hairline-strong: #2C383030; /* Bordures marquées */
  --paper:        #FBFAF5; /* Surface "papier" */
}
```

---

## Typographie

Les deux polices sont sur **Google Fonts** (gratuites) :

| Usage | Police | Import |
|---|---|---|
| Nom, éléments décoratifs forts | **Imperial Script** | `family=Imperial+Script` |
| Titres de section, corps, boutons, labels | **DM Sans** | `family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500` |

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Imperial+Script&display=swap" rel="stylesheet" />
```

**Règle impérative :** Imperial Script uniquement pour le nom "Jules Bourin" (hero) et les décorations ponctuelles. Tout le reste en DM Sans.

---

## Style général

- **Mode :** Clair uniquement, pas de dark mode
- **Ambiance :** Minimaliste, épuré, premium — inspiré Apple et Claude.ai
- **Pas de clichés dev :** Pas de dark mode, pas de terminal ASCII, pas de look "nerd"
- **Espace :** Beaucoup de whitespace, les sections respirent
- **Sections :** Se chevauchent visuellement (border-radius sur le dessus + box-shadow, une section slide par-dessus la précédente)
- **Animations :** Reveal au scroll (opacity + translateY), transitions fluides, parallax léger sur le hero
- **Curseur :** Petit dot vert qui suit la souris (mix-blend-mode: multiply)
- **Nav :** Fixe, devient floue/translucide au scroll (backdrop-filter), indicateur de section active

---

## Structure des sections

```
1. Nav       — Fixe, logo "JB" en Imperial Script, liens de section, CTA "Disponible"
2. Hero      — Plein écran, nom en Imperial Script très grand, pills d'action, aura verte floue
3. À propos  — Slide par-dessus le hero, texte + espace photo portrait, stats
4. Projet    — Slide par-dessus, fond légèrement plus chaud, chambre connectée
5. Compétences — Fond crème, grille de skills en deux colonnes (Web / IoT & Infra)
6. Contact   — Fond ardoise foncé (#2C3830), texte crème, section finale
```

---

## Comportements & animations

- **Reveal au scroll :** Chaque élément apparaît avec `opacity: 0 → 1` + `translateY(28px → 0)` via IntersectionObserver
- **Hero :** Les lettres du nom apparaissent en cascade (stagger par caractère)
- **Hero parallax :** L'aura verte bouge légèrement au scroll, le contenu hero fade out en scrollant
- **Nav active :** Le lien de la section visible reçoit une classe `.active` avec un dot vert
- **Hover skills :** `padding-left` s'agrandit + couleur vire à l'accent vert
- **Boutons contact :** Hover → background vert, rotation de la flèche à 45°
- **LED animée :** Point vert pulsant dans la nav et le footer (disponibilité)
