import PropTypes from 'prop-types';

const funFactShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  familyMemberId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { funFactShape };

  