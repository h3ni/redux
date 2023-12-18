import React, { useState } from "react";
import { Input, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { add_task } from "../redux/Actions/Action";

const AddTask = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const handleAddTask = () => {
    dispatch(add_task({ id: Math.random(), Done: false, Title: newTask }));
    setNewTask("");
  };
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <div className="add-task">
      <Input
        placeholder="Add your task here"
        value={newTask}
        onChange={handleChange}
      />
      <Button color="success" onClick={handleAddTask}>
        Add task
      </Button>
    </div>
  );
};

export default AddTask;
