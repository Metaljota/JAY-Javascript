let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
  document.querySelector("#drawCircle").addEventListener("click", draw);
  
  function draw(){
    ctx.beginPath();
    ctx.arc(100,100, 20, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
  }





/*THE CANVAS AND SOME SHAPES

/*window.onload = function(){
  let canvas = document.getElementById("myCanvas");
  let context = canvas.getContext("2d");
  context.lineWidth = 15;// set the line width to 10 pixels
  context.strokeStyle = "blue";// set the line color to blue
    context.moveTo(100, canvas.height - 50);
    context.bezierCurveTo(150, 10, 420, 10, 420, 180);
  context.stroke();
};

/*context.quadraticCurveTo(canvas.width / 2, -50, canvas.width - 100, canvas.height - 50);*/

/*context.arc(canvas.width / 2, canvas.height / 2 + 40, 80, 1.1 * Math.PI, 1.9 * Math.PI, false);*/

  /*  context.moveTo(50, canvas.height - 50);// position the drawing cursor
  context.lineTo(canvas.width - 50, 50);
  context.stroke();
      };*/


