Crée par [Spokeek](https://github.com/Alexandre-Belhomme) et [Ranily](https://github.com/Ranily57)!

# 📁 Bienvenue dans notre projet !

## À propos

Ce projet comprend deux fichiers importants : `Event.js` et une action Github. Jettons un coup d'œil à ce que fait chaque élément :

### Event.js

Le fichier `Event.js` est responsable de la gestion des événements. Il traite les informations liées aux dons et abonnements reçus par notre service. Plus précisément, il prend les données de l'événement, telles que le nom de l'utilisateur et le montant donné, et les ajoute à une liste contenant les noms des utilisateurs et le montant total qu'ils ont donné jusqu'à présent.

### Github Action

Nous avons également inclus une Github Action, un petit programme qui surveille les problèmes (issues) ouverts dans notre projet. Lorsqu'un nouvel issue est ouvert, l'action déclenche le script `Event.js` pour mettre à jour notre liste d'utilisateurs et de montants en fonction des informations fournies dans l'issue.

## Comment cela fonctionne-t-il ?

Lorsqu'un nouvel événement est détecté (don ou abonnement), nous enregistrons le nom de l'utilisateur et le montant associé dans notre liste. Si l'utilisateur existe déjà dans la liste, nous mettons simplement à jour le montant total pour refléter le nouveau don ou abonnement.

Nous avons tout automatisé grâce à Github Actions, ce qui signifie que le processus se déroule de manière transparente sans nécessiter d'intervention manuelle.

## Comment participer ?

Nous serions ravis de vous avoir à bord pour contribuer à notre projet ! Vous pouvez ouvrir de nouveaux problèmes (issues) si vous avez des suggestions, des idées ou si vous rencontrez des problèmes que vous aimeriez signaler. Vous pouvez également proposer des modifications, des améliorations ou envoyer des demandes d'extraction (pull requests) pour ajouter de nouvelles fonctionnalités.

N'hésitez pas à partager vos commentaires et vos questions. Votre contribution est précieuse pour faire avancer notre projet !
