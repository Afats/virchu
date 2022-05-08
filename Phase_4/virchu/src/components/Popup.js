// import React, { Component } from 'react';
// import {
//     PopupboxManager,
//     PopupboxContainer
// } from 'react-popupbox';



// function Popup() {

//     function openPopupbox() {
//         const content = (
//             <div>
//             <p className="quotes">Work like you don't need the money.</p>
//             <p className="quotes">Dance like no one is watching.</p>
//             <p className="quotes">And love like you've never been hurt.</p>
//             <span className="quotes-from">― Mark Twain</span>
//             </div>
//         )
//         PopupboxManager.open({ content })
//     }

//     const popupboxConfig = {
//         titleBar: {
//           enable: true,
//           text: 'Popupbox Demo'
//         },
//         fadeIn: true,
//         fadeInSpeed: 500
//       }


//     return (
//         <div>
//         <button onClick={openPopupbox}>Click me</button>
//         <PopupboxContainer {...popupboxConfig}/>
//         </div>
//     );
// }

// export default Popup;

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export const popupBox = () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);

