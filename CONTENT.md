# Contenu — Portfolio Jules Bourin

> Ce fichier contient tout le contenu validé avec Jules.
> Le contenu dans le fichier HTML de référence (Claude Design) est FAUX — utiliser uniquement ce fichier.

---

## Identité & contact

| Champ | Valeur |
|---|---|
| Nom | Jules Bourin |
| Âge | 22 ans |
| Localisation | Reims, France |
| Email | julesbourin@gmail.com |
| Téléphone | +33 7 84 71 27 61 |
| Instagram IoT | @bourin.iot |
| GitHub | github.com/NotUndefind |
| Formation | Bachelor Développement Web — HETIC, Paris |
| Domaine | julesbourin.com |
| CV | /public/CVJulesBourin.pdf (déjà présent dans le projet) |

---

## Positionnement

Jules est un développeur web en transition vers l'IoT et la domotique.
**Ton :** Honnête, en chemin — pas quelqu'un qui prétend être déjà expert IoT.
**Objectif portfolio :** Trouver une alternance dans l'IoT/domotique + vitrine en ligne.
**Audience :** Entreprises tech, recruteurs, mais aussi grand public — le contenu doit être compréhensible par n'importe qui, pas seulement des développeurs.

---

## Nav

```
Logo : JB  (en Imperial Script)
Liens : À propos · Projet · Compétences · Contact
CTA : Disponible →  (lien vers #contact)
```

---

## Hero

**Accroche principale :**
> Du web à l'IoT — je construis, je connecte, j'apprends en vrai.

**Sous-accroche / pills :**
- `2026 · Portfolio`
- `Développeur Web → IoT`

**Coins (petits labels discrets) :**
- Haut gauche : `Portfolio · MMXXVI`
- Haut droit : `Reims, France · 49.2° N`
- Bas gauche : `● Disponible — alternance 2026` (avec LED verte pulsante)
- Bas droit : `N° 001 / Page unique`

---

## À propos

**Titre de section :**
> Concevoir avec curiosité, construire avec les mains.

**Texte principal (paragraphes) :**

> Je m'appelle Jules, j'ai 22 ans et je suis étudiant à HETIC Paris. C'est au lycée, grâce à des profs passionnés, que j'ai découvert la domotique et l'automatisation — l'idée de faire communiquer des objets du quotidien, de rendre un espace intelligent.

> J'ai fait un détour par le développement web, et aujourd'hui je reviens à ce qui m'a toujours attiré. En ce moment je construis ma chambre connectée — éclairage automatique, caméra, tout piloté à distance.

> On fait, on apprend, on perfectionne. Vous pouvez suivre l'aventure sur Instagram [@bourin.iot](https://instagram.com/bourin.iot)

**Signature :** `— Jules`  (en Imperial Script)

**Stats :**
| Valeur | Label |
|---|---|
| 2+ | Années de code |
| 1 | Projet IoT en cours |
| ∞ | Curiosité |

**Photo :** Espace réservé pour une photo portrait de Jules (4:5, 1600×2000px recommandé)

---

## Projet — La chambre connectée

**Tag :** `Projet personnel · 2025–2026`

**Titre :**
> La chambre connectée.

**Description (deux colonnes) :**

Colonne 1 :
> Un projet personnel pour transformer ma chambre en espace intelligent. Lampes automatisées, ruban LED ambiant, caméra avec détection, tout piloté depuis mon téléphone ou automatiquement.

Colonne 2 :
> Je gère tout moi-même — du câblage des relais à la configuration du serveur cloud. Un projet vivant, en constante évolution.

**Méta du projet :**
| Clé | Valeur |
|---|---|
| Année | 2025 — 2026 |
| Rôle | Conception · Installation · Dev |
| Stack | ESP32 · Tasmota · MQTT · WLED · Frigate |
| Statut | En cours · Phase 1 active |

**Composants du projet (feature list) :**

01 — **Lampes automatisées**
Deux lampes de bureau pilotées via une carte ESP32 + 4 relais avec le firmware Tasmota. Communication en MQTT via Mosquitto. S'allument et s'éteignent automatiquement.

02 — **Ruban LED**
Ruban LED piloté avec WLED pour créer des ambiances lumineuses personnalisables depuis l'application.

03 — **Caméra intelligente**
Caméra connectée avec Frigate pour la détection d'objets par IA, tournant sur mon homelab.

04 — **Homelab & monitoring**
Infrastructure cloud sur Oracle Cloud Free Tier avec Grafana (monitoring), Traefik (reverse proxy), Uptime Kuma (disponibilité) et OpenClaw (IA locale).

**Citation / pullquote :**
> On fait, on apprend, on perfectionne.

**Image :** Espace réservé pour une capture de la chambre / du setup (16:9)

---

## Compétences

### Colonne 1 — Web (ce que je maîtrise)
| Technologie | Niveau |
|---|---|
| TypeScript | ●●●●● |
| React | ●●●●○ |
| Tailwind CSS | ●●●●● |
| Next.js | ●●●●○ |
| Laravel / PHP | ●●●●○ |
| Git & Docker | ●●●●○ |

### Colonne 2 — IoT & Infra (ce que je construis)
| Technologie | Niveau |
|---|---|
| ESP32 / Tasmota | ●●●○○ |
| MQTT / Mosquitto | ●●●○○ |
| WLED | ●●●○○ |
| Frigate | ●●○○○ |
| Grafana / Traefik | ●●○○○ |
| Linux / Self-hosting | ●●●○○ |

**Citation / fin de section :**
> Du web à l'IoT — on fait, on apprend, on perfectionne.

---

## Contact

**Titre :** (en Imperial Script grand)
> On en parle ?

**Texte :**
> Disponible pour une alternance dans l'IoT et la domotique à partir de 2026. Mission, projet, ou juste un café — j'écris en général dans la journée.

**Boutons d'action :**
- `julesbourin@gmail.com` → `mailto:julesbourin@gmail.com`
- `GitHub / NotUndefind` → `https://github.com/NotUndefind`
- `Instagram / @bourin.iot` → `https://instagram.com/bourin.iot`
- `Télécharger mon CV` → `/CVJulesBourin.pdf`

---

## Footer

```
● Disponible pour une alternance · 2026          © Jules Bourin · Reims          v.001 — MMXXVI
```

---

## Notes pour Claude Code

- Repartir de zéro sur les composants Next.js (garder la structure de fichiers et les dépendances)
- Le fichier HTML de référence (`/Users/julesbourin/Downloads/Portfolio2/Portfolio Jules Bourin.html`) est la **référence visuelle et technique** uniquement — ne pas copier son contenu
- EmailJS déjà configuré dans l'ancien projet : service_l9d9uzb / template_47ikpaq / Mt7fnUzLnrJ2ByHDy
- Le CV PDF est déjà dans `/public/CVJulesBourin.pdf`
- L'avatar est dans `/public/avatar.png` (à remplacer par une vraie photo si disponible)
- Hébergement : Vercel (déploiement automatique depuis GitHub, branche main)
