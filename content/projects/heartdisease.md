---
title: 'Heartdisease'
date: 2019-12-23T22:39:18+01:00
thumbnail: 'projects/hd/curve.png'
repository:
  icon: gitlab
  url: https://gitlab.com/qaoru/ia_neuralnetwork
description: >-
  Réseau de neurones artificiel réalisé manuellement en Python, utilisant le dataset de Cleveland.
  Classification avec softmax.
---

## Création d'un réseau neuronal pour la détection de maladies du coeur

Projet de L3 pour l'UE d'Intelligence Artificielle, nous avons dû coder un réseau neuronal pour l'utiliser avec le [Cleveland Heart Disease Data Set](https://archive.ics.uci.edu/ml/datasets/heart+Disease).

Le choix du langage était libre, j'ai donc choisi Python car c'est le langage de prédilection pour tout ce qui concerne le Machine Learning actuellement. Naturellement, le but du projet étant de nous faire travailler sur le fonctionnement des mécanismes derrière un réseau neuronal, aucune bibliothèque spécialisée dans l'IA n'a été utilisée (coucou TensorFlow, PyTorch, Keras, ...). Les seules librairies externes utilisées sont Numpy, Pandas et Matplotlib (original, dites-donc).

[Lien vers le dépôt](https://gitlab.com/qaoru/ia_neuralnetwork)

### Résultats

<ContentImage
path="/images/projects/hd/curve.png"
provider="netlify"
alt="Courbe d'erreur"
caption="Courbe d'erreur"
/>
