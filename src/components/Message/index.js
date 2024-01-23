// Write your code here

import './index.css'

const Message = props => {
  const {message} = props

  return <h1 className="msg-styling">{message}</h1>
}

Message.defaultProps = {
  message: 'Please Login',
}

export default Message
