---
title: 'Conway-MPI'
date: 2019-12-23T22:34:24+01:00
thumbnail: 'projects/conway/MPI_temps.png'
repository:
  icon: gitlab
  url: https://gitlab.com/kessibi/conway-mpi
description: >-
  Conway's Game of Life parallelized implementation using MPI 
  (Message Passing Interface) in C.
---

## Sujet

Le sujet de ce projet était, à partir d'un code du Jeu de la Vie (de Conway) fourni en C, d'accélérer le temps de calcul des différentes étapes avec de la parallélisation via MPI.

Ce projet à été réalisé en binôme avec [Guillaume Kessibi](https://kessibi.fr).

## Implémentation

Le Jeu de la Vie fonctionnant via une grille, nous avons découpé les lignes de la grille selon le nombre de coeurs alloués au programme. Nous avons effectué des tests allant d'un coeur (séquentiel) à 48 coeurs (4 coeurs par machine, en distribuant le programme sur 12 machines). Les calculs sont ainsi effectués en parallèle sur chaque section de la grille, avec des échanges de lignes supérieures et inférieures entre elles.

## Résultats

[Lien vers le dépôt](https://gitlab.com/kessibi/conway-mpi)

### Temps d'exécution

Les résultats que nous avons obtenus montrent une diminution intéressante du temps
d'exécution du programme jusqu'à 16 coeurs.
Passé ce seuil, les calculs sont trop peu élevés / complexes pour rentabiliser l'utilisation de plusieurs machines.

<ContentImage
path="/images/projects/conway/MPI_temps.png"
provider="netlify"
alt="temps"
caption="Temps d'exécution du programme"> </ContentImage>

### Accélération

L'accélération (ou speed-up) du programme correspond au temps d'exécution séquentiel divisé par le temps d'exécution parallèle.
La coubre d'accélération est presque linéaire, ce qui correspond à un cas idéal lors de la parallélisation d'un programme.
Comme les communications ont été effectuées via un réseau non-dédié aux mesures (partagé par tout le campus universitaire), cela explique les fluctuations.

<ContentImage
path="/images/projects/conway/MPI_speedup.png"
provider="netlify"
alt="speedup"
caption="Accélération du programme"> </ContentImage>
