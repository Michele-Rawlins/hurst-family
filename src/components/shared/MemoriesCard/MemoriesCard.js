import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import memoriesShape from '../../../helpers/propz/memoriesShape';
import './MemoriesCard.scss';

class MemoriesCard extends React.Component {
  static propTypes = {
    memories: memoriesShape.memoriesShape,
  }

  render() {
    const { memories } = this.props;

    return (
      <div className="MemoriesCard col-4">
      <div className="card">
        <div className="card-body">
          <img className="memories-image" src={memories.imageUrl} alt="memories"></img>
          <h5 className="memories-year">{memories.year}</h5>
          <p className="card-text">{memories.description}</p>
          </div>
        </div>
      </div>
    
    );
  }
}

export default MemoriesCard;