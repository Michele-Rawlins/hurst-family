import React from 'react';

import authData from '../../../helpers/data/authData';
import memoriesData from '../../../helpers/data/memoriesData';


class EditMemories extends React.Component {
  state = {
    newMemoryImage: '',
    newMemoryYear: '',
    newMemoryDescription: '',
  }

  componentDidMount() {
    const memoriesId = this.props.match.params.memoriesId;
    memoriesData.getSingleMemory(memoriesId)
    .then((response) => {
      const memory = response.data;
      this.setState({
        newMemoryImage: memory.imageUrl,
        newMemoryYear: memory.year,
        newMemoryDescription: memory.description,
      });
    })
    .catch((err) => console.error('unable to edit Memory', err));
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

  updateMemory = (e) => {
    e.preventDefault();
    const { memoriesId } = this.props.match.params;
  const {
    newMemoryImage,
    newMemoryYear,
    newMemoryDescription,
  } = this.state;

  const updatedMemory = {
    imageUrl: newMemoryImage,
    year: newMemoryYear,
    description: newMemoryDescription,
    uid: authData.getUid(),
  };

 memoriesData.putMemory(memoriesId, updatedMemory)
    .then(() => this.props.history.push('/memories'))
    .catch((err) => console.error('unable to edit fun fact', err));

  }

  render() {
    const {
      newMemoryImage,
      newMemoryYear,
      newMemoryDescription,
    } =this.state;

    return (
      <div className="EditMemories col-12">
      <h1>Edit Memory</h1>
      <form className="col-6 offset-3 text-left">
         <div className="form-group">
        <label htmlFor="new-memory-image">Insert Image Here</label>
      <input
        type="text"
        className="form-control"
        id="new-memory-image"
        value={newMemoryImage}
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
        <button className="btn btn-secondary" onClick={this.updateMemory}>Update Memory</button>
      </form>
    </div>
  );
}
}

 export default EditMemories;