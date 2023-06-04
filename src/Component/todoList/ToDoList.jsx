import './TodoList.css'
import DetailTask from '../detailTask/DetailTask'
import React, { useState, useEffect } from 'react';

const ToDoList = (props) => {

  const [searchText, setSearchText] = useState('');
  const [taskListShow, setTaskListShow] = useState(props.taskList);

  const handleCheckboxChange = (checked, taskID) => {
    const newList = props.taskList.map((item) => {
      if (item.taskID === taskID) {
        return {
          ...item,
          checked: checked,
        }
      }
      return item;
    })
    props.setTaskList([...newList]);
  };

  useEffect(() => {
    setTaskListShow([...props.taskList]);
  }, [props.taskList]);

  const handleUpdateTask = (taskDetail) => {
    const newTaskList = props.taskList.map((item) => {
      if (item?.taskID === taskDetail.taskID) {
        return {
          ...item,
          taskTitle: taskDetail.taskTitle,
          taskDescription: taskDetail.taskDescription,
          taskDuedate: taskDetail.taskDuedate,
          taskPriority: taskDetail.taskPriority,
        }
      }
      return item;
    })
    props.setTaskList(newTaskList);
  }

  const handleRemoveTask = (taskID) => {
    const filtered = props.taskList.filter((e) => {
      return e.taskID !== taskID
    });
    props.setTaskList(filtered)
  }

  const handleSearchTask = (e) => {
    const text = e.target.value.trim().toUpperCase()
    setSearchText(text)
  }

  useEffect(() => {
    if (searchText) {
      const filtered = props.taskList.filter((t) => {
        return t.taskTitle.toUpperCase().includes(searchText);
      });
      setTaskListShow([...filtered]);
    } else {
      setTaskListShow([...props.taskList])
    }
  }, [searchText]);

  const handleBulkRemoveOnClick = () => {
    const newList = props.taskList.filter((item) => {
      return item.checked == false;
    })
    props.setTaskList([...newList]);
  }

  return (
    <div id='todo-container'>
      <h1 className='title-newtask'>Todo List</h1>
      <input
        className='task-input'
        placeholder='Search...'
        onChange={handleSearchTask}
      />
      {taskListShow.map((task, index) => (
        <div key={index}>
          <DetailTask
            task={task}
            taskPriority={task.taskPriority}
            handleUpdateTask={handleUpdateTask}
            handleRemoveTask={handleRemoveTask}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
      ))}
      {
        props.taskList.filter((item) => item.checked == true).length > 0 && (
          <div className='bulk-action'>
            <span>Bulk Action:</span>
            <div className="btn">
              <button className='done-btn'>Done</button>
              <button
                className='remove-btn'
                onClick={handleBulkRemoveOnClick}
              >Remove</button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default ToDoList;