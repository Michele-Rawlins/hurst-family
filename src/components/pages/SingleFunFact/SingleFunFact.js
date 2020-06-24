import React from 'react';

import { Link } from 'react-router-dom';
import './SingleFunFact.scss';
import funFactsData from '../../../helpers/data/funFactsData';
import FunFacts from '../FunFacts/FunFacts';

class SingleFunFact extends React.Component {
  state = {
    funFacts: {},
  }

  componentDidMount() {
    const { funFactsId } = this.props.match.params;
    funFactsData.getSingleFunFact(funFactsId)
    .then((response) => this.setState({funFacts: response.data}))
 .catch((err) => console.error('unable to get single fun fact', err));
}
removeFunFact = () => {
  const { funFactsId } = this.props.match.params;
  funFactsData.deleteFunFact(funFactsId)
  .then(() => this.props.history.push('/facts'))
  .catch((err) => console.error('unable to delete single fun fact', err));
}

render () {
  const { funFacts } = this.state;
  const { funFactsId } = this.props.match.params;
  const editLink = `/facts/edit/${funFactsId}`;
return (
  <div className="SingleFunFact">
      <img src={funFacts.imageUrl}></img>
      <h2>{funFacts.year}</h2>
    <Link className="btn btn-success" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
     <button className="btn btn-danger" onClick={this.removeFunFact}><i className="fas fa-trash-alt"></i></button>
      <p>{funFacts.description}</p>
  </div>
  );
}
}

export default SingleFunFact;
