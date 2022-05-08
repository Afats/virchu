import React from 'react';
import Parser from 'html-react-parser';
import '../css/styles.css'


var nav = `
<div id="mainNav">
<nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: rgba( 255, 255, 255, 0.40 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 11.0px );
-webkit-backdrop-filter: blur( 11.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );">
<div class="container">
  <a class="navbar-brand js-scroll-trigger" href="#page-top">Virchu<sub style="color:black; font-size:8px">BETA</sub></a>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
    aria-label="Toggle navigation">
    Menu
    <i class="fas fa-bars"></i>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#globe">World Map</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#trending">Trending</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#articles">Articles</a></li>
       <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#donate">Donate</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
    </ul>

  </div>
</div>
</nav>
</div>
`;


function Nav_Comp() {
    return (
        <div className="content">{Parser(nav)}</div>
    );
}


export default Nav_Comp;
