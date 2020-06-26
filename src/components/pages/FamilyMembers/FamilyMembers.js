import React from 'react';

import authData from '../../../helpers/data/authData';
import familyMembersData from '../../../helpers/data/familyMembersData';
import FamilyMembersCard from '../../shared/FamilyMembersCard/FamilyMembersCard';

import FilterResults from 'react-filter-search';

import PropTypes from 'prop-types';

class FamilyMembers extends React.Component {
  static propTypes = {
    value:	PropTypes.string.isRequired,
    data:	PropTypes.object.isRequired,
    reunderResults: PropTypes.func.isRequired,
  }
 constructor(props) {
   super(props);
  this.state={
    familyMembers: [],
    value: ''
  };
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

  handleChange = (e) => {
    const{ value } = e.target;
    this.setState({ value });
  };

  render() {
    const { familyMembers, value } =this.state;
      const buildFamilyMembersCard = familyMembers.map((familyMembers) => (

      <FamilyMembersCard key={familyMembers.id} familyMembers={familyMembers} removeFamilyMember={this.removeFamilyMember}/>
    ));
    return (
      <div className="FamilyMembers">
        <h1>Family Members</h1>
        <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <FilterResults
          value={value}
          familyMembers={familyMembers}
          renderResults={results => (
            <div>
              {results.map(familyMembers => (
                <div>
                  <span>{familyMembers.name}</span>
                </div>
              ))}
            </div>
          )}
        />
      </div>
      <div className="d-flex flex-wrap">
       {buildFamilyMembersCard}
      </div>
      </div>
    )
  } 
  }

export default FamilyMembers;