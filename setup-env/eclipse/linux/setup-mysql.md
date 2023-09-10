# INSTALLATION MYSQL (UBUNTU)

## 1 - Téléchargement du repositories
```
 Dans votre terminal saisissez la commande suivante  : 
  " wget -c https://dev.mysql.com/get/mysql-apt-config_0.8.11-1_all.deb"
```

## 2 - Installation du repositories mysql
```
  Dans votre terminal saisissez la commande suivante  :  "sudo dpkg -i mysql-apt-config_0.8.11-1_all.deb"
  Dans la liste de choix qui apparaît choisissez MYSQL Server & Cluster et faites OK
```

## 3 - Rafraîchissement du repositories
```
  Dans votre terminal saisissez la commande suivante  : " sudo apt-get update "
```

## 4 - Installation de Mysql
```
  Dans votre terminal saisissez la commande suivante : "sudo apt-get install mysql-server"
```

# 5 - Connexion à la bd
```
  Dans votre terminal entrez la commande suivante : "mysql -u root"
Vous devriez voir apparaître les informations sur votre version de mysql
```

NB : Cette installation est non sécurisé etant donné que nous sommes en mode dévéloppement