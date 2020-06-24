import React from 'react';

import { Link } from 'react-router-dom';
import familyMembersData from '../../../helpers/data/familyMembersData';
import FamilyMembers from '../FamilyMembers/FamilyMembers';

class SingleFamilyMember extends React.Component {
state ={
  familyMembers: {},
}

componentDidMount() {
  const { familyMembersId } = this.props.match.params;
  familyMembersData.getSingleFamilyMember(familyMembersId)
    .then((response) => this.setState({familyMembers: response.data}))
    .catch((err) => console.error('unable to get single family member', err));
}

render () {
  const { familyMembers } = this.state;
  const { familyMembersId } = this.props.match.params;
  const editLink = `/family/edit/${familyMembersId}`;

return (
  <div className="SingleFamilyMember">
         <img className="family-member-image" src={familyMembers.imageUrl} alt="family member"></img>
          <h4 className="family-member-name">{familyMembers.name}</h4>
          <h5 className="family-members-spouse">{familyMembers.spouse}</h5>
         <h5 className="birthdate">{familyMembers.birthdate}</h5>
          <h5 className="children">{familyMembers.children}</h5>
         <h5 className="death">{familyMembers.death}</h5>
         <Link className="btn btn-success" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
    </div>
);
}

}
export default SingleFamilyMember;
