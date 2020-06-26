import React from 'react';

import authData from '../../../helpers/data/authData';
import familyMembersData from '../../../helpers/data/familyMembersData';
import FamilyMembersCard from '../../shared/FamilyMembersCard/FamilyMembersCard';

class FamilyMembers extends React.Component {
  state={
    familyMembers: [],
   
  }
  getFamilyMembers =() => {
    const uid = authData.getUid();
    familyMembersData.getFamilyMembersByUid(uid)
    .then((familyMembers) => this.setState({ familyMembers }))
  .catch((err) => console.error('unable to get family members', err))
  }

  componentDidMount() {
  this.getFamilyMembers();
  }

  removeFamilyMember = (familyMembersId) => {
    familyMembersData.deleteFamilyMember(familyMembersId)
    .then(() => this.getFamilyMembers())
    .catch((err) => console.error('unable to delete family member', err));
  
  }


  render() {
    const { familyMembers } =this.state;
      const buildFamilyMembersCard = familyMembers.map((familyMembers) => (

      <FamilyMembersCard key={familyMembers.id} familyMembers={familyMembers} removeFamilyMember={this.removeFamilyMember}/>
    ));
    return (
      <div className="FamilyMembers">
        <h1>Family Members</h1>
        <div className="d-flex flex-wrap">
        {buildFamilyMembersCard}
        </div>
      </div>
    );
  }
}
export default FamilyMembers;