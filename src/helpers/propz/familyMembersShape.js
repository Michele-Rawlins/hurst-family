import PropTypes from 'prop-types';

const familyMembersShape = PropTypes.shape({
id:PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
profession: PropTypes.string.isRequired,
spouse: PropTypes.string.isRequired,
imageUrl: PropTypes.string.isRequired,
birthdate: PropTypes.string.isRequired,
death: PropTypes.string.isRequired,
children: PropTypes.string.isRequired,
uid: PropTypes.string.isRequired,

});

export default { familyMembersShape }