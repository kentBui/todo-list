import React from "react";

export default function FormInputTodo(props) {
  const {
    isAddTask,
    addTask,
    taskName,
    hadleChange,
    handleSubmit,
    hadleChangeSelected,
    cancel,
  } = props;

  return (
    <div className="col-12 col-lg-6">
      {/* <!-- FORM : START --> */}
      {/* <!-- ADD : START --> */}
      <div className="form-group add-task">
        <button
          type="button"
          className={
            isAddTask
              ? "btn btn-primary btn-block text-capitalize"
              : "btn btn-info btn-block text-capitalize"
          }
          onClick={addTask}
        >
          {isAddTask ? "Please fill and click submit" : "Add Task"}
        </button>
      </div>
      {/* <!-- ADD : END --> */}

      {isAddTask ? (
        <form
          className="form-inline justify-content-between"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-group">
            <label className="sr-only">label</label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              value={taskName}
              onChange={hadleChange}
            />
          </div>
          <div className="form-group">
            <label className="sr-only">label</label>
            <select
              name="ds"
              className="form-control"
              required="required"
              onChange={hadleChangeSelected}
            >
              <option value="0">Small</option>
              <option value="1">Medium</option>
              <option value="2">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button type="button" className="btn btn-secondary" onClick={cancel}>
            Cancel
          </button>
        </form>
      ) : null}
      {/* <!-- FORM : END --> */}
    </div>
  );
}
