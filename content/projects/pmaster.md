---
title: 'Projet de Master 2020'
date: 2020-10-13T23:42:24+02:00
thumbnail: projects/pmaster/sxb.png
repository:
  icon: gitlab
  url: https://git.unistra.fr/project-master/pro-master/-/tree/dev/infra
description: >-
  Mise en place d'une infrastructure conteneurisée hautement disponible
  sur deux sites avec Kubernetes
---

Le projet de notre master 2 était présenté sous la forme d'une simulation de start-up.
Par groupe, nous devions trouver un concept, puis convaincre un client, et assurer à la fois
le développment de l'application, ainsi que la gestion de toute son infrastructure.
Les contraintes imposées étaient fortes :

- haute volumétrie de données
- tolérance à la panne locale et régionale
- adaptation à une charge variable
- redimensionnement automatique

Au sein de mon groupe (5 personnes), j'étais chargé de mettre en place et maintenir d'infrastructure de A à Z.
Nous avions 3 machines à notre disposition, ainsi qu'un quota de ressources disponible sur le cluster OpenStack de l'Université de Strasbourg.

## Pile applicative

Pour la pile applicative, nous avons choisi de développer une application web sous Django (backend) et React (frontend).

## Pile technique de l'infrastructure

Pour tenir compte des containtes techniques imposées par le projet, j'ai proposé les technologies suivantes :

- Orchestration de conteneurs avec Kubernetes
- Stockage objet avec Ceph (via le projet Rook.IO)
- Base de données distribuée grâce à CockroachDB
- Répartiteurs de charge L4 en entrée avec HAProxy

L'infrastucture a été déployée grâce à des outils d'Infrastructure-as-Code, à savoir :

- Gestion de configurations avec Ansible
- Provisionnement de ressources via Terraform (pour la plate-forme OpenStack)

## Ressources

Le dépôt Git est disponible à [cette adresse](https://git.unistra.fr/project-master/pro-master/-/tree/dev/infra).

Notre rapport de projet est disponible [ici](/download/projet_master_2020.pdf). Je me suis occupé de la rédaction de la partie technique.
