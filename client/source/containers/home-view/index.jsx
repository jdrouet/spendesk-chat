import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'
import {connect} from 'react-redux';
import * as RoomActions from '../../actions/room';

import Translate from 'react-translate-component';

import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {green500} from 'material-ui/styles/colors';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import RoomList from '../../components/room-list';

class HomeView extends Component {

  constructor(props) {
    super(props);
    this.state = {rooms: []};
  }

  componentWillMount() {
    if (this.props.authentication.token) {
      this.props.roomActions.listen();
      this.props.roomActions.find({});
    } else {
      this.props.routerActions.push('/authentication');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-4">
          <RoomList rooms={this.props.rooms} />
        </div>
        <div className="col-md-8">
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
};

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    rooms: state.room,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    routerActions: bindActionCreators({push}, dispatch),
    roomActions: bindActionCreators(RoomActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
