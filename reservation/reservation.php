<?php
// on crée un fichier reservation pour insert into les users et un autre en selct * from pour afficher les locations disponibles.

// On récupere les valeurs envoyé par la requete AJAX / formulaire
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$email = $_POST['email'];


// Il faut établir une connexion avec la base de donnée
$connection = new mysqli("localhost", "root", "", "mabdd");
// Il faut préparer la requete SQL
$request = $connection->prepare("INSERT INTO utilisateur (nom, prenom,email) VALUES (?, ?, ?)");
// On renseigne les valeurs dynamiques de la requete
$request->bind_param("sss", $nom, $prenom, $email);
// On execute la requete
$request->execute();

$request->close();
$connection->close();

?>