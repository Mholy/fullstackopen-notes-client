import React from 'react'

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

export default LoginForm
