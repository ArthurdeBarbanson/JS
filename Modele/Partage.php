<?php

/**
 * Created by PhpStorm.
 * User: lp
 * Date: 02/02/2016
 * Time: 16:48
 */
class Partage
{
    private $id_album;
    private $id_user;

    /**
     * Partage constructor.
     * @param $id_user
     * @param $id_album
     */
    public function __construct($id_user, $id_album)
    {
        $this->id_user = $id_user;
        $this->id_album = $id_album;
    }


}