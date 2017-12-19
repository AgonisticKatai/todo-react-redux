import React from "react";

const Task = ({ _id, title, content, createdAt }) => (
  <div className="col-xs-12 col-sm-6 col-lg-4">
    <div className="card">
      <ul className="list-group list-group-flux">
        <li className="list-group-item">
          <strong>{title}</strong>
        </li>
        <li className="list-group-item">{content}</li>
        <li className="list-group-item">
          <strong>Created at: </strong> {createdAt}
        </li>
      </ul>
    </div>
  </div>
);

export default Task;
