---
title: 'Topomate'
date: 2020-10-13T23:41:24+02:00
thumbnail: projects/topomate/interconnect.png
repository:
  icon: github-circle
  url: https://github.com/topomate/topomate
description: >-
  Génération automatique de topologies et configurations réseau dans
  un environnement émulé.
---

L'objectif de ce projet est de proposer un outil permettant de générer automatiquement
des topologies réseau dans un environnement émulé à partir d'une configuration de haut niveau.

## Technologies utilisées

Le programme est développé en Go. Les routeurs sont émulés via des conteneurs Docker,
qui sont interconnectés via des ponts Open vSwitch. Les routeurs utilisent la suite logicielle
FRRouting.

## Configuration de haut-niveau

Une configuration est présentée sous la forme d'un fichier YAML décrivant les différents
systèmes autonomes (AS) qui composent la topologie. La configuration peut être très sommaire,
en précisant simplement pour chaque AS le nombre de routeurs, le type de graphe d'interconnexion pour les liens internes et le nom de l'IGP à utiliser. Topomate génère automatiquement les conteneurs et liens,
et ainsi que la configuration FRRouting correspondante (adressage IP compris).

## Eléments de confguration supportés

Les éléments suivants sont pour le moment supportés :

- Interconnexions intra-AS (full-mesh, anneau, mode manuel)
- Configuration IGP (IS-IS, OSPF)
- Configuration BGP
  - eBGP selon les liens inter-AS, avec définition des relations entre AS
  - iBGP selon les liens intra-AS ou via une description manuelle
  - support des route-reflectors
- Configuration d'IXP avec serveur de routes
- Génération de validateurs RPKI
- Activation de MPLS au sein d'un AS
  - support des VPN BGP/MPLS site-à-site et hub-and-spoke

[Lien vers le dépôt](https://github.com/topomate/topomate)
