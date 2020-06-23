import React from 'react';

import authData from '../../../helpers/data/authData';

import './NewFunFact.scss';

import funFactsData from '../../../helpers/data/funFactsData';

class NewFunFact extends React.Component {
  state = {
    newFunFactImage: '',
    newFunFactYear: '',
    newFunFactDescription: '',
  }

  newFunFactImage = (e) => {
    e.preventDefault();
    this.setState({newFunFactImage: e.target.value });
  }

  newFunFactYear = (e) => {
    e.preventDefault();
    this.setState({newFunFactYear: e.target.value });
  }

  newFunFactDescription = (e) => {
    e.preventDefault();
    this.setState({newFunFactDescription: e.target.value });
  }

  saveNewFunFact = (e) => {
    e.preventDefault();
    const {
      newFunFactImage,
      newFunFactYear,
      newFunFactDescription,
    } = this.state;
  
  const newFunFact = {
    imageUrl: newFunFactImage,
    year: newFunFactYear,
    description: newFunFactDescription,
    uid: authData.getUid(),
  };

  funFactsData.postNewFunFact(newFunFact)
    .then(() => this.props.history.push('/facts'))
    .catch((err) => console.error('unable to add new fun fact', err));
  }

render() {
  const {
    newFunFactImageUrl,
    newFunFactYear,
    newFunFactDescription
  } = this.state;



  return (
    <div className="New col-12">
      <h1>New Fun Fact</h1>
      <form className="col-6 offset-3 text-left">
        <div className="form-group">
        <label htmlFor="new-fun-fact-image">Insert Image Here</label>
      <input
        type="text"
        className="form-control"
        id="new-fun-fact-image"
        value={newFunFactImageUrl}
        onChange={this.newFunFactImage}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-year">Year (Use unknown if unavailable)</label>
      <input
        type="text"
        className="form-control"
        id="new-year"
        value={newFunFactYear}
        onChange={this.newFunFactYear}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-description">Description</label>
      <input
        type="text"
        className="form-control"
        id="new-description"
        value={newFunFactDescription}
        onChange={this.newFunFactDescription}
        />
        </div>
        <button className="btn btn-secondary" onClick={this.saveNewFunFact}>Save Fun Fact</button>
      </form>
    </div>
  );
}
}



export default NewFunFact;