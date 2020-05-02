import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sessionSignOut } from '../actions/sessionActions';
import exitIcon from '../images/exitIcon.png';

function SignOut({ signOut }) {
  return (
    <button 
      onClick={() => signOut()}>
      <img src={exitIcon} />
    </button>
  );
}

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  signOut() {
    dispatch(sessionSignOut());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SignOut);


