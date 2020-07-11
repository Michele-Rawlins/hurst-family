import React from 'react';

import { Link } from 'react-router-dom';

import memoriesData from '../../../helpers/data/memoriesData';
import Memories from '../Memories/Memories';

class SingleMemory extends React.Component {
  state = {
    memories: {},
  }

  componentDidMount() {
    const { memoriesId } = this.props.match.params;
    memoriesData.getSingleMemory(memoriesId)
    .then((response) => this.setState({memories: response.data}))
 .catch((err) => console.error('unable to get single memory', err));
}
removeMemory = () => {
  const { memoriesId } = this.props.match.params;
  memoriesData.deleteMemory(memoriesId)
  .then(() => this.props.history.push('/memories'))
  .catch((err) => console.error('unable to delete single memory', err));
}

render () {
  const { memories } = this.state;
  const { memoriesId } = this.props.match.params;
  const editLink = `/memories/edit/${memoriesId}`;
return (
  <div className="SingleMemory">
      <img src={memories.imageUrl}></img>
      <h2>{memories.year}</h2>
    <Link className="btn btn-success" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
     <button className="btn btn-danger" onClick={this.removeMemory}><i className="fas fa-trash-alt"></i></button>
      <p>{memories.description}</p>
  </div>
  );
}
}

export default SingleMemory;
