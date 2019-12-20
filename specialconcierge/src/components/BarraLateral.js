import React from 'react';
import './css/BarraLateral.css'

function App() {

    



  return (
 
    <div class="page-wrapper chiller-theme toggled ">
           <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" type="text/css" href="CSS/styles.css"/>
    <script src="main.js"></script>
    <script type="text/javascript" src="js/function.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <title>Special Concierge</title>
</head>
    <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
      <i class="fa fa-bars">  </i>
    </a>
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
       
        <div class="sidebar-header" >
            <div class="sidebar-brand">
                <a href="#"></a>
                <div id="close-sidebar">
                  <i class="fa fa-bars"></i>
                </div>
              </div>
              <br/>
          <div class="user-pic">
            <img class="img-responsive img-rounded" src="https://picsum.photos/768"
              alt="User picture"/>
          </div>
          <div class="user-info">
            <span class="user-name">Mike
              <strong>Cupello</strong>
            </span>
            <span class="user-role">@mike_cup</span>
       
          </div>

          
      
       
        <div class="sidebar-search">
          <div>
            <div class="input-group">
             
              <div class="input-group-append">
               
             
              </div>
            </div>
          </div>
        </div>
   
        <div class="sidebar-menu">
          <ul>
          
            <li class="sidebar">
              <a href="#">
                <i class="fa fa-home"></i>
                <span>Home</span>
              </a>
              <div class="sidebar-submenu">
               
              </div>
            </li>
            <li class="sidebar">
              <a href="#">
                <i class="fa fa-heart-o"></i>
                <span>Favoritos</span>
               
              </a>
              <div class="sidebar-submenu">
               
              </div>
            </li>
            <li class="sidebar">
              <a href="#">
                <i class="fa fa-car"></i>
                <span>Viajes</span>
              </a>
              <div class="sidebar-submenu">
                
              </div>
            </li>
            <li class="sidebar">
              <a href="#">
                <i class="fa fa-user-o"></i>
                <span>Contactanos</span>
              </a>
            
            </li>
            <li class="sidebar">
              <a href="#">
                <i class="fa fa-cog"></i>
                <span>Configuración</span>
              </a>

            </li>
            <li class="header-menu">
              <span></span>
            </li>
            <li>
              <a href="#">
              
                <span>Acerca de nosotros</span>
                
              </a>
            </li>
            <li>
              <a href="#">
             
                <span>Políticas de Privacidad</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-sign-out"></i>
                <span>Cerrar sesión</span>
              </a>
            </li>
          </ul>
        </div>
      
      
    
      <div class="sidebar-footer">
         
      </div>
      </div>
      </div>
    
    </nav>
    
    <main class="page-content">
      <div class="container-fluid">
    
      </div>
  
    </main>
    </div>
  
  
  
  );
}

export default App;
