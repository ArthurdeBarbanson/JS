jQuery(function() {

    afficheConversation();
    jQuery('#envoyer').click(function() {
        var nom = jQuery('#nom').text();
        var message = jQuery('#message').val();

        jQuery('#message').val('');
        jQuery('#message').focus();
        $.post('Controleur/chat.php', {'nom':nom, 'message': message }, function() {
            afficheConversation;
        });
    });

    function afficheConversation() {
        jQuery('#conversation').load('ac.htm');

    }
    setInterval(afficheConversation, 4000);
});