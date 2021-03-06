import React from 'react';

import authData from '../../../helpers/data/authData';
import funFactsData from '../../../helpers/data/funFactsData';
import FunFactsCard from '../../shared/FunFactsCard/FunFactsCard';
import { Link } from 'react-router-dom';
class FunFacts extends React.Component {
  state = {
    funFacts: [],
  }
  getFunFacts = () => {
    // const uid = authData.getUid();
    funFactsData.getFunFactsData()
    .then((funFacts) => this.setState({ funFacts }))
    .catch((err) => console.error('unable to get funFacts:',err))
  }

  componentDidMount() {
    this.getFunFacts();
  }

  removeFunFact = (funFactsId) => {
    funFactsData.deleteFunFact(funFactsId)
    .then(() => this.getFunFacts())
    .catch((err) => console.error('unable to delete fun fact', err));
  }

  render() {
    const { funFacts } = this.state;
    const buildFunFactsCards = funFacts.map((funFacts) => (
      <FunFactsCard key ={funFacts.id} funFacts={funFacts} removeFunFact={this.removeFunFact}/>
    ));
    return (
      <div className="FunFacts">
        <h1>Fun Facts</h1>
        <Link to='facts/new'><button className="addFunFact">Add Fun Fact</button></Link>
        <div className="d-flex flex-wrap">
          {buildFunFactsCards}
        </div>
      </div>
    );
  }
}
export default FunFacts;
