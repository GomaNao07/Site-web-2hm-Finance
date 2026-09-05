# 🎨 2HM.FINANCE — Charte Graphique & Palette de Couleurs Hexadécimales

Ce document présente la charte graphique et l'intégralité des **couleurs hexadécimales** utilisées sur le site web **2HM.FINANCE** (Ingénierie financière & contrôle de gestion — Zone CEMAC).

---

## 📌 1. Couleurs Principales (Identité de Marque)

| Rendu | Code Hexadécimal | Nom du Token / CSS Variable | Description & Utilisation |
| :---: | :---: | :---: | :--- |
| `🟣` | **`#862586`** | `--color-brand-violet` | **Violet Signature (Marque)** — Utilisé pour les titres d'accroche, liens interactifs, numéros de piliers, boutons violets et accents de bordure. |
| `🔮` | **`#2A0B2C`** | `--color-brand-violet-deep` | **Violet Profond** — Fond sombre principal du site (Navbar, Hero section, blocs sombres, section thèse et arrière-plan général des zones sombres). |
| `👾` | **`#5C1560`** | `--color-brand-violet-mid` | **Violet Moyen** — Couleur d'état au survol (hover) pour les éléments violets. |
| `🟡` | **`#E8A33D`** | `--color-brand-amber` | **Ambre / Or** — Couleur d'accentuation dynamique. Utilisée pour les eyebrows (sous-titres techniques), boutons d'action (CTAs principaux), jauges financières et formules clés. |
| `⚡` | **`#F4B85C`** | `N/A` | **Ambre Survol** — État de survol (hover) pour les boutons et badges ambrés. |

---

## 2. Couleurs Neutres & Fond de Page

| Rendu | Code Hexadécimal | Nom du Token / CSS Variable | Description & Utilisation |
| :---: | :---: | :---: | :--- |
| `📄` | **`#FAF7F9`** | `--color-brand-papier` | **Papier (Fond clair)** — Fond clair principal texturé du site offrant une esthétique d'édition haut de gamme. |
| `⚪` | **`#FFFFFF`** | `N/A` | **Blanc Pur** — Fond des cartes de piliers, tableaux d'expertises et conteneurs sur fond clair. |
| `⬛` | **`#1A1418`** | `--color-brand-encre` | **Encre Sombre** — Couleur principale du texte sur fond clair pour un contraste et une lisibilité de haute précision. |
| `✒️` | **`#3A2E38`** | `N/A` | **Gris Encre** — Texte secondaire et corps de paragraphe sur les blocs clairs. |
| `🩶` | **`#6E6472`** | `--color-brand-gris` | **Gris Neutre** — Sous-titres techniques, détails de cartes et textes secondaires. |

---

## 3. Nuances & Variantes pour Zones Sombres

| Rendu | Code Hexadécimal | Description & Utilisation |
| :---: | :---: | :--- |
| `🔮` | **`#160616`** | **Noir Violet** — Arrière-plan sombre du pied de page (`<footer>`). |
| `🟪` | **`#1A061C`** | **Fond Formulaire** — Arrière-plan des champs de saisie (`input`, `select`, `textarea`) dans le formulaire de contact. |
| `🍆` | **`#3C1240`** | **Fond des Slots d'images** — Arrière-plan de chargement pour les emplacements d'images (`IMG-01` à `IMG-05`) avec superposition en bichromie. |
| `🌸` | **`#EAD8EA`** | Texte secondaire sur fond sombre (Section contact, engagements de mission). |
| `🪻` | **`#E7C8E7`** | Liens de navigation dans la Navbar et le Footer. |
| `🌺` | **`#DFC6DF`** | Texte d'introduction (Lede) de la section Hero. |
| `🪷` | **`#D9BFD9`** | Description des blocs sombres et notes explicatives financières. |
| `🪻` | **`#C9A8C9`** | Légendes de la jauge de coûts et textes explicatifs secondaires. |
| `🌼` | **`#F0CDA0`** | Eyebrows sur blocs violets purs. |
| `🌸` | **`#F0DBF0`** | Paragraphes sur blocs violets purs. |

---

## ⚙️ 4. Configuration Tailwind CSS (`src/index.css`)

Les couleurs principales sont configurées dans le fichier `src/index.css` sous forme de variables globales et d'extension de thème Tailwind v4 :

```css
@theme {
  --color-brand-violet: #862586;
  --color-brand-violet-deep: #2A0B2C;
  --color-brand-violet-mid: #5C1560;
  --color-brand-amber: #E8A33D;
  --color-brand-papier: #FAF7F9;
  --color-brand-encre: #1A1418;
  --color-brand-gris: #6E6472;
  --color-brand-ligne: rgba(134, 37, 134, 0.18);

  --font-display: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
  --font-corps: 'Newsreader', Georgia, serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
}
```

---

## ✒️ 5. Typographies du Projet

1. **Titres & Display** : `Archivo` (Sans-serif) — Utilisé pour la structure et la hiérarchie visuelle (`font-display`).
2. **Corps de texte** : `Newsreader` (Serif) — Utilisé pour une lecture fluide et élégante (`font-corps`).
3. **Éléments Techniques & Nombres** : `IBM Plex Mono` (Monospace) — Utilisé pour les données chiffrées, badges, navigation et codes d'expertises (`font-mono`).

---

## 🚀 6. Aperçu des Pages

- `01 Accueil` (`/`)
- `02 Le cabinet` (`/le-cabinet`)
- `03 Expertises` (`/nos-expertises`)
- `04 Méthode` (`/notre-methode`)
- `05 Formation` (`/formation`)
- `06 Contact` (`/contact`)
