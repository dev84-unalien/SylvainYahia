<?php

header("Access-Control-Allow-Origin: *");

// on crée un fichier reservation pour insert into les users et un autre en selct * from pour afficher les locations disponibles.

// Il faut établir une connexion avec la base de donnée
$connection = new mysqli("localhost", "root", "", "sylvain_yahia");
// Il faut préparer la requete SQL
$request = $connection->prepare("SELECT titre FROM location");
$request->execute();

$titre = null;
 $request->bind_result($titre);

$titres = []; 
while ($request->fetch()) { 
    $titres[] = ["titre" => $titre]; 
}

echo json_encode($titres); 

$request->close();
$connection->close();

?>