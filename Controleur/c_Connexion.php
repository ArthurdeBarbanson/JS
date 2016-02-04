<?php
session_start();
require_once "../Modele/PdoPicasa.php";

$connexion = new PdoPicasa();
$Personne = $connexion->getUser();

$ID= $_POST['ID'];
$MDP= $_POST['PWD'];

$Valide = False;

foreach($Personne as $unPersonne)
            { 

             if($unPersonne["pseudo"]==$ID && $unPersonne["password"]==$MDP){
                 $Valide=True;
                $_SESSION['user'] = array($unPersonne["pseudo"],$unPersonne["nom"],$unPersonne["prenom"],$unPersonne["password"]);
                
             }
            }
           
if($Valide===true){
    header("Location: /JS/?uc=Interface");
}else{
    header("Location: /JS/");
}