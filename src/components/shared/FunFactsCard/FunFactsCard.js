import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import funFactShape from '../../../helpers/propz/funFactShape';
import './FunFactsCard.scss';

class FunFactsCard extends React.Component {
  static propTypes = {
    funFactShape: funFactShape.funFactShape,
  }
  render() {
    const { funFacts } = this.props;
    return (
      <div className="funFactsCard col-4">
        <div className="card">
          <div className="card-body">
          <img className="document-pic" src={funFacts.imageUrl} alt="item in collection"></img>
            <h5 className="card-year">{funFacts.year}</h5>
            <p className="card-text">{funFacts.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FunFactsCard;
