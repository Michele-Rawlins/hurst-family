import React from 'react';

import authData from '../../../helpers/data/authData';
import familyMembersData from '../../../helpers/data/familyMembersData';

class EditFamilyMember extends React.Component {
  state = {
    newName: '',
    newProfession: '',
    newSpouse: '',
    newImageUrl: '',
    newBirthdate: '',
    newDeath: '',
    newChildren: '',
  }
  componentDidMount() {
    const familyMembersId = this.props.match.params.familyMembersId;
    familyMembersData.getSingleFamilyMember(familyMembersId)
    .then((response) => {
      const familyMember = response.data;
      this.setState({
        newName: familyMember.name,
        newProfession: familyMember.profession,
        newSpouse: familyMember.spouse,
        newImageUrl: familyMember.imageUrl,
        newBirthdate: familyMember.birthdate,
        newDeath: familyMember.death,
        newChildren: familyMember.children,
      });
    })
    .catch((err) => console.error('unable to edit family member', err));
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
  
  newImageUrl = (e) => {
    e.preventDefault();
    this.setState({newImageUrl: e.target.value});
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

  updateFamilyMember = (e) => {
    e.preventDefault();
    const { familyMembersId } = this.props.match.params;
    const {
      newName,
      newProfession,
      newSpouse,
      newImageUrl,
      newBirthdate,
      newDeath,
      newChildren,
    } = this.state;

    const updatedFamilyMember = {
      name: newName,
      profession: newProfession,
      spouse: newSpouse,
      imageUrl: newImageUrl,
      birthdate: newBirthdate,
      death: newDeath,
      children: newChildren,
      uid: authData.getUid(),
    };

    familyMembersData.putFamilyMember(familyMembersId, updatedFamilyMember)
      .then(() => this.props.history.push('/family'))
      .catch((err) => console.error('unable to edit family member', err));
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
      <div className="EditFamilyMember col-12">
        <h1>Edit Family Member</h1>
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
        id="new-profession"
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
         <label htmlFor="new-imageUrl">Insert Image Here</label>
      <input
        type="text"
        className="form-control"
        id="new-imageUrl"
        value={newImageUrl}
        onChange={this.newImageUrl}
        />
        </div>
        <div className="form-group"> 
         <label htmlFor="new-birthdate">Birthdate</label>
      <input
        type="text"
        className="form-control"
        id="new-birthdate"
        value={newBirthdate}
        onChange={this.newBirthdate}
        />
        </div>
        <div className="form-group"> 
         <label htmlFor="new-death">Death</label>
      <input
        type="text"
        className="form-control"
        id="new-death"
        value={newDeath}
        onChange={this.newDeath}
        />
        </div>
        <div className="form-group"> 
         <label htmlFor="new-children">Children</label>
      <input
        type="text"
        className="form-control"
        id="new-children"
        value={newChildren}
        onChange={this.newChildren}
        />
        </div>
        <button className="btn btn-secondary" onClick={this.updateFamilyMember}>Update Family Member</button>  
        </form>
    </div>
       );
    }
  }

export default EditFamilyMember;



