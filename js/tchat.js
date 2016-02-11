jQuery(function() {

    afficheConversation();
    function afficheConversation() {
        jQuery('#conversation').load('ac.htm');

    }
    jQuery('#envoyer').click(function() {
        var nom = jQuery('#nom').text();
        var message = jQuery('#message').val();
        $.post('Controleur/chat.php', {'nom':nom, 'message': message }, function() {
            afficheConversation();
        });
        jQuery('#message').val('');
    });



    setInterval(afficheConversation, 4000);
});