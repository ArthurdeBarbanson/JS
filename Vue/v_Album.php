<form id="FormEdit" class="form-inline" action="/JS/Modele/upload.php" method="post" enctype="multipart/form-data">
    <div class="form-group">
        <input type="hidden" name ="MAX FILE SIZE" value="2000000">
        <input id="file" type="file"  name="file[]"  accept="image/*" multiple>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-lg" name="btn_newDemande">Envoyer</button>
    </div>
</form>

<!--<input type="button" value="uploader" onclick="uploader()">-->

<div id="prev"></div>
<div class="progress" style="width: 200px;">
    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
        0%
    </div>
</div>


<script>

    $(document).ready(function(){

        var allowedTypes = ['png', 'jpg', 'jpeg', 'gif'], // type d'image autorisé
            fileInput = document.querySelector('#file'),
            prev = document.querySelector('#prev'),
            progress = document.querySelector('#progress');

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

        }, false);

        $('#FormEdit').on('submit',function(){
            var submit = $.post( "/JS/Modele/upload.php")
                .done(function() {
                    alert( "Upload terminé !" );
                })
                .fail(function() {
                    alert( "erreur lors de l'upload !" );
                });
        });

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
            reader.readAsDataURL(file);
        }

    });
</script>