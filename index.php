<?php

// Démarage d'une séssion obligatoir pour instancier une nouvelle connexion sur l'intranet
session_start();

//PdoPrelem est le modèle permettant la liaison avec la base de donné
require_once "Modele/PdoPicasa.php";
require_once "Class/User.php";



// Condition pour appel de la page d'acceuil vers l'intranet
if (!isset($_REQUEST['uc'])) {
    $uc = 'Acceuil';
} else {
    $newUser=$_SESSION['user'];
    $User = new User($newUser[0],$newUser[2],$newUser[1],$newUser[3]);
    $uc = $_REQUEST['uc'];
    $connexion = new PdoPicasa();
}

// Application de la méthode MVC
    switch ($uc) {
        case 'Acceuil': {
            include("Vue/v_Acceuil.html");
            break;
        }

        case $uc : {
            
            //Chaque page aura la même entete et menu
                include("Vue/design/v_entete.php");
                include("Vue/design/v_menu.php");

                include("Controleur/c_" . $uc .".php");

            //Appel du pied ed page
                include("Vue/design/v_piedpage.php");
            break;
        }
    }















