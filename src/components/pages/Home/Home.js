import React from 'react';

// import authData from '../../../helpers/data/authData';


import './Home.scss';

class Home extends React.Component {
  
    render() {
    
    return (
      <div className="Home container">
        <h1 className="hurst-homepage">Welcome to the Hurst Family</h1>
        <p className="arabian-proverb">Every day of your life is a page of your history. -- Arabian Proverb</p>
        <img className="JamesandElsiePic" src="https://live.staticflickr.com/65535/50027351133_6890848f92_n.jpg" width="400" height="350" alt="jamesAndElsieCloseUp"></img>
        <p className="hurst-beginnings align-left"> In a little farmhouse in Hinkle Haller, the next generation of the Hurst family began. They farmed the land from to survive.  They only went to town for salt, sugar and flour.  They ground their own meal.  They all rose from humble beginnings.  Each was a success in their own right.
        <p className="hurst-beginnings align-left">James Hurst worked in the mines to save enough money to purchase the farm and then built the home pictured below.</p></p>
        <img className="hurst-home-dog align-right" src="https://live.staticflickr.com/65535/50027350968_6cfbcd7cce_n.jpg" width="320" height="318" alt="dogOnPorch"></img>
        <img className="hurst-home align-right" src="https://live.staticflickr.com/65535/50021056126_fc9fb6d89f_n.jpg" width="320" height="318" alt="hursthome"></img>
        <img className="hurst-farm align-right" src="https://live.staticflickr.com/65535/50021056226_221731e6c5_n.jpg" width="320" height="318" alt="familyfarm"></img>
        <p className="hurst-beginnings">All of the Hurst children born to James and Elsie Hurst ended up leaving Hinkle Haller in Fort Knox, Ky. Each of them spread their wings and created a life well lived.  They never lost the importance of family.   Every couple of years, they found a way to come back together, to catch up and to remember.  This page is for them.</p>
        <div className="d-flex flex-wrap">
       </div>
      
    <div className="footer fixed bottom">
       <p>© 2020 - Michele Rawlins</p>
    </div>
    </div>

    );
  }
}

export default Home;