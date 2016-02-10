<?php //C'est $_FILES qui "transporte" nos fichiers

// c'est le chemin ou sont uploder les images
$chemin='/home/arthur/Documents/Cours/JavaScript/imagestest/';

if(!empty($_FILES)){
    //on compte le nombre de fichiers re�u par le serveur
    $nb=count($_FILES['file']['name']);
    if($nb>0){
        //on boucle sur le nombre de fichier
        for($i=0;$i<$nb;$i++){
            //$_FILES['file']['error'][$i] retourne 0 si pas d'erreurs et retourne 1,2,3 ou 4 en cas d'erreur
            if ($_FILES['file']['error'][$i]>0) {
                switch ($_FILES['file']['error'][$i]){
                    case 1:
                        echo $_FILES['file']['name'][$i]."<h2> Erreur : le fichier d�passe la limite autoris�e par le serveur !</h2>";
                        break;
                    case 2:
                        echo $_FILES['file']['name'][$i]." <h2>Erreur : le fichier d�passe la limite autoris�e !</h2>";
                        break;
                    case 3:
                        echo $_FILES['file']['name'][$i]." <h2>Erreur : l'envoi du fichier a �t� interrompu pendant le transfert !</h2>";
                        break;
                    case 4:
                        echo "pas d'erreurs";
                        break;
                }
            }
            else
            {
                $image=$_FILES['file']['name'][$i];
                //on d�place les fichiers du repertoire temporaire vers un repertoire "sauv_up"
                $copie=move_uploaded_file($_FILES['file']['tmp_name'][$i],$chemin.$image);

                //enregistrement bd

            }
        }
    }
}
header('Location: /JS/?uc=Album');