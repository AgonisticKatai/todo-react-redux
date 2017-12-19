import React from "react";
import Task from "./Task";

import uuid from "uuid";

const PendingTasksList = ({ loading, tasks }) => (
  <section className="container">
    {loading && <span>Cargando datos...</span>}
    <div className="row">
      {tasks.map(task => <Task key={uuid.v4()} {...task} />)}
    </div>
  </section>
);

export default PendingTasksList;
