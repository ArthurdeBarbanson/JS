<?php

class User {
    private $id;
    private $pseudo;
    private $prenom;
    private $nom;
    private $password;


    /**
     * User constructor.
     * @param $pseudo
     * @param $prenom
     * @param $nom
     * @param $password
     */
    public function __construct($pseudo, $prenom, $nom, $password)
    {
        $this->pseudo = $pseudo;
        $this->prenom = $prenom;
        $this->nom = $nom;
        $this->password = $password;
    }



    function __toString()
    {
        return $this->prenom + $this->nom;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getPseudo()
    {
        return $this->pseudo;
    }

    /**
     * @return mixed
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }




}