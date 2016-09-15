import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'
import {connect} from 'react-redux';
import * as RoomActions from '../../actions/room';
import * as MessageActions from '../../actions/message';

import Translate from 'react-translate-component';

import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {green500} from 'material-ui/styles/colors';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import RoomList from '../../components/room-list';
import MessageList from '../../components/message-list';

import _ from 'lodash';

class HomeView extends Component {

  constructor(props) {
    super(props);
    this.roomSource = new EventSource('api/Rooms/change-stream?_format=event-stream');
    this.messageSource = new EventSource('api/Messages/change-stream?_format=event-stream');
    this.state = {
      room: null
    };
  }

  componentWillMount() {
    if (this.props.authentication.token) {
      this.props.roomActions.find({});
      this.props.messageActions.find({});
      this.messageSource.addEventListener('data', event => {
        let ev = JSON.parse(event.data);
        switch(ev.type) {
          case 'create':
            return this.props.messageActions.onCreate(ev.data);
        }
      });
      this.roomSource.addEventListener('data', event => {
        let ev = JSON.parse(event.data);
        switch(ev.type) {
          case 'create':
            return this.props.roomActions.onCreate(ev.data);
        }
      });
    } else {
      this.props.routerActions.push('/authentication');
    }
  }

  onCreateRoom(room) {
    this.props.roomActions.create(room);
  }

  onSelectRoom(room) {
    this.setState({room});
  }

  onCreateMessage(message) {
    this.props.messageActions.create({
      ...message,
      roomId: this.state.room.id,
      userId: this.props.authentication.token.userId,
    });
  }

  render() {
    let scrollStyle = {height: '90vh'};
    let messages = [];
    if (this.state.room) {
      messages = _.filter(this.props.messages, {roomId: this.state.room.id});
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4" style={scrollStyle}>
            <RoomList
              onCreate={this.onCreateRoom.bind(this)}
              onSelect={this.onSelectRoom.bind(this)}
              rooms={this.props.rooms}
              selected={this.state.room}
            />
          </div>
          <div className="col-xs-8" style={scrollStyle}>
            {this.state.room ? (
              <MessageList
                messages={messages}
                onCreate={this.onCreateMessage.bind(this)}
              />
            ) : null}
          </div>
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
    messages: state.message,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    messageActions: bindActionCreators(MessageActions, dispatch),
    routerActions: bindActionCreators({push}, dispatch),
    roomActions: bindActionCreators(RoomActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
