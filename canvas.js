let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
  ctx.fillStyle = 'white'; //background color for canvas
  ctx.fillRect(0,0,canvas.width, canvas.height); //background color for canvas
  
  document.querySelector("#drawCircle").addEventListener("click", draw);//calling funtion to draw circle
  document.querySelector("#drawRectangle").addEventListener("click", draw2);
  document.querySelector("#drawLine").addEventListener("click", draw3);
  document.querySelector("#buttonID").addEventListener("click", changeColor);
  document.querySelector("#palette").addEventListener("click", myPalette);
 

  function changeColor(){
    document.querySelector("#pID").style.color = "green";
  }

  //function for circle
  function draw(){ 
    ctx.beginPath();
    ctx.arc(document.querySelector("#x").value, document.querySelector("#y").value, document.querySelector("#slider").value, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = document.querySelector("#palette").value; 
    ctx.fill();
  }

  //function for rectangle
  function draw2(){
    ctx.beginPath();
    ctx.rect(document.querySelector("#x2").value, document.querySelector("#y2").value, document.querySelector("#width").value, document.querySelector("#height").value);
    ctx.fillStyle = document.querySelector("#palette2").value;
    ctx.fill();
    ctx.stroke();
  }

  function draw3(){
    ctx.beginPath();
    ctx.line(38, 31, 30, 200);
    //ctx.moveTo(100,100);
    //ctx.LineTo(300,100);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "red";
    ctx.stroke();
  }

  /*function for triangle
  function draw2(){
    ctx.beginPath();
    ctx.moveTo(75,75);
    ctx.lineTo(10,75);
    ctx.lineTo(10,25);
    ctx.fillStyle = document.querySelector("#palette2").value;
    ctx.fill();
  }*/




