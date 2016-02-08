<?php

require_once "../Modele/PdoPicasa.php";

$connexion = new PdoPicasa();
$connexion->ajouterUser($_POST["nom"], $_POST["prenom"], $_POST["pseudo"], $_POST["MDP"]);
header("Location: /JS/");