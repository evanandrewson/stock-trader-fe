import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getSessionId } from '../../selectors/sessionSelectors';
// import styles from '../user/User.css';

const UserForm = ({ buttonText, redirectText, redirectLink, error, handleSubmit, handleClearError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const sessionId = useSelector(getSessionId);

  if(sessionId) return <Redirect to="/" />;

  return (
    <>
      <main>
        <div>
          {error && <span>{error}</span>}
          <Link 
            to={redirectLink} 
            onClick={() => handleClearError()}>
            {redirectText}
          </Link>
          <form onSubmit={event => handleSubmit(event, username, password)} >
            <input 
              type="text" 
              value={username} 
              onChange={({ target }) => setUsername(target.value)} 
              placeholder="Username" 
            />
            <input 
              type="password" 
              value={password} 
              onChange={({ target }) => setPassword(target.value)} 
              placeholder="Password" 
            />
            <button>{buttonText}</button>
          </form>
        </div>
      </main>
    </>
  );
};

UserForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  redirectText: PropTypes.string.isRequired,
  redirectLink: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleClearError: PropTypes.func.isRequired
};

export default UserForm;
