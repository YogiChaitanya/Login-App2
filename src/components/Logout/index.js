// Write your code here

import './index.css'

const Logout = props => {
  const {buttonText} = props

  return <p className="btn-text">{buttonText}</p>
}

Logout.defaultProps = {
  buttonText: 'Logout',
}

export default Logout
