// Fonction permettant de récupérer l'objet XHR
// automatiquement en fonction du navigateur
function getXhr()
{
    var xhr = null;

    // Réupération de l'objet XHR d'Internet Explorer anciennes
    // versions si il existe
    try {
        xhr = new ActiveXObject('Msxml2.XMLHTTP');
    }
    catch (e1)
    {
        // Réupération de l'objet XHR d'Internet Explorer anciennes
        // versions si il existe
        try {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        catch (e2)
        {
            // Réupération de l'objet XHR des navigateurs modernes
            // (Firefox, Chrome, Safari...) si il existe
            try {
                xhr = new XMLHttpRequest();
            }
            catch (e3)
            {
                alert("AJAX n'est pas supporté par votre navigateur");
                return false;
            }
        }
    }
    return xhr;
}

(function() {


})();

var searchElement = document.getElementById('search'),
        results = document.getElementById('results'),
        selectedResult = -1, // Permet de savoir quel résultat est sélectionné : -1 signifie Â« aucune sélection Â»
        previousRequest, // On stocke notre précédente requête dans cette variable
        previousValue = searchElement.value; // On fait de même avec la précédente valeur

function getResults(keywords) { // Effectue une requête et récupère les résultats

    var xhr = new XMLHttpRequest();

    xhr.open('GET', './modele/Ajax/traitement/CodePostal.php?s=' + encodeURIComponent(keywords));
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            displayResults(xhr.responseText);
        }
    };
    xhr.send(null);



    return xhr2;
}


function displayResults(response) { // Affiche les résultats d'une requête

    results.style.display = response.length ? 'block' : 'none'; // On cache le conteneur si on n'a pas de résultats
    if (response.length) { // On ne modifie les résultats que si on en a obtenu
        response = response.split('|');
        var responseLen = response.length;
        results.innerHTML = ''; // On vide les résultats
        for (var i = 0, div; i < responseLen; i++) {


            Lienvide = document.createElement('div');                 //créer le lien pour avoir le droight


            var onclickA = document.createAttribute("class");
            onclickA.value = "btn-info-autocomplation";
            Lienvide.setAttributeNode(onclickA);

            div = results.appendChild(Lienvide);
            div.innerHTML = response[i];

            div.onclick = function() {
                chooseResult(this);
            };
        }
    }
}

function chooseResult(result) { // Choisit un des résultats d'une requête et gère tout ce qui y est attaché

    searchElement.value = previousValue = result.innerHTML; // On change le contenu du champ de recherche et on enregistre en tant que précédente valeur
    results.style.display = 'none'; // On cache les résultats
    result.className = ''; // On supprime l'effet de focus
    selectedResult = -1; // On remet la sélection à  zéro
    searchElement.focus(); // Si le résultat a été choisi par le biais d'un clic, alors le focus est perdu, donc on le réattribue

}




searchElement.onkeyup = function(e) {
    node = document.getElementById("Visib");
    node.style.visibility = "visible";
    e = e || window.event; // On n'oublie pas la compatibilité pour IE

    var divs = results.getElementsByTagName('div');

    if (e.keyCode == 38 && selectedResult > -1) { // Si la touche pressée est la flèche « haut »

        divs[selectedResult--].className = '';

        if (selectedResult > -1) { // Cette condition évite une modification de childNodes[-1], qui n'existe pas, bien entendu
            divs[selectedResult].className = 'result_focus';
        }

    }

    else if (e.keyCode == 40 && selectedResult < divs.length - 1) { // Si la touche pressée est la flèche « bas »

        results.style.display = 'block'; // On affiche les résultats

        if (selectedResult > -1) { // Cette condition évite une modification de childNodes[-1], qui n'existe pas, bien entendu
            divs[selectedResult].className = '';
        }

        divs[++selectedResult].className = 'result_focus';

    }

    else if (e.keyCode == 13 && selectedResult > -1) { // Si la touche pressée est « Entrée »

        chooseResult(divs[selectedResult]);

    }

    else if (searchElement.value != previousValue) { // Si le contenu du champ de recherche a changé

        previousValue = searchElement.value;

        if (previousRequest && previousRequest.readyState < 4) {
            previousRequest.abort(); // Si on a toujours une requête en cours, on l'arrête
        }

        previousRequest = getResults(previousValue); // On stocke la nouvelle requête

        selectedResult = -1; // On remet la sélection à  zéro à  chaque caractère écrit

    }

}


function remplirVille() {

    var code = document.getElementById("search");
    var codeString = code.value;
    var CP = codeString.substring(0, 5);
    var InputVille = document.getElementById('ville');
    var ville = codeString.substring(codeString.lastIndexOf(" "));

    InputVille.value = ville;
    code.value = CP;
}

window.onload = afficherPays();
function afficherPays()
{

    var xhr = getXhr();

    // On assigne une fonction qui, lorsque l'état de la requête change, va traiter le résultat
    xhr.onreadystatechange = function()
    {

        // readyState 4 = requête terminée
        if (xhr.readyState == 4)
        {

            // status 200 = page requêtée trouvée
            if (xhr.status == 200) {

                document.getElementById('Pays').innerHTML = xhr.responseText;
                // xhr.responseText contient exactement ce que la page PHP renvoi
                // Page non trouvée
            }

            else
                ajaxBox_setText('Error...');
        }
    };

    // Préparation et exécution de la requête
    var url = 'Modele/Ajax/traitement/Pays.php';
    xhr.open('GET', url, true);
    xhr.send(null);


}

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#F00";
   else
      champ.style.backgroundColor = "#0F0";
}

function verifText(champ)
{

    if (champ.value.length < 2 || champ.value.length > 25)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }

}
function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}


function verifForm(f)
{
   var textOk = verifText(f.pseudo);
   var mailOk = verifMail(f.email);

   if(textOk && mailOk){
    return true;
}
   else
   {
      alert("Teh languette ton moment rempli bien formulaire la moukate la !");
      return false;
   }
}


function verifPseudo(champ)
{
    verifText(champ);
    alert("ok");
    var params = '?pseudo=' + champ;
    var xhr = getXhr();

    // On assigne une fonction qui, lorsque l'état de la requête change, va traiter le résultat
    xhr.onreadystatechange = function()
    {

        // readyState 4 = requête terminée
        if (xhr.readyState == 4)
        {

            // status 200 = page requêtée trouvée
            if (xhr.status == 200) {

                document.getElementById('Pseudo').innerHTML = xhr.responseText;
                // xhr.responseText contient exactement ce que la page PHP renvoi
                // Page non trouvée
            }

            else
                ajaxBox_setText('Error...');
        }
    };

    // Préparation et exécution de la requête
    var url = 'Modele/Ajax/traitement/Pseudo.php'+ params;
    xhr.open('GET', url, true);
    xhr.send(null);


}









document.getElementById("telephone").addEventListener("keyup", myFunction);

function myFunction() {
    var x = document.getElementById("telephone");
    if (x.value.length == 2) {
        x.value = x.value + ' ';
    }
    if (x.value.length == 5) {
        x.value = x.value + ' ';
    }
    if (x.value.length == 8) {
        x.value = x.value + ' ';
    }
    if (x.value.length == 11) {
        x.value = x.value + ' ';
    }
}
document.getElementById("Mobile").addEventListener("keyup", myFunction2);

function myFunction2() {
    var x = document.getElementById("Mobile");
    if (x.value.length == 2) {
        x.value = x.value + ' ';
    }
    if (x.value.length == 5) {
        x.value = x.value + ' ';
    }
    if (x.value.length == 8) {
        x.value = x.value + ' ';
    }
    if (x.value.length == 11) {
        x.value = x.value + ' ';
    }
}


