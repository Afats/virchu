import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import app from './App'

/* ------------------------------- Componenets ------------------------------ */

import Nav_Comp from './components/nav_comp'
import Landing_Comp from './components/landing_comp'
import Globe_comp from './components/globe_comp'
import Article_comp from './components/article_comp'
import Carousel_Comp from './components/carousel_comp'
import Footer_comp from './components/footer_comp'
import Checkout_Comp from './components/payment_comp'
import Feed_Comp from './components/feed_comp'
// import leftData from  './components/leftSidebar'

/* --------------------------------- Styling -------------------------------- */

import './css/fonts.css'
import './css/styles.css'
import './css/thecardstyle.css'
/*import './components/assets/buttons.scss'
import './components/assets/navbar.scss'*/

/*-----*/



/* -------------------------------------------------------------------------- */
/*                               Navigation Bar                               */
/* -------------------------------------------------------------------------- */


ReactDOM.render(
  <React.StrictMode>
    <Nav_Comp/>
  </React.StrictMode>,
  document.getElementById('nav_comp')
);


/* -------------------------------------------------------------------------- */
/*                                   Header                                   */
/* -------------------------------------------------------------------------- */

ReactDOM.render(
  <React.StrictMode>
    <Landing_Comp/>
  </React.StrictMode>,
  document.getElementById('landing_comp')
);

/* -------------------------------------------------------------------------- */
/*                                  Carousel                                  */
/* -------------------------------------------------------------------------- */

ReactDOM.render(
  <React.StrictMode>
    <Carousel_Comp/>
  </React.StrictMode>,
  document.getElementById('carousel_comp')
);


/* -------------------------------------------------------------------------- */
/*                                    Globe                                   */
/* -------------------------------------------------------------------------- */


ReactDOM.render(
  <React.StrictMode>
    <Globe_comp/>
  </React.StrictMode>,
  document.getElementById('globe_comp')
);



/* -------------------------------------------------------------------------- */
/*                         Static articles and footer                         */
/* -------------------------------------------------------------------------- */
ReactDOM.render(
  <React.StrictMode>
    <Feed_Comp/>
  </React.StrictMode>,
  document.getElementById('feed_comp')
);



/* -------------------------------------------------------------------------- */
/*                                    Payment form                            */
/* -------------------------------------------------------------------------- */

ReactDOM.render(

  <React.StrictMode>
    <Checkout_Comp/>
  </React.StrictMode>,
  document.getElementById('checkout_form')
);

/* -------------------------------------------------------------------------- */
/*                         Static articles and footer                         */
/* -------------------------------------------------------------------------- */

ReactDOM.render(
  <React.StrictMode>
    <Article_comp/>
  </React.StrictMode>,
  document.getElementById('article_comp')
);


ReactDOM.render(
  <React.StrictMode>
    <Footer_comp/>
  </React.StrictMode>,
  document.getElementById('footer_comp')
);


/* ----------------------------------- end ---------------------------------- */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
