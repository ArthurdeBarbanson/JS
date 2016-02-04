// Fonction permettant de récupérer l'objet XHR
// automatiquement en fonction du navigateur
function getXhr()
{
   var xhr = null;

   // Réupération de l'objet XHR d'Internet Explorer anciennes
   // versions si il existe
   try { xhr = new ActiveXObject('Msxml2.XMLHTTP'); }
   catch (e1)
   {
      // Réupération de l'objet XHR d'Internet Explorer anciennes
      // versions si il existe
      try { xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
      catch (e2)
      {
         // Réupération de l'objet XHR des navigateurs modernes
         // (Firefox, Chrome, Safari...) si il existe
         try { xhr = new XMLHttpRequest(); }
         catch (e3)
         {
            alert("AJAX n'est pas supporté par votre navigateur");
            return false;
          }
      }
   }
return xhr;
}


window.onload = listeMessages();
window.onload = listeAlertes();
function listeMessages()
{   
  
	var xhr = getXhr();
	
	// On assigne une fonction qui, lorsque l'état de la requête change, va traiter le résultat
	xhr.onreadystatechange = function()
		{
                   
		// readyState 4 = requête terminée
		if (xhr.readyState == 4)
		{ 
                    
			// status 200 = page requêtée trouvée
			if (xhr.status == 200){
                        document.getElementById('Message').innerHTML = xhr.responseText;
			// xhr.responseText contient exactement ce que la page PHP renvoi
			// Page non trouvée
                      
                     
                }else
				
                    ajaxBox_setText('Error...');
		}
		};
            
	// Préparation et exécution de la requête
	var url = 'Modele/Ajax/traitement/Message.php';
	xhr.open('GET', url, true);
	xhr.send(null);


}

function listeAlertes()
{   
  
	var xhr = getXhr();
	
	// On assigne une fonction qui, lorsque l'état de la requête change, va traiter le résultat
	xhr.onreadystatechange = function()
		{
                   
		// readyState 4 = requête terminée
		if (xhr.readyState == 4)
		{ 
                    
			// status 200 = page requêtée trouvée
			if (xhr.status == 200){
                        document.getElementById('Alertes').innerHTML = xhr.responseText;
			// xhr.responseText contient exactement ce que la page PHP renvoi
			// Page non trouvée
                      
                     
                }else
				
                    ajaxBox_setText('Error...');
		}
		};
            
	// Préparation et exécution de la requête
	var url = 'Modele/Ajax/traitement/Alerte.php';
	xhr.open('GET', url, true);
	xhr.send(null);


}