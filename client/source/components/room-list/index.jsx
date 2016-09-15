import React, {Component, PropTypes} from 'react'

import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Translate from 'react-translate-component';
import validator from 'validator';

export default class RoomList extends Component {

  render() {
    return (
      <div className="box">
        <List>
          {this.props.rooms.map(item => (
            <ListItem key={item.id} primaryText={item.name} />
          ))}
        </List>
      </div>
    );
  }
}
