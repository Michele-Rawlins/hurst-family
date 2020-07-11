import React from 'react';

import authData from '../../../helpers/data/authData';



import memoriesData from '../../../helpers/data/memoriesData';

class NewMemories extends React.Component {
  state = {
    newMemoryImage: '',
    newMemoryYear: '',
    newMemoryDescription: '',
  }

  newMemoryImage = (e) => {
    e.preventDefault();
    this.setState({newMemoryImage: e.target.value });
  }

  newMemoryYear = (e) => {
    e.preventDefault();
    this.setState({newMemoryYear: e.target.value });
  }

  newMemoryDescription = (e) => {
    e.preventDefault();
    this.setState({newMemoryDescription: e.target.value });
  }

  saveNewMemory = (e) => {
    e.preventDefault();
    const {
      newMemoryImage,
      newMemoryYear,
      newMemoryDescription,
    } = this.state;
  
  const newMemory = {
    imageUrl: newMemoryImage,
    year: newMemoryYear,
    description: newMemoryDescription,
    uid: authData.getUid(),
  };

memoriesData.postNewMemory(newMemory)
    .then(() => this.props.history.push('/memories'))
    .catch((err) => console.error('unable to add new memory', err));
  }

render() {
  const {
    newMemoryImageUrl,
    newMemoryYear,
    newMemoryDescription
  } = this.state;



  return (
    <div className="New col-12">
      <h1>New Memory</h1>
      <form className="col-6 offset-3 text-left">
        <div className="form-group">
        <label htmlFor="new-memroy-image">Insert Image Here</label>
      <input
        type="text"
        className="form-control"
        id="new-memory-image"
        value={newMemoryImageUrl}
        onChange={this.newMemoryImage}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-year">Year (Use unknown if unavailable)</label>
      <input
        type="text"
        className="form-control"
        id="new-year"
        value={newMemoryYear}
        onChange={this.newMemoryYear}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-description">Description</label>
      <input
        type="text"
        className="form-control"
        id="new-description"
        value={newMemoryDescription}
        onChange={this.newMemoryDescription}
        />
        </div>
        <button className="btn btn-secondary" onClick={this.saveNewMemory}>Save Memory</button>
      </form>
    </div>
  );
}
}



export default NewMemories;