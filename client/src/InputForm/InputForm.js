import React, { Component } from "react";
import { connect } from "react-redux";
import * as taskActions from "../actions/taskActions";
import { bindActionCreators } from "redux";
import { TextField, RaisedButton } from "material-ui";

class InputForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleSubmit = async e => {
    e.preventDefault();
    const newTask = {
      title: this.refs.taskTitleInput.getValue(),
      content: this.refs.taskContentInput.getValue()
    };
    await this.props.actions.addNewTask(newTask);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText="Title"
            floatingLabelText="Title"
            name="taskTitle"
            ref="taskTitleInput"
          />
          <TextField
            hintText="Content"
            floatingLabelText="Content"
            name="taskContent"
            ref="taskContentInput"
          />
          <RaisedButton label="Add task" primary={true} type="submit" />
        </form>
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
