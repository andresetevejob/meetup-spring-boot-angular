# INSTALLATION MVN-3.9.4


## 1 - Installation de MVN-3.9.4
```
 - Se rendre sur le site officiel de Apache maven
   - https://maven.apache.org/download.cgi

 - Télécharger le binaire de la version de votre choix en fonction de votre système d'exploitation
   Dans le cas du système d'exploitation Windows; téléchargez : 
   - apache-maven-3.9.4-bin.zip

 - Extraire le fichier compresser ( apache-maven-3.9.4-bin.zip ) qui a été téléchargé
 - Déplacer le nouveau dossier ( apache-maven-3.9.4-bin ) obtenu dans la même arborescence que votre dossier de java installé
 - Vous devez obtenir les repertoires : 
   - C:\Program Files\Java\jdk-20
   - C:\Program Files\Mvn\apache-maven-3.9.4-bin
 - Renommer le dossier (apache-maven-3.9.4-bin ) par ( mvn-3.9.4 )
 - Nouvelle arborescence à obtenir : 
   - C:\Program Files\Mvn\mvn-3.9.4

```

## 2 - Configuration de la variable d'environnement MVN_HOME de MAVEN
```
 - Se rendre dans la fénètre des variables d'environnement
 - Dans la partie ( Variable système ), ajouter la variable d'environnement
   - Nom de la variable    : MAVEN_HOME
   - Valeur de la variable : C:\Program Files\Mvn\mvn-3.9.4
 - Rassurez-vous que le chemin d'accès de la valeur de la variable soit le dossier d'installation de MAVEN

```

## 3 - Vérification de la verison de MAVEN installée
```
 - Ouvrir le terminal de votre choix
 - Saisir la commande suivante :
   - mvn -version

```
