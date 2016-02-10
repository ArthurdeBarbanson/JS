<form action="/JS/Modele/upload.php" method="post" enctype="multipart/form-data">
    <input type="hidden" name ="MAX FILE SIZE" value="2000000">
    <input id="file" type="file"  name="file[]"  accept="image/*" multiple>
    <button type="submit" class="btn btn-primary btn-lg" name="btn_newDemande">Envoyer</button>

</form>

<!--<input type="button" value="uploader" onclick="uploader()">-->

<div id="prev"></div>
<progress id="progress"></progress>

<script>
    (function() {

        function createThumbnail(file) {

            var reader = new FileReader();

            reader.addEventListener('load', function() {

                var imgElement = document.createElement('img');
                imgElement.style.maxWidth = '150px';
                imgElement.style.maxHeight = '150px';
                imgElement.style.margin = '5px';
                imgElement.src = this.result;
                prev.appendChild(imgElement);

            }, false);

            console.log("reader : "+reader);
//            console.log(reader.readAsDataURL(file));
            reader.readAsDataURL(file);
        }

        var allowedTypes = ['png', 'jpg', 'jpeg', 'gif'],
            fileInput = document.querySelector('#file'),
            prev = document.querySelector('#prev');

        fileInput.addEventListener('change', function() {

            var files = this.files,
                filesLen = files.length,
                imgType;
            var formData = new FormData();

            for (var i = 0 ; i < filesLen ; i++) {

                imgType = files[i].name.split('.');
                imgType = imgType[imgType.length - 1];

                if(allowedTypes.indexOf(imgType) != -1) {
                    createThumbnail(files[i]);
                    formData.append('file', fileInput.files[i]);
                }

            }

            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/JS/Modele/upload.php'); // Rappelons qu'il est obligatoire d'utiliser la méthode POST quand on souhaite utiliser un FormData

            xhr.upload.addEventListener('progress', function(e) {
                progress.value = e.loaded;
                progress.max = e.total;
            }, false);

            xhr.addEventListener('load', function() {
                alert('Upload terminé !');
            }, false);

            xhr.send(formData);

        }, false);



    })();

    function upload(){

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/JS/Modele/upload.php'); // Rappelons qu'il est obligatoire d'utiliser la méthode POST quand on souhaite utiliser un FormData

        xhr.upload.addEventListener('progress', function(e) {
            progress.value = e.loaded;
            progress.max = e.total;
        }, false);

        xhr.addEventListener('load', function() {
            alert('Upload terminé !');
        }, false);

        xhr.send(formData);
    }

</script>