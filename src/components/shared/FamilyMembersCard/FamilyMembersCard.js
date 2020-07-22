import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';



import familyMembersShape from '../../../helpers/propz/familyMembersShape';
import './FamilyMembersCard.scss';
class FamilyMembersCard extends React.Component {
  static propTypes = {
    familyMembers: familyMembersShape.familyMembersShape,
    removeFamilyMember: PropTypes.func.isRequired,
  }
  render() {
    const { familyMembers, removeFamilyMember } = this.props;
    const singleLink = `/family/${familyMembers.id}`;
    const editLink = `/family/edit/${familyMembers.id}`;
    return (
      <div className="FamilyMembersCard col-4">
        <div className="card">
          <div className="card-body">
            <img className="family-member-image img-fluid" src={familyMembers.imageUrl} fluid alt="family member"></img>
          <h4 className="family-member-name">{familyMembers.name}</h4>
          <h5 className="family-members-spouse">Spouse:{familyMembers.spouse}</h5>
         <h5 className="birthdate">Birthdate:{familyMembers.birthdate}</h5>
          <h5 className="children">Children: {familyMembers.children}</h5>
         <h5 className="death">Death:{familyMembers.death}</h5>
         <Link className="btn btn-outline-dark" to={singleLink}><i className="fas fa-glasses"></i></Link>
          <Link className="btn btn-outline-light" to={editLink}><i className="fas fa-pen-alt"></i></Link>
          <button className="btn btn-outline-danger" onClick={() => removeFamilyMember(familyMembers.id)}><i className="fas fa-skull-crossbones"></i></button>
        </div>
        </div>
      </div>
    );
  }
}
export default FamilyMembersCard;
