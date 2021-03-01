console.log(window.location.search);

var urlParams = new URLSearchParams(window.location.search);

var imageUrl = "/img/1.png";
var imageName = '1.png';
if(urlParams.has('img'))
{
    imageName = urlParams.get('img');
}

imageUrl = "img/" + imageName;
var imgDetailsImage = document.getElementById('detailsImage');
imgDetailsImage.src = imageUrl;
console.log(imageUrl);