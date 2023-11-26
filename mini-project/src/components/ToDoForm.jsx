import React, { useEffect, useState } from "react";

function ToDoForm({ blankToDo, toDoToEdit, onSubmit }) {
  const [toDo, setToDo] = useState({ ...blankToDo });
  const isEditing = toDo && toDo.id !== 0;

  useEffect(() => {
    setToDo(toDoToEdit || blankToDo);
  }, [toDoToEdit, blankToDo]);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setToDo((prevToDo) => ({ ...prevToDo, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing && Object.values(toDo).some((value) => value === "")) {
      return;
    }
    onSubmit(toDo, isEditing);
    setToDo(blankToDo); 

  };

  const handleReset = () => {
    setPerson(blankToDo);
  };

  return (
    <div>
      <h2>{isEditing ? "Edit ToDo" : "Add ToDo"}</h2>
      <form onSubmit={handleSubmit}>
        {isEditing && (
          <div>
            <label htmlFor="id">Id</label>
            <input
              id="id"
              type="number"
              readOnly
              placeholder="ID (Read Only)"
              value={toDo.id}
              aria-label="ID"
            />
          </div>
        )}
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="Write description"
          value={toDo.description}
          onChange={handleInputChange}
          aria-label="Description"
        />

        <label htmlFor="done">Status</label>
        <select
          id="done"
          value={toDo.done}
          onChange={handleInputChange}
          aria-label="is ToDo done?"
        >
          <option disabled value="">
            Select answer
          </option>
          <option value="Yes">Done</option>
          <option value="No">Pending</option>
        </select>
        <button type="submit">{isEditing ? "Update" : "Create"}</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
