import React from 'react';
import Form_add_task from '../form-add-task/Form_add_task';
import Tasks from '../list_tasks/Tasks.js';

const Body = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s5">
                    <Form_add_task />
                </div>
                <div className="col s7">
                    <Tasks />
                </div>
            </div>
        </div>
    );
}

export default Body;
