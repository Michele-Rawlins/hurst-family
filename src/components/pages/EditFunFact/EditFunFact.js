import React from 'react';

import authData from '../../../helpers/data/authData';
import funFactData from '../../../helpers/data/funFactsData';
import './EditFunFact.scss';

class EditFunFact extends React.Component {
  state = {
    newFunFactImage: '',
    newFunFactYear: '',
    newFunFactDescription: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.funFactsId;
    funFactData.getSingleFunFact(editId)
    .then((response) => {
      const funFact = response.data;
      this.setState({
        newFunFactImage: funFact.imageUrl,
        newFunFactYear: funFact.year,
        newFunFactDescription: funFact.description,
      });
    })
    .catch((err) => console.error('unable to edit Fun Fact', err));
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

  updateFunFact = (e) => {
    e.preventDefault();
    const { funFactsId } = this.props.match.params;
  const {
    newFunFactImage,
    newFunFactYear,
    newFunFactDescription,
  } = this.state;

  const updatedFunFact = {
    imageUrl: newFunFactImage,
    year: newFunFactYear,
    description: newFunFactDescription,
    uid: authData.getUid(),
  };

  funFactData.putFunFact(funFactsId, updatedFunFact)
    .then(() => this.props.history.push('/facts'))
    .catch((err) => console.error('unable to edit fun fact', err));

  }

  render() {
    const {
      newFunFactImageUrl,
      newFunFactYear,
      newFunFactDescription,
    } =this.state;

    return (
      <div className="EditFunFact col-12">
      <h1>Edit Fun Fact</h1>
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
        <button className="btn btn-secondary" onClick={this.updateFunFact}>Update Fun Fact</button>
      </form>
    </div>
  );
}
}

 export default EditFunFact;