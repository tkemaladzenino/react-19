
//AppTask.jsx

import React, { useState } from 'react';
import './css/style.css';

const AppTask = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [completedCount, setCompletedCount] = useState(0);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    updateCompletedCount();
  };

  // ...

  const deleteTask = (index) => {
    const isTaskCompleted = tasks[index].completed;

    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);

      if (isTaskCompleted) {
        setCompletedCount((prevCount) => prevCount - 1);
      }

      return updatedTasks;
    });
  };

  const updateCompletedCount = () => {
    const count = tasks.filter((task) => task.completed).length;
    setCompletedCount(count);
  };



  return (
    <div className="container yellow d-flex justify-content-center flex-column align-items-center bg-warning">
      <div className="black-div bg-dark p-5 margin-auto">
        <ul>
          <p style={{ color: 'white', fontSize: '26px' }}>Pending tasks ({completedCount}) </p>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',

              }}
            >
              <label
                className="checkbox-label"
                type="checkbox"
                style={{

                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '10px',
                }}
              >
                <span style={{ flex: 1, textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.text}
                </span>

                {/* Button to toggle completion */}
                <button
                  className='compl-btn'

                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event propagation to the li element
                    toggleCompletion(index);
                  }}
                >
                  {task.completed ? 'Completed' : 'Complete'}
                </button>
              </label>

              <span style={{ flex: 'none' }}>
                <button className="btn-del" onClick={() => deleteTask(index)}>
                  x
                </button>
              </span>
            </li>
          ))}
        </ul>

        <div className="add-input-div d-flex justify-content-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addTask();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppTask;











