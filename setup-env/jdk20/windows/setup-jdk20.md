# INSTALLATION JDK-20


## 1 - Installation de JDK-20
```
 - Se rendre sur le site officiel de Oracle
   - https://www.oracle.com/fr/java/technologies/downloads/

 - Télécharger l'executable de la version de votre choix en fonction de votre système d'exploitation
   Dans le cas du système d'exploitation Windows; téléchargez : 
   - x64 Installer : https://download.oracle.com/java/20/latest/jdk-20_windows-x64_bin.exe (sha256)

 - Installer JDK-20 à partir de l'executable qui a été téléchargé

```

## 2 - Configuration de la variable d'environnement JAVA_HOME de JDK-20
```
 - Se rendre dans la fénètre des variables d'environnement
 - Dans la partie ( Variable système ), ajouter la variable d'environnement
   - Nom de la variable    : JAVA_HOME
   - Valeur de la variable : C:\Program Files\Java\jdk-20
 - Rassurez-vous que le chemin d'accès de la valeur de la variable soit le dossier d'installation de JDK-20

```

## 3 - Vérification de la verison de JDK installée
```
 - Ouvrir le terminal de votre choix
 - Saisir la commande suivante :
   - java -version

```
