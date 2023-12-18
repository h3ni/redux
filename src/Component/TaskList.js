import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "reactstrap";
import { done_task } from "../redux/Actions/Action";

const TaskList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const handleDone = (tasks) => {
    dispatch(done_task(tasks));
  };
  return (
    <>
      {state.tasks.map((task, index) => {
        return (
          <div className="task-item" key={index}>
            <div className="task-details">
              <h4>{task.Title}</h4>
            </div>
            <Button
              color={task.Done ? "danger" : "success"}
              onClick={() => handleDone(task)}
            >
              {task.Done ? "Not Done" : "Done"}
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default TaskList;
