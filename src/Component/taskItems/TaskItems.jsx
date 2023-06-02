import React from 'react';
import './TaskItems.css'

const TaskItems = () => {
    return (
        <div id='task-item-container'>
            <div className="task-item">
                <div>
                    <div className="task-item-title">
                        <input type="checkbox" />
                        <span>Do homework</span>
                    </div>
                </div>
                <div>
                    <button className='detail-btn'>Detail</button>
                    <button className='remove-btn'>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default TaskItems;