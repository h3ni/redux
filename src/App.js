import logo from "./logo.svg";
import "./App.css";
import { Input } from "reactstrap";
import { useState } from "react";
import { Button } from "reactstrap";
import AddTask from "./Component/AddTask";
import TaskList from "./Component/TaskList";

const App = () => {
  return (
    <div className="tasks">
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
