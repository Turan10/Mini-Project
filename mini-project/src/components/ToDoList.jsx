// components/PersonList.jsx
import React from "react";

function ToDoList({ toDo, deleteToDoById, editToDo }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Done</th>
          <th colSpan={2} className="actions">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {toDo.map((toDo) => (
          <tr key={toDo.id}>
            <td>{toDo.id}</td>
            <td>{toDo.description}</td>
            <td>{toDo.done}</td>
            <td>
              <button onClick={() => editToDo(toDo)}>Edit</button>
              <button onClick={() => deleteToDoById(toDo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ToDoList;
