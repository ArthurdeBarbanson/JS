<?php

class PdoPicasa {

    //Pour les chaines de connexion de type PDO on ne peut pas utiliser de session, pour conserver cette chaîne
    //Il faut conserver les attributs privés en static

    private $serveur = 'mysql:host=localhost';
    private $bdd = 'dbname=picasa';
    private $user = 'root';
    private $mdp = '';
    private $monPdo;
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

    public function getUser() {
        $req = "SELECT * FROM `user`";
        $res = $this->monPdo->query($req);
        $liste = $res->fetchall();
        return $liste;
    }

    public function ajouterUser($nom,$prenom,$psedo,$mdp) {
        $insertAdr = "INSERT INTO `user`(`pseudo`, `prenom`, `nom`, `password`) VALUES ('".$psedo."','".$prenom."','".$nom."','".$mdp."');";
        $this->monPdo->query($insertAdr);
    }

    public function ajouterimage($nom) {
        $insertAdr = "INSERT INTO `photo`(`id`, `description`, `id_album`, `id_user`, `path`, `date_ajout`) VALUES ('','','','','".$nom."');";
        $this->monPdo->query($insertAdr);
    }

    public function getImage() {
        $req = "SELECT path FROM `photo`";
        $res = $this->monPdo->query($req);
        $liste = $res->fetchall();
        return $liste;
    }

}
