import React from 'react';
import './TaskItems.css'

const TaskItems = (props) => {
  const handleOpenDetail = () => {
    props.setOpenDetail(!props.openDetail)
  }

  return (

    <div id='task-item-container'>
      <div className="task-item">
        <div>
          <div className="task-item-title">
            <input
              type="checkbox"
            />
            <span>{props.task.taskTitle}</span>
          </div>
        </div>
        <div>
          <button
            className='detail-btn'
            onClick={handleOpenDetail}
            >Detail</button>
          <button
            className='remove-btn'
            onClick={() => props.handleRemoveTask(props.task.taskID)}
            >Remove</button>
        </div>
      </div>

    </div>
  );
}

export default TaskItems;