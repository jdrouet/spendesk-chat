import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'
import {connect} from 'react-redux';

import Translate from 'react-translate-component';

import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {green500} from 'material-ui/styles/colors';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

class HomeView extends Component {

  componentWillMount() {
    if (this.props.authentication.token) return;
    this.props.routerActions.push('/authentication');
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

HomeView.propTypes = {
};

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    routerActions: bindActionCreators({push}, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
