import React from 'react';

// import authData from '../../../helpers/data/authData';


import './Home.scss';

class Home extends React.Component {
  
    render() {
    
    return (
      <div className="Home container">
        <h1 className="hurst-homepage">Welcome to the Hurst Famly</h1>
        <p className="arabian-proverb">Every day of your life is a page of your history. -- Arabian Proverb</p>
        <img className="JamesandElsiePic" src="https://live.staticflickr.com/65535/50027351133_6890848f92_n.jpg" width="320" height="213" alt="jamesAndElsieCloseUp"></img>
        <div className="d-flex flex-wrap">
       </div>

      </div>
    );
  }
}

export default Home;