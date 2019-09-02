<?php
// on crée un fichier reservation pour insert into les users et un autre en selct * from pour afficher les locations disponibles.

// Il faut établir une connexion avec la base de donnée
$connection = new mysqli("localhost", "root", "", "mabdd");
// Il faut préparer la requete SQL
$request = $connection->prepare("SELECT * FROM ");
// On execute la requete
$request->execute();

$request->close();
$connection->close();

?>