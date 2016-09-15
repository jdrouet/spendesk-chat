import React, {Component, PropTypes} from 'react'

import {Card, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
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
      <Card>
        <List>
          <Subheader>{this.props.room.name}</Subheader>
          <Divider />
          <div style={{height: 400, overflowY: 'auto'}}>
            {this.props.messages.map(item => (
              <ListItem
                key={item.id}
                primaryText={item.content}
                secondaryText={item.userId}
              />
            ))}
          </div>
        </List>
        <Divider />
        <CardText>
          <form onSubmit={this.onSubmit.bind(this)} noValidate>
            <TextField
              floatingLabelText={<Translate content="message.create.content" />}
              fullWidth={true}
              onChange={e => this.setState({content: e.target.value})}
              value={this.state.content}
            />
          </form>
        </CardText>
      </Card>
    );
  }
}
