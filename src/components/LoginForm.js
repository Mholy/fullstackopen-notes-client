import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      Username{' '}
      <input
        type="text"
        name="Username"
        value={username}
        onChange={handleUsernameChange}
      />
    </div>
    <div>
      Password{' '}
      <input
        type="password"
        name="Password"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
    <button type="submit">Login</button>
  </form>
)
LoginForm.propTypes = propTypes

export default LoginForm
