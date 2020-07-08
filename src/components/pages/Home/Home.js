import React from 'react';

// import authData from '../../../helpers/data/authData';


import './Home.scss';

class Home extends React.Component {
  
    render() {
    
    return (
   <div className="Home container">
    <img className="JamesandElsiePic img-fluid" src="https://live.staticflickr.com/65535/50027351133_6890848f92_n.jpg" fluid alt="jamesAndElsieCloseUp"></img>
        <p className="hurst-beginnings align-left"> In a little farmhouse in Hinkle Haller, the next generation of the Hurst family began. This home was a one room home.  They eventually moved a few hillsides over to Jarvis Store. James Hurst worked in the mines to save enough money to purchase the farm and then built the home pictured below which was located in Knox Fork Kentucky.  It is named after the fork in the river.They farmed the land to survive.  James Hurst worked stripping tobacco in the winter time.  They only went to town for salt, sugar and flour.  They ground their own meal.  They all rose from humble beginnings.  Each was a success in their own right.</p>
        <div className="d-flex flex-wrap photo-container">
        <img className="hurst-home-dog align-left" src="https://live.staticflickr.com/65535/50027350968_87de84c671_n.jpg" width="320" height="320" alt="dogOnPorch"></img>
        <img className="hurst-home align-center" src="https://live.staticflickr.com/65535/50051590092_5b8d0ab463_n.jpg" width="320" height="320" alt="hurstfamily"></img>
        <img className="hurst-farm align-center"  src="https://live.staticflickr.com/65535/50021056226_417f9ef1fb_n.jpg" width="320" height="320" alt="familyfarm"></img>
        <img className="hurst-farm align-right"  src="https://live.staticflickr.com/65535/50050890183_ab0a771b77_n.jpg" width="320" height="320" alt="Knox Fort"></img>
       </div>
        
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25501.195348338802!2d-83.93105204246629!3d36.97042895186226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885cb7f7643662b7%3A0x6b9093a732e10457!2sKnox%20Fork!5e0!3m2!1sen!2sus!4v1593273394268!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
        <p className="hurst-beginnings">All of the Hurst children born to James and Elsie Hurst ended up leaving Jarvis Store in Knox Fork, Ky. Each of them spread their wings and created a life well lived.  They never lost sight of the importance of family.   Every couple of years, they found their way to come back together, to catch up and to remember.  This page is for them.</p>
      
    <div className="footer fixed bottom">
       <p>© 2020 - Michele Rawlins</p>
    </div>
       </div>
  
    );
  }
}

export default Home;