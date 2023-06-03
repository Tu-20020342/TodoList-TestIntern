import React, { useState } from 'react';
import './DetailTask.css';
import DescriptionTask from '../descriptionTask/DescriptionTask';
import TaskItems from '../taskItems/TaskItems';

const DetailTask = ({ task, handleUpdateTask, handleRemoveTask }) => {
  const [taskDetail, setTaskDetail] = useState(task);
  const [openDetail, setOpenDetail] = useState(false)


  const handleChangeInput = (e) => {
    setTaskDetail({
      ...taskDetail,
      taskTitle: e.target.value,
    })
  }

  return (
    <div>
      <TaskItems
        task={task}
        setOpenDetail={setOpenDetail}
        openDetail={openDetail}
        handleRemoveTask={handleRemoveTask}
      />
      {
        openDetail && (
          <div className="item-container">
            <input
              className='task-input'
              placeholder='do homework'
              value={taskDetail.taskTitle}
              onChange={handleChangeInput}
            />
            <DescriptionTask
              task={taskDetail}
              setTask={setTaskDetail}
            />
            <button
              className="task-button" onClick={
                () => handleUpdateTask(taskDetail)
              }>Update</button>
          </div>
        )
      }
    </div>
  )
}

export default DetailTask;