import React, {Component, PropTypes} from 'react'

import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Translate from 'react-translate-component';
import validator from 'validator';

export default class RoomList extends Component {

  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onCreate({name: this.state.name});
    this.setState({name: ''});
  }

  render() {
    let scrollStyle = {overflowY: 'auto'};
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <TextField
            floatingLabelText={<Translate content="room.create.name" />}
            fullWidth={true}
            onChange={e => this.setState({name: e.target.value})}
            value={this.state.name}
          />
        </form>
        <List style={scrollStyle}>
          {this.props.rooms.map(item => (
            <ListItem
              key={item.id}
              onTouchTap={() => this.props.onSelect(item)}
              primaryText={item.name}
            />
          ))}
        </List>
      </div>
    );
  }
}
