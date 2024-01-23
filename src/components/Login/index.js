// Write your code here

import './index.css'

const Login = props => {
  const {buttonText} = props

  return <p className="btn-text">{buttonText}</p>
}

Login.defaultProps = {
  buttonText: 'Login',
}

export default Login
