<!-- Page Heading -->
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">
            Amis <small> Je sais pas quoi metre</small>
        </h1>
    </div>
</div>

<fieldset class="wrapper">
    <legend>Un chat en jQuery</legend>
    <div id="conversation"></div><br />

    <form action="#" method="post">
        <div id="nom"> <?php echo $User->getNom() ." ". $User->getPrenom(); ?></div>
        <input type="text" id="message" size="27">
        <button type="submit" id="envoyer" title="Envoyer">envoyer</button>
    </form>

</fieldset>
