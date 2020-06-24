import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import familyMembersShape from '../../../helpers/propz/familyMembersShape';

class FamilyMembersCard extends React.Component {
  static propTypes = {
    familyMembers: familyMembersShape.familyMembersShape,

  }
  render() {
    const { familyMembers } = this.props;
    return (
      <div className="FamilyMembersCard col-5">
        <div className="card">
          <div className="card-body">
            <img className="family-member-image" src={familyMembers.imageUrl} alt="family member"></img>
          <h4 className="family-member-name">{familyMembers.name}</h4>
          <h5 className="family-members-spouse">{familyMembers.spouse}</h5>
         <h5 className="birthdate">{familyMembers.birthdate}</h5>
          <h5 className="children">{familyMembers.children}</h5>
         <h5 className="death">{familyMembers.death}</h5>
         </div>
        </div>
      </div>
    );
  }
}
export default FamilyMembersCard;
