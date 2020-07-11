import React from 'react';

import authData from '../../../helpers/data/authData';
import memoriesData from '../../../helpers/data/memoriesData';
import MemoriesCard from '../../shared/MemoriesCard/MemoriesCard';

import { Link } from 'react-router-dom';

class Memories extends React.Component {
  state = {
    memories: [],
  }

  getMemories = () => {
    const uid = authData.getUid();
   memoriesData.getMemoriesByUid(uid)
    .then((memories) => this.setState({ memories }))
.catch ((err) => console.error('unable to get memories', err))
  }

  componentDidMount() {
    this.getMemories();
  }

  removeMemory = (memoriesId) => {
    memoriesData.deleteMemory(memoriesId)
    .then(() => this.getMemories())
    .catch((err) => console.error('unable to delete memory', err));
  }

  render() {
    const { memories } = this.state;
    const buildMemoriesCards = memories.map((memories)=> (
      <MemoriesCard key = {memories.id} memories={memories} removeMemory={this.removeMemory}/>
    ));
    return(
      <div className="Memories">
        <h1>Memories</h1>
        <div className="d-flex flex-wrap">
        {buildMemoriesCards}
        </div>
        </div>
    );
  }
}
export default Memories;
