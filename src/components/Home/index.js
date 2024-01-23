// Write your code here
import {Component} from 'react'

import './index.css'
import Message from '../Message/index'
import Logout from '../Logout/index'
import Login from '../Login/index'

class Home extends Component {
  state = {isClicked: false}

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const messageText = isClicked ? 'Welcome User' : 'Please Login'
    const buttonText = isClicked ? <Logout /> : <Login />

    return (
      <div className="bg-container">
        <div className="card-container">
          <Message message={messageText} />
          <button type="button" className="btn" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
