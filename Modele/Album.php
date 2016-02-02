<?php

class Album
{
    private $id;
    private $description;

    /**
     * Album constructor.
     * @param $description
     */
    public function __construct($description)
    {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @param User $user
     */
    public function partageUsers($user){
        new Partage($this->getId(),$user->getId());
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

}