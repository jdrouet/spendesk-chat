import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'
import {connect} from 'react-redux';
import * as AccountActions from '../../actions/account';

import Authentication from '../../components/authentication';

class AuthenticationView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      credentials: {}
    };
  }

  onChangeCredentials(credentials) {
    this.setState({credentials});
  }

  onRegister() {
    this.props.accountActions.create(this.state.credentials)
      .then(() => this.props.accountActions.login(this.state.credentials))
      .then(() => this.props.routerActions.push('/'));
  }

  onLogin() {
    this.props.accountActions.login(this.state.credentials)
      .then(() => this.props.routerActions.push('/'));
  }

  render() {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-4">
            <Authentication
              credentials={this.state.credentials}
              onChange={this.onChangeCredentials.bind(this)}
              onLogin={this.onLogin.bind(this)}
              onRegister={this.onRegister.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

AuthenticationView.propTypes = {
};

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    accountActions: bindActionCreators(AccountActions, dispatch),
    routerActions: bindActionCreators({push}, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationView);
