import React from "react";
import App from "./App";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password:null,
    }
    this.UserNameInput = React.createRef();
    this.PasswordInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }
    handleSignIn(e) {
      e.preventDefault();
      console.log("handleSignIn",e);
      // this.setState({
      //   username : this.UserNameInput.current.value,
      //   password : this.PasswordInput.current.value,
      // })
      // console.log("handleSignIn",this.state.username,this.state.password);
      this.props.history.push('/home');
    }
    handleChange(e){
      this.setState({
        username : this.UserNameInput.current.value,
        password : this.PasswordInput.current.value,
      })
      console.log("handleSignIn",this.state.username,this.state.password);
    }
    render() {
      return (
        <div>
        <form onSubmit={this.handleSignIn}>
          <h3>Sign in</h3>
          <input type="text" ref={this.UserNameInput} placeholder="enter username....." onClick={this.handleChange} /> <br/>
          <input type="password" ref={this.PasswordInput} placeholder="enter password...." onClick={this.handleChange}/> <br/>
          {/* <button >Log In</button> */}
          <input type="submit" value="Log In" />
        </form>
        {
          (this.state.username) ? <App username={this.state.username}/> : <div></div>
        }
        
         <a href="/"> click here to Log Out</a>
        </div>
      )
    }
  
  }
  export default Login;