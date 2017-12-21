import React from "react";

const Task = ({ _id, title, content, createdAt, removeTask }) => (
  <div className="col-xs-12 col-sm-6 col-lg-4">
    <div className="card">
      <ul className="list-group list-group-flux">
        <li className="list-group-item d-inline-flex justify-content-between">
          <strong>{title}</strong>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => {
              removeTask(_id);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </li>
        <li className="list-group-item">{content}</li>
        <li className="list-group-item">
          <strong>Created at: </strong> {createdAt}
        </li>
        <li className="list-group-item" />
      </ul>
    </div>
  </div>
);

export default Task;
