import React from 'react';
import './TaskItems.css'

const TaskItems = (props) => {
  const handleOpenDetail = () => {
    props.setOpenDetail(!props.openDetail)
  }

  const handleChecked = (e) => {
    props.handleCheckboxChange(e.target.checked, props.task.taskID);
  }

  return (
    <div id='task-item-container'>
      <div className="task-item">
        <div>
          <div className="task-item-title">
            <input
              type="checkbox"
              checked={props.task?.checked}
              onChange={handleChecked}
            />
            <span>{props.task.taskTitle}</span>
          </div>
        </div>
        <div>
          <button
            className='detail-btn btn-task-item'
            onClick={handleOpenDetail}
          >Detail</button>
          <button
            className='remove-btn btn-task-item'
            onClick={() => props.handleRemoveTask(props.task.taskID)}
          >Remove</button>
        </div>
      </div>

    </div>
  );
}

export default TaskItems;