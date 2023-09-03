# INSTALLATION JDK20 ECLIPSE TEMURIN

## 1 - Installation de la version LTS
```
 Depuis votre terminal.Executez la commande suivante :
 - brew install --cask temurin

```

## 2 - Installez une version spécifique tapez les commandes suivantes : 
```
  - brew tap homebrew/cask-versions
  - brew install --cast temurin20

```

## 3 - Mettre à jour le path
```
  - shell zsh
  Tapez la commande suivante pour modifier votre path : 
  - vi ~/.zshrc
  - Dans le fichier .zshrc rajouter la ligne suivante  :
  export JAVA_HOME="/Library/Java/JavaVirtualMachines/temurin-20.jdk/Contents/Home"
  - Enregistrer la modification en tapant successivement : "ESC ensuite :wq!"

NB : Pour un shell bash veuillez executer la commande vi ~/.bashrc, le reste du processus reste pareille à celui ci-dessus.
  
```



## 4 - Vérification des versions installées
```
  pour la jvm tapez la commande suivante : java -version
  pour le compilateur : javac -version
 ```