import React from 'react';

import authData from '../../../helpers/data/authData';
import familyMembersData from '../../../helpers/data/familyMembersData';
import FamilyMembersCard from '../../shared/FamilyMembersCard/FamilyMembersCard';

import filter from 'react-filter-search';

import Search from '../../shared/Search/Search';


class FamilyMembers extends React.Component {
constructor() {
  super();

 this.state = {
    familyMembers: [],
   filteredNames: '' 
  };
}


  getFamilyMembers =() => {
    const uid = authData.getUid();
    familyMembersData.getFamilyMembersByUid(uid)
    .then((familyMembers) => this.setState({ familyMembers }))
  // .then((familyMembers) => this.setState({ filteredNames: familyMembers })
  // )
    .catch((err) => console.error('unable to get family members', err))
  }


  componentDidMount() {
  this.getFamilyMembers();
  }

  // searchNames(query) {
  //   const familyMembers = this.state.filteredNames.filter(familyName => familyName.name.includes(query));
  //   this.setState({ familyMembers });
  // }



// updateSearch(e) {
// this.setState({search: e.target.value})
// }

  removeFamilyMember = (familyMembersId) => {
    familyMembersData.deleteFamilyMember(familyMembersId)
    .then(() => this.getFamilyMembers())
    .catch((err) => console.error('unable to delete family member', err));
  
  }

  render() {
    const { familyMembers } =this.state;
    // let filteredNames = this.props.familyMembers.filter(
    //   (familyMembers) => {
    //     return familyMembers.name.toLowerCase().indexOf(this.state.search) !== -1;
    //   });
    
      const buildFamilyMembersCard = familyMembers.map((familyMembers) => (
      // const buildFamilyMembersCard = filteredNames.map((familyMembers) => (

      <FamilyMembersCard key={familyMembers.id} familyMembers={familyMembers} removeFamilyMember={this.removeFamilyMember}/>
    ));
    return (
      <div className="FamilyMembers">
        {/* <Search searchNames={this.searchNames.bind(this)}/> */}
        <h1>Family Members</h1>
        <div className="d-flex flex-wrap">
       {buildFamilyMembersCard}
      </div>
      </div>
    )
  } 
}  

export default FamilyMembers;