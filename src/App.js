import React from "react";
class App extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>Welcome to my React Sample App</h2>

        {/* <Login
          onSignIn={this.signIn.bind(this)}
        /> */}
        {(this.props.username) ?
          <div>Successfully Logged in! <br/> User name: <strong>{this.props.username}</strong></div> : <div>

            Please Login as a new user <br /> <a href="/login"> click here to login</a>
          </div>
        }

          </div>
    )

  }

896186152eec4d17c916bf673c
App;
