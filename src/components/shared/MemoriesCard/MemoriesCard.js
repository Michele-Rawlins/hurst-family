import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import memoriesShape from '../../../helpers/propz/memoriesShape';
import './MemoriesCard.scss';

class MemoriesCard extends React.Component {
  static propTypes = {
    memories: memoriesShape.memoriesShape,
    removeMemory: PropTypes.func.isRequired,
    
  }

  render() {
    const { memories, removeMemory } = this.props;
    const singleLink = `/memories/${memories.id}`;
    const editLink = `/memories/edit/${memories.id}`;

    return (
      <div className="MemoriesCard col-4">
      <div className="card">
        <div className="card-body">
          <img className="document-pic img-fluid" src={memories.imageUrl} alt="memories"></img>
          <h5 className="memories-year">{memories.year}</h5>
          <Link className="btn btn-outline-dark" to={singleLink}><i className="fas fa-glasses"></i></Link>
          <Link className="btn btn-outline-light" to={editLink}><i className="fas fa-pen-alt"></i></Link>
          <button className="btn btn-outline-danger" onClick={() => removeMemory(memories.id)}><i className="fas fa-skull-crossbones"></i></button>
          <p className="card-text">{memories.description}</p>
          </div>
        </div>
      </div>
    
    );
  }
}

export default MemoriesCard;