import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state={
        SignedUser:null
    }
  }
  signIn(name){
    this.setState({SignedUser:name});
  }
  render() {
    return (
      <div>
        <h2>Welcome to my React Sample App</h2>

        {/* <Login
          onSignIn={this.signIn.bind(this)}
        /> */}
        {(this.state.SignedUser) ?
          <div>Successfully Logged in! <br/> User name: <strong>{this.state.SignedUser}</strong></div> : <div>

            Please Login as a new user <br /> <a href="/login"> click here to login</a>
          </div>
        }

          </div>
    )

  }
}
export default App;
