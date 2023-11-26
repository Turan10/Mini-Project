import React, { useEffect, useState } from "react";
import "./styles/App.css";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { fetchData } from "./util/persistance.js";

const blankToDo = {
  id: 0,
  description: "",
  done: "",
};

function App() {
  const [toDo, setToDo] = useState([]);
  const [toDoToEdit, setToDoToEdit] = useState(blankToDo);

  const loadToDos = async () => {
    try {
      const data = await fetchData("http://localhost:3000/api");
      setToDo(data);
    } catch (error) {
      console.error("Failed to fetch ToDO:", error);
    }
  };

  useEffect(() => {
    loadToDos();
  }, []);

  const editToDo = (toDo) => {
    setToDoToEdit(toDo);
  };

  const deleteToDoById = async (toDoId) => {
    try {
      await fetchData(`http://localhost:3000/api/${toDoId}`, "DELETE");
      setToDo((prevToDo) => prevToDo.filter((toDo) => toDo.id !== toDoId));
    } catch (error) {
      console.error("Failed to delete ToDo:", error);
    }
  };

  const onSubmit = async (toDo, isEditing) => {
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `http://localhost:3000/api/${toDo.id}`
      : "http://localhost:3000/api";

    try {
      await fetchData(url, method, toDo);
      loadToDos(); // Reload the list to reflect changes
      setToDoToEdit(blankToDo); // Reset the form
    } catch (error) {
      console.error("Failed to submit Todo:", error);
    }
  };

  return (
    <div>
      <h1>Mini project</h1>
      <ToDoList
        toDo={toDo}
        deleteToDoById={deleteToDoById}
        editToDo={editToDo}
      />
      <ToDoForm
        blankToDo={blankToDo}
        toDoToEdit={toDoToEdit}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
