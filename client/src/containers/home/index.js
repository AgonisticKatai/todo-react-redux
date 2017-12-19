import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as taskActions from "../../actions/taskActions";
import PendingTasksList from "../task/PendingTasksList";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await this.props.taskActions.fetchPendingTasks();
  }

  render() {
    return (
      <PendingTasksList tasks={this.props.tasks} loading={this.props.loading} />
    );
  }
}

PendingTasksList.defaultProps = {
  tasks: []
};

const mapStateToProps = state => {
  return {
    tasks: state.pendingTasks.tasks,
    loading: state.pendingTasks.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
