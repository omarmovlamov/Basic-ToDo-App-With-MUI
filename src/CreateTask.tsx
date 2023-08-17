import React, { useState } from "react";

function CreateTask(props) {
  const [task, setTask] = useState({
    title: "",
    content: "",
  });
  const detectChange = (event: object | any) => {
    const { name, value } = event.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  };
  const submitTask = (event: object | any) => {
    props.onAdd(task);
    setTask({
      title: "",
      content: "",
    });
    event.preventDefault();
  };
  return (
    <div className="taskDiv mb-4 ">
      <form className="formDiv">
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Title"
          value={task.title}
          onChange={detectChange}
        />

        <textarea
          name="content"
          rows={3}
          className="form-control"
          placeholder="Write Your Job"
          value={task.content}
          onChange={detectChange}
        ></textarea>
        <button className="btn btn-primary todoButton" onClick={submitTask}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
