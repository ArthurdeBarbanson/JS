<?php
$source = "mysql:host=localhost;dbname=picasa";
$utilisateur = "root";
$mot_de_passe = "";

$db = new PDO($source, $utilisateur, $mot_de_passe);
$db->query("SET CHARACTER SET utf8");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

