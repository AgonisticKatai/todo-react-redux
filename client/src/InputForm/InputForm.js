import React, { Component } from "react";
import { connect } from "react-redux";
import * as taskActions from "../actions/taskActions";
import { bindActionCreators } from "redux";

import { TextField, RaisedButton } from "material-ui";

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = async () => {
    const newTask = {
      title: this.titleInput.value,
      content: this.contentInput.value
    };
    await this.props.actions.addNewTask(newTask);
  };

  render() {
    return (
      <div>
        <TextField
          hintText="Title"
          floatingLabelText="Title"
          name="taskTitle"
          ref={node => {
            this.titleInput = node;
          }}
        />
        <TextField
          hintText="Content"
          floatingLabelText="Content"
          name="taskContent"
          ref={node => {
            this.contentInput = node;
          }}
        />
        <RaisedButton
          label="Add task"
          primary={true}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(taskActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(InputForm);
