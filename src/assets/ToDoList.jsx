import React, { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [
                updatedTasks[index],
                updatedTasks[index - 1],
            ];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index + 1], updatedTasks[index]] = [
                updatedTasks[index],
                updatedTasks[index + 1],
            ];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>Todo List</h1>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyPress={(e) => e.key === "Enter" && addTask()} // Add task on Enter key
                />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <div className="button-group">
                            <button
                                className="move-button"
                                onClick={() => moveTaskUp(index)}
                                aria-label="Move task up"
                            >
                                ▲
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskDown(index)}
                                aria-label="Move task down"
                            >
                                ▼
                            </button>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}
                                aria-label="Delete task"
                            >
                                ✕
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;
