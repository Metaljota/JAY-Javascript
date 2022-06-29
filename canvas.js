// Jay Sierra 24 June 2022
//This script provide the functions needed for the Abstract Art Competition website. 

let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
  
  document.querySelector("#drawCircle").addEventListener("click", drawCircle);//calling a funtion to draw a circle
  document.querySelector("#drawRectangle").addEventListener("click", drawRectangle);//calling a funtion to draw a rectangle
  document.querySelector("#drawLine").addEventListener("click", drawLine);//calling a funtion to draw a line
  document.querySelector("#language").addEventListener("click", ChangeLanguage);
  document.querySelector("#cnfpwd").addEventListener('change', validatePassword);

  function myPalette(){
    console.log(document.querySelector("#palette").value)
  }
 
  //Saving the art function
  let button = document.getElementById('btn-download');
  button.addEventListener('click', function (e) {
      let dataURL = canvas.toDataURL('image/png');
      button.href = dataURL;
  });

  //Function for changing language
  function ChangeLanguage(){
    if (document.querySelector("#language").value == "english"){
      document.querySelector("#title").innerHTML = "Abstract Art Competition";
      document.querySelector("#title").style.color = "green";
      document.querySelector("#title2").innerHTML = "Welcome to the online Art Competition";
      document.querySelector("#title3").innerHTML = "Instructions";
      document.querySelector("#instructions").innerHTML = "Please draw you art in the canvas bellow using the provided tools.<br>When finished, sleect Save Art to download your art or Clear to start again.<br>Use the form to write down your personal details, upload your art file and click submit. Good Luck!!!";
      document.querySelector("#drawCircle").innerHTML = "Click here to draw a Circle";
      document.querySelector("#drawRectangle").innerHTML = "Click here to draw a Rectangle";
      document.querySelector("#drawLine").innerHTML = "Click here to draw a Line";
    }
    else if (document.querySelector("#language").value == "spanish"){
      document.querySelector("#title").innerHTML = "Competicion de Arte Abstracto";
      document.querySelector("#title").style.color = "orange";
      document.querySelector("#title2").innerHTML = "Bienvenidos a la competicion en linea de arte";
      document.querySelector("#title3").innerHTML = "Instrucciones";
      document.querySelector("#instructions").innerHTML = "Porfavor dibuje su arte an el siguiente lienzo con las herramientas presentes.<br>Cuando termine seleccione Save Art para descargar su arte o Clear para dibujar de nuevo.<br>Utilice el formulario para escribir sus datos personales, carge el archivo final y seleccione Submit. Buena Suerte!!!";
      document.querySelector("#drawCircle").innerHTML = "Seleccione para dibujar Circulo";
      document.querySelector("#drawRectangle").innerHTML = "Seleccione para dibujar Rectangulo";
      document.querySelector("#drawLine").innerHTML = "Selecciones para dibujar linea";
    }
  } 

  //to clear the canvas
  document.getElementById("clear").addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, false);

  //an iteration for changing colour on "Instruction"  and wellcome text words. 
  const titles = document.querySelectorAll(".titleA");
  titles.forEach(mouse);
  function mouse(currentValue, index, arr) {
    arr[index].addEventListener ("mouseover", function(){
      currentValue.style.color = "red";
    });
    arr[index].addEventListener ("mouseout", function(){
      currentValue.style.color = "black";
    });
    }  
   

  //function for circle
  function drawCircle(){
    let coordinateX = document.querySelector("#x").value;
    let coordinateY = document.querySelector("#y").value;
    let theslider = document.querySelector("#slider").value;
     
    ctx.beginPath();
    ctx.arc(coordinateX, coordinateY, theslider, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = document.querySelector("#palette").value; 
    ctx.fill();
  }

  //function for rectangle
  function drawRectangle(){
    let coordinateX = document.querySelector("#x2").value;
    let coordinateY = document.querySelector("#y2").value;
    let theWidth = document.querySelector("#width").value;
    let theHeight = document.querySelector("#height").value;

    ctx.beginPath();
    ctx.rect(coordinateX, coordinateY, theWidth, theHeight);
    ctx.fillStyle = document.querySelector("#palette2").value;
    ctx.fill();
    ctx.stroke();
  }

  //funtion for line
  function drawLine(){
    ctx.strokeStyle = document.querySelector("#palette3").value;
    ctx.lineWidth = document.querySelector("#slider2").value;
    ctx.beginPath();
    ctx.moveTo(document.querySelector("#x3").value, document.querySelector("#y3").value);
    ctx.lineTo(document.querySelector("#x4").value, document.querySelector("#y4").value);
    ctx.stroke();
    }

  //function to validate the password
    function validatePassword(){
    if(document.querySelector("#pwd").value != document.querySelector("#cnfpwd").value) {
      document.querySelector("#cnfpwd").setCustomValidity("Passwords Don't Match");
      document.querySelector("#cnfpwd").reportValidity();
      document.querySelector("#pwd").value ='';
      document.querySelector("#cnfpwd").value ='';
    } 
    else {
      document.querySelector("#cnfpwd").setCustomValidity('');
      document.querySelector("#cnfpwd").reportValidity();
    } 
  }
    






