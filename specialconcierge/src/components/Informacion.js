import React from 'react';
import './css/BarraLateral.css'

function App() {

    



  return (
 
 <div>
     <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" type="text/css" href="CSS/styles.css"/>
        <script src="main.js"></script>
        <script type="text/javascript" src="js/function.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <title>Informacion</title>

</head>
<center>
        <a href="#miModal" class="fa fa-cutlery"></a>

        </center>

        
        <div id="miModal" class="modal">
           
          <div class="modal-contenido redonder">
                <a class="fa fa-times white" href="#"></a>
              <center>
                    <img class="mediana center" id="pequeña" src="https://picsum.photos/768"/>
                    <h2>Cafeteria Chalco</h2>
                    <button class="colorButton white">Mas información</button>
                    <p class="clasificacion">
                            <input id="radio1" type="radio" name="estrellas" value="5"
                            />
                            <label  class="fa fa-star" for="radio1"></label>
                            <input id="radio2" type="radio" name="estrellas" value="4"/>
                            <label class="fa fa-star"  for="radio2"></label>
                            <input id="radio3" type="radio" name="estrellas" value="3"/>
                            <label class="fa fa-star"  for="radio3"></label>
                            <input id="radio4" type="radio" name="estrellas" value="2"/>
                            <label class="fa fa-star"  for="radio4"></label>
                            <input id="radio5" type="radio" name="estrellas" value="1"/>
                            <label class="fa fa-star"  for="radio5"></label>
                          </p>
                    <button class="btn colorButton white">¿Cómo llegar?</button>
              </center>
       
           
           
           
          </div>  
        </div>
        </div>

  );
}

export default App;
