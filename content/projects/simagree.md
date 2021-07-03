---
title: 'SIMAGREE'
date: 2019-12-24T00:52:07+01:00
thumbnail: 'projects/simagree/search.png'
description: >-
  Application web permettant la consultation et la gestion d'une base de données mycologique en ligne.
---

SIMAGREE est une application web permettant la consultation d'une base de données mycologique appartenant à la Société Mycologique de Strasbourg (SMS).

## Contexte

Une espèce (champignon) est définie selon plusieurs critères : le genre, la forme, et la comestibilité entre autres. Cependant, avec le temps et les découvertes qui en découlent, il arrive qu'une espèce « change de nom ». La base de données de la SMS regroupe donc plusieurs milliers d'espèces, en prenant en compte ces évolutions via une notion de synonymes.

## Fonctionnement

Il est possible d'effectuer des recherches selon différents critères (genre, variété, commestibilité, ...), en prenant en compte (ou non) la synonymie. Pour les personnes en ayant les droits, il est possible d'ajouter une espèce à part entière, ou simplement un synonyme. Un synonyme peut également être défini comme « usuel », s'il n'est plus considéré comme valide par les différentes autorités, mais restant très largement utilisé. SIMAGREE permet également de générer des fiches (à l'unité ou groupées) au format PDF incluant les informations essentielles d'une espèce. Des fonctions d'import et d'export en CSV sont naturellement présentes.

## Langages et outils

SIMAGREE est une application web et utilise donc HTML, CSS et JavaScript. Elle se base sur le framework Django utilisant le langage Python, que ce soit pour le front-end (moteur de template Django) ou pour le back-end.

Le SGBD utilisé est PostgreSQL.

## Captures

<ContentImage
path="/images/projects/simagree/home.png"
provider="netlify"
alt="accueil"
caption="Accueil"> </ContentImage>

<ContentImage
path="/images/projects/simagree/search.png"
provider="netlify"
alt="recherche"
caption="Page de recherche"> </ContentImage>

<ContentImage
path="/images/projects/simagree/details.png"
provider="netlify"
alt="details"
caption="Détails d'une espèce"> </ContentImage>
