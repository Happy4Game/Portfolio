# Portfolio

Portfolio de Thibaut Dufeutrel, construit avec [Astro](https://docs.astro.build).

## Lancer le projet

Prérequis : Node.js 22.23.4 ou plus récent (voir https://docs.astro.build/en/install-and-setup/).

```sh
npm install
npm run dev      # serveur de développement sur http://localhost:4321
npm run build    # génère le site statique dans dist/
npm run preview  # sert dist/ pour vérifier le build
```

## Organisation

```
public/                 fichiers copiés tels quels (favicon)
src/
  assets/               images optimisées par Astro (<Image />)
  components/           Nav, Background, ProjectCard, PhoneTrio, TechMarquee
  content/projects/     un fichier Markdown par projet
  content.config.ts     schéma de la collection « projects »
  data/techs.ts         logo associé à chaque technologie
  layouts/BaseLayout.astro  <head> + navigation communs
  pages/                une page = une route (index, about, skills, projects)
  styles/global.css     couleurs et styles communs
```

## Ajouter un projet

Créer `src/content/projects/mon-projet.md` avec le même en-tête que les autres
(`title`, `summary`, `techs`, `cover`, `coverAlt`, `order`…). Astro vérifie
l'en-tête au build grâce au schéma de `src/content.config.ts`.
