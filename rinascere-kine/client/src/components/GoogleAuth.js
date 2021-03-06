import React from 'react';
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  state = {isSignedIn: null};

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
          window.gapi.client.init({
              clientId: '989283877105-vgi1lub63j7cu23jp0jrhj21lcp38bdn.apps.googleusercontent.com', 
              scope: 'email'
          }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
 }

  onAuthChange = ( isSignedIn ) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton(){
    if (this.state.isSignedIn === null) {
      return null;
    } else if ( this.state.isSignedIn ) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"/>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"/>
          Sing in with Google
        </button>
      );
    }
  }

    render () {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuth);