import React from 'react';

import authData from '../../../helpers/data/authData';

import './NewFunFact.scss';

import funFactsData from '../../../helpers/data/funFactsData';

class NewFunFact extends React.Component {
  state = {
    newImageUrl: '',
    newYear: '',
    newDescription: '',
  }

  newFunFactImage = (e) => {
    e.preventDefault();
    this.setState({newImageUrl: e.target.value });
  }

  newFunFactYear = (e) => {
    e.preventDefault();
    this.setState({newYear: e.target.value });
  }

  newFunFactDescription = (e) => {
    e.preventDefault();
    this.setState({newDescription: e.target.value });
  }

render() {
  const {
    newImageUrl,
    newYear,
    newDescription
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
        value={newImageUrl}
        onChange={this.newFunFactImage}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-year">Year (Use unknown if unavailable)</label>
      <input
        type="text"
        className="form-control"
        id="new-year"
        value={newYear}
        onChange={this.newFunFactYear}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-description">Description)</label>
      <input
        type="text"
        className="form-control"
        id="new-description"
        value={newDescription}
        onChange={this.newFunFactDescription}
        />
        </div>
        <button className="btn btn-secondary" onClick={this.saveNewFunFact}>Save Fun Fact</button>
      </form>
    </div>
  );
}

export default NewFunFact;