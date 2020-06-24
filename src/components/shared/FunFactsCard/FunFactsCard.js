import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import funFactShape from '../../../helpers/propz/funFactShape';
import './FunFactsCard.scss';

class FunFactsCard extends React.Component {
  static propTypes = {
    funFacts: funFactShape.funFactShape,
    removeFunFact: PropTypes.func.isRequired,
  }
  render() {
    const { funFacts, removeFunFact } = this.props;
    const singleLink = `/facts/${funFacts.id}`;
    const editLink = `/facts/edit/${funFacts.id}`;
    return (
      <div className="funFactsCard col-5">
        <div className="card">
          <div className="card-body">
          <img className="document-pic" src={funFacts.imageUrl} alt="item in collection"></img>
            <h5 className="card-year">{funFacts.year}</h5>
            <Link className="btn btn-info" to={singleLink}><i className="fas fa-binoculars"></i></Link>
          <Link className="btn btn-success" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
           <button className="btn btn-danger" onClick={() => removeFunFact(funFacts.id)}><i className="fas fa-trash-alt"></i></button>
            <p className="card-text">{funFacts.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FunFactsCard;
