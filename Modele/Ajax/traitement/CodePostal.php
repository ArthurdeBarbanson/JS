<?php

include'Connexion.php';
$resulta = array();
$y=0;


$req = " SELECT `ville_nom_reel` , `ville_code_postal` FROM `villes_france` ;";
	$st = $db->prepare($req);
	$st->execute();
	$Villes=$st->fetchall();

        foreach($Villes as $uneVilles)
            {

             $resulta[$y]=$uneVilles[1]." ".$uneVilles[0];
                $y= $y+1;
            }




$dataLen = count($resulta);
sort($resulta); // On trie les villes dans l'ordre alphabétique
$results = array(); // Le tableau où seront stockés les résultats de la recherche
// La boucle ci-dessous parcourt tout le tableau $data, jusqu'à un maximum de 10 résultats

for ($i = 0; $i < $dataLen && count($results) < 10; $i++) {
    if (stripos($resulta[$i], $_GET['s']) === 0) { // Si la valeur commence par les mêmes caractères que la recherche
        array_push($results, $resulta[$i]); // On ajoute alors le résultat à la liste à retourner
    }
}



echo  implode('|', $results) ; // Et on affiche les résultats séparés par une barre verticale |



