import React, {Component, PropTypes} from 'react'

import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Translate from 'react-translate-component';
import validator from 'validator';

export default class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {content: ''};
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onCreate({content: this.state.content});
    this.setState({content: ''});
  }

  render() {
    return (
      <div>
        <List>
          {this.props.messages.map(item => (
            <ListItem
              key={item.id}
              primaryText={item.content}
            />
          ))}
        </List>
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <TextField
            floatingLabelText={<Translate content="message.create.content" />}
            fullWidth={true}
            onChange={e => this.setState({content: e.target.value})}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
