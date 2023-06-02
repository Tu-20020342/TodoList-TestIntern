import React from 'react';
import './DescriptionTask.css'

const DescriptionTask = () => {
    return (
        <div className='des-container'> 
            <div className="task-box">
                <div className="description">
                    <p>Description</p>
                    <textarea
                        name="taskDescription"
                        id="taskDescription-input" cols="30" rows="10">
                    </textarea>
                </div>
                <div className="task-info">
                    <div className="task-due-date">
                        <p className='input-date'>Due Date</p>
                        <input type="date" />
                    </div>
                    <div className="task-priority">
                        <p className='input-title'>Priority</p>
                        <select className='task-options'>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionTask;