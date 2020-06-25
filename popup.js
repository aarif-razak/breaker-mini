var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var resetGameButton = document.getElementById("resetGame");

checkPageButton.addEventListener('click', function() {
    location.reload();
},false);

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();