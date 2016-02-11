<?php
require_once 'Connexion.php';

$Test= $_GET['pseudo'];

$req1 = "SELECT `pseudo` FROM `user` ";

$st1 = $db->prepare($req1);
$st1->execute();
$Info = $st1->fetchall();

$Valide=False;

foreach ($Pseudos as $unePseudo){
    if($unePseudo === $Test){
        $Valide=True;
    }
}

if($Valide===True){
    echo '<input type="text" name="pseudo" class="form-control" placeholder="Pseudo" onblur="verifPseudo(this)"  value="'.$Test.'" style="background-color:green;" required/>';
}else{
    echo '<input type="text" name="pseudo" class="form-control" placeholder="Pseudo" onblur="verifPseudo(this)"  value="'.$Test.'" style="background-color:red;" required/>';
}