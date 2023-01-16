var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
var obj_imagem;
function newImage(){
	fabric.Image.fronURL("Birthdayimage.jpg", function(img){
        obj_imagem=img;
        obj_imagem.scaleToWidth(800);
        obj_imagem.scaleToHeight(600);
        obj_imagem.set({
            top:0,
            left:0
        });
        canvas.add(obj_imagem);
    });
}

function tocar_musica(){
	x.play();
}
