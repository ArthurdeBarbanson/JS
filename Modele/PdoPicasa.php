<?php

class PdoPicasa {

    //Pour les chaines de connexion de type PDO on ne peut pas utiliser de session, pour conserver cette chaîne
    //Il faut conserver les attributs privés en static

    private  $serveur = 'mysql:host=localhost';
    private  $bdd = 'dbname=picasa';
    private  $user = 'root';
    private  $mdp = '';
    private  $monPdo;
    private static $connexion = null;

//Principe du static 



    public function __construct() {
        $this->monPdo = new PDO($this->serveur . ';' . $this->bdd, $this->user, $this->mdp);
        $this->monPdo->query("SET CHARACTER SET utf8");
        $this->monPdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function __destruct() {
        $this->monPdo = null;
    }

}