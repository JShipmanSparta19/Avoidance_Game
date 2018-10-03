var obstacle;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


var Bar = function(x, y, width){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = 20;
  this.draw = function(){
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

function FullBar(y, gap){
  var gaploc = gap*33;
  var bar1 = new Bar(0, y, gaploc);
  var bar2 = new Bar(gaploc+33, y, 495-(gaploc+33));
  bar1.draw();
  bar2.draw();
}

function DrawBars(y){
  var gap = Math.floor(Math.random()*15);
  FullBar(y, gap);
}

for (var i = 0; i < 12; i++) {
  var y = i * 40 + 20;
  DrawBars(y);
}
