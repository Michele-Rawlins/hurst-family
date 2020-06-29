import React from 'react';

import authData from '../../../helpers/data/authData';

import familyMembersData from '../../../helpers/data/familyMembersData';

class NewFamilyMember extends React.Component {
  state = {
    newName: '',
    newProfession: '',
    newSpouse: '',
    newFamilyImage: '',
    newBirthdate: '',
    newDeath: '',
    newChildren: '',
  }

newName = (e) => {
  e.preventDefault();
  this.setState({newName: e.target.value});
}

newProfession = (e) => {
  e.preventDefault();
  this.setState({newProfession: e.target.value});
}
newSpouse = (e) => {
  e.preventDefault();
  this.setState({newSpouse: e.target.value});
}

newFamilyImage = (e) => {
  e.preventDefault();
  this.setState({newFamilyImage: e.target.value});
}

newBirthdate = (e) => {
  e.preventDefault();
  this.setState({newBirthdate: e.target.value});
}

newDeath = (e) => {
  e.preventDefault();
  this.setState({newDeath: e.target.value});
}

newChildren = (e) => {
  e.preventDefault();
  this.setState({newChildren: e.target.value});
}

saveNewFamilyMember = (e) => {
  e.preventDefault();
  const {
    newName,
    newProfession,
    newSpouse,
    newFamilyImage,
    newBirthdate,
    newDeath,
    newChildren,

  } = this.state;

const newFamilyMember = {
  name: newName,
  profession: newProfession,
  spouse: newSpouse,
  imageUrl: newFamilyImage,
  birthdate: newBirthdate,
  death: newDeath,
  children: newChildren,
  uid: authData.getUid(),
};

familyMembersData.postNewFamilyMember(newFamilyMember)
  .then(() => this.props.history.push('family'))
  .catch((err) => console.error('i=unable to add new family member', err));
}

render() {
  const {
    newName,
    newProfession,
    newSpouse,
    newImageUrl,
    newBirthdate,
    newDeath,
    newChildren,
  } = this.state;

  return (
    <div className="New col-12">
      <h1>New Family Member</h1>
      <form className="col-6 offset-3 text-left">
        <div className="form-group">
        <label htmlFor="new-name">Name</label>
      <input
        type="text"
        className="form-control"
        id="new-name"
        value={newName}
        onChange={this.newName}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-profession">Profession</label>
      <input
        type="text"
        className="form-control"
        id="new-name"
        value={newProfession}
        onChange={this.newProfession}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-spouse">Spouse</label>
      <input
        type="text"
        className="form-control"
        id="new-spouse"
        value={newSpouse}
        onChange={this.newSpouse}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-imageUrl">Place Image Url here</label>
      <input
        type="text"
        className="form-control"
        id="new-imageUrl"
        value={newImageUrl}
        onChange={this.newFamilyImage}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-birthdate">Birthdate mm/dd/yyyy</label>
      <input
        type="text"
        className="form-control"
        id="new-birthdate"
        value={newBirthdate}
        onChange={this.newBirthdate}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-death">Date of death mm/dd/yyyy</label>
      <input
        type="text"
        className="form-control"
        id="new-death"
        value={newDeath}
        onChange={this.newDeath}
        />
        </div>
        <div className="form-group">
        <label htmlFor="new-children">Names of children</label>
      <input
        type="text"
        className="form-control"
        id="new-death"
        value={newChildren}
        onChange={this.newChildren}
        />
        </div>
        <button className="btn btn-secondary" onClick={this.saveNewFamilyMember}>Save Family Member</button>
      </form>
    </div>
  )
}
}

export default NewFamilyMember;
