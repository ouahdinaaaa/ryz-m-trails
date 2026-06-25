## Refonte créative RYZ'ÔM — Plan d'action

Grande refonte visuelle + ajustements backend + responsive. Je propose de découper en lots clairs pour livrer proprement.

### 1. Backend — Articles par défaut
- Mettre à jour `backend/seedData.js` pour ne garder que **3 articles** par défaut (au lieu de 5), chacun avec : image (URL Unsplash valide), date, sous-titre, tags, contenu HTML.
- Sujets proposés : « Lancement Team Curie », « Le message d'Adam », « Trifouillette XXL ».
- Le seed nettoie et réinsère ces 3 articles.

### 2. Fond grain mobile
- Dans `GrainOverlay.tsx` + `src/index.css` : réduire l'opacité et la fréquence du bruit sur mobile (media query `max-width: 768px` → opacité ~0.02, `baseFrequency` plus basse) pour supprimer l'effet « TV cassée ».
- Désactiver l'animation `grain` sur mobile (statique uniquement).

### 3. Système de boutons (radius 5–10px)
- `src/components/ui/button.tsx` : passer tous les variants de `rounded-md`/`rounded-full` à `rounded-[6px]` (sauf `link`).
- `src/index.css` : ajuster `.btn-painted`, `.btn-wooden` à `border-radius: 6px`.
- Conserver l'effet peinture/coup de pinceau via pseudo-éléments (texture, surlignement), pas via le radius.

### 4. Direction artistique « main humaine, aventure, enfantin »
Renforcer 4 piliers visuels partout :
- **Bordures dessinées main** : utilitaire `.hand-drawn-border` avec SVG inline (trait irrégulier).
- **Tampons / étiquettes kraft** : `.kraft-stamp`, `.washi-tape` (rubans adhésifs colorés en coin de cartes).
- **Annotations manuscrites** : flèches, soulignements, gribouillis Amatic SC / Permanent Marker dispersés.
- **Polaroids inclinés** : rotations légères (-2° à +3°) sur cartes images.
- **Palette renforcée** : ocre, sauge, terracotta, ciel délavé — retirer toute teinte « SaaS ».

### 5. Animations créatives immersives
- `WordReveal` amélioré : reveal mot par mot avec rotation aléatoire légère.
- `DrawSVG` : nouveau composant qui anime le tracé de SVG (soulignements, flèches, cercles) au scroll via `stroke-dashoffset`.
- `TiltOnScroll` : polaroids qui s'inclinent doucement selon position scroll.
- `PaperFlip` : transition de page style carnet qui se feuillette entre routes (via Framer Motion `AnimatePresence`).
- Hover : cartes qui se redressent + ombre portée diffuse.
- Respect `prefers-reduced-motion` partout.

### 6. Refonte Événements / Calendrier (`Evenements.tsx`)
- Layout **carnet de voyage** : liste à gauche style fiches kraft épinglées, détail à droite style page de journal.
- Calendrier custom (pas shadcn brut) : grille à l'encre, chiffres Amatic SC, événements marqués par petits tampons colorés (icônes par catégorie : 🏃 ✨ 🌲 🔥 🎓).
- Filtres = étiquettes peintes cliquables.
- Card événement = ticket de course découpé avec perforations.

### 7. Page Contact
- Layout **carte postale** : formulaire à gauche sur fond papier ligné, illustration aquarelle à droite (joëlette + sentier).
- Champs = lignes manuscrites sous le label (pas de bordure rectangle classique).
- Bouton envoi = tampon "ENVOYER" rouge style postal.
- Cartes contact (email, tel, lieu) = post-its colorés inclinés.

### 8. Refonte autres pages
- `Association.tsx`, `VisionValeurs.tsx`, `Actions.tsx`, `Projets.tsx`, `Joelette.tsx`, `Engager.tsx` :
  - Headers de page : grand titre Amatic SC + sous-titre manuscrit + ligne dessinée main.
  - Sections en colonnes décalées (jamais alignées parfaitement).
  - Citations : style carnet avec coin replié.
  - CTA : panneaux bois ou tampons.
  - Galeries photos : style mur de polaroids avec washi tape.

### 9. Responsive incroyable
- Audit complet mobile/tablette pour chaque page.
- Hero mobile : empilement + image plus petite + titre lisible (clamp).
- Grilles : `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3` avec gaps adaptés.
- Typographie fluide : `clamp(2rem, 8vw, 5rem)` sur titres.
- Menu mobile : panneau plein écran style carnet ouvert, liens Amatic SC géants.
- Touch targets ≥ 44px partout.
- Désactiver parallaxe lourde sur mobile (perf).

### Notes techniques
- Stack : React 18 + Vite + Tailwind + shadcn — pas de nouvelle dépendance lourde (réutiliser Framer Motion déjà présent).
- Tokens couleurs/ombres → `src/index.css` uniquement, jamais codés en dur dans les composants.
- Accessibilité : contrastes AA, `aria-label`, navigation clavier, `prefers-reduced-motion`.
- Aucun changement de logique métier — uniquement frontend + seed backend.

### Ordre de livraison proposé
1. Backend seed (3 articles) + fix grain mobile + boutons radius — **rapide, base saine**
2. Refonte Événements + Contact — **pages les plus demandées**
3. Refonte autres pages + animations créatives — **passe finale**
4. Audit responsive complet — **polish**

Je confirme et j'attaque dans cet ordre dès ton OK. Tu veux ajuster quelque chose avant que je lance ?
