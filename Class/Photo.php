<?php

class Photo
{
    private $id;
    private $id_album;
    private $id_user;
    private $path;
    private $date;

    /**
     * Photo constructor.
     * @param $id_album
     * @param $id_user
     * @param $path
     * @param $date
     */
    public function __construct($id_album, $id_user, $path, $date)
    {
        $this->id_album = $id_album;
        $this->id_user = $id_user;
        $this->path = $path;
        $this->date = $date;
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
    public function getIdAlbum()
    {
        return $this->id_album;
    }

    /**
     * @return mixed
     */
    public function getIdUser()
    {
        return $this->id_user;
    }

    /**
     * @return mixed
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * @return mixed
     */
    public function getDate()
    {
        return $this->date;
    }




}