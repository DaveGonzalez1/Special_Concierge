import React from 'react';
import './css/BarraLateral.css'

function App() {

    



  return (
 
    <div class="container white-fondo black">
<head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" type="text/css" href="CSS/styles.css"/>
        <script src="main.js"></script>
        <script type="text/javascript" src="js/function.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/papercss@1.6.1/dist/paper.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <title>Comentarios</title>
</head>
<br></br><br></br><br></br><br></br><br></br>




    <nav class=" fixed split-nav colorAppBar" style={{flex:1}}>
        <p class="fa fa-arrow-left"></p>
        <p class="fa fa-search derecha"></p>
    </nav>

        <div class="card">
         <div class="card-header">
           <img class="img-responsive img-rounded pequeña redonder Muy-Circular" src="https://picsum.photos/768" alt="User picture">
     
          </img>
          <p>  Jean Coutu 
           1 hour ago</p>
        </div>
          <div class="card-body black">
            <p class="card-text black">
            I like 
            </p>
          </div>
        <div class="card-footer">
          <p class="izquierda fa fa-share-alt" id="shared"></p>
          <p class="derecha fa fa-heart" id="corazon"> </p>
          <p class="derecha fa fa-commenting-o" id="comentarios"> &nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
      </div>
</div>


  );
}

export default App;
