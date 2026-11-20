---
title: Trainerr
summary: Ton coach de muscu de poche. L'appli dit quelle séance faire, quelle charge mettre sur chaque machine, et ajuste la suite à chaque série. Tout reste sur le téléphone.
techs: [TypeScript, Vue, Ionic, Capacitor, SQLite]
cover: ../../assets/app/trainerr/aujourdhui.png
coverAlt: "Écran Aujourd'hui de Trainerr : la séance du jour, ses exercices et les charges proposées"
gallery:
  - ../../assets/app/trainerr/serie.png
  - ../../assets/app/trainerr/stats.png
repo: https://github.com/Happy4Game/Trainerr
order: 1
featured: true
---

Application mobile Android et iOS de suivi de musculation, pensée pour être utilisée à la salle, d'une main, en deux gestes par série.

- **Le bon poids à chaque série** : l'appli propose la charge suivante selon les répétitions faites (double progression).
- **Mode « machine occupée »** : propose une machine qui travaille les mêmes muscles, puis revient à la première.
- **Catalogue de 480 exercices** avec dessins du mouvement, muscles travaillés et consignes en français.
- **Statistiques et suivi du corps** : force estimée, séries par muscle, pesées, photos à comparer.
- **Hors ligne d'abord** : base SQLite sur le téléphone, aucune donnée envoyée sans action de l'utilisateur.

Testée avec Vitest et Playwright, disponible en français et en anglais.
