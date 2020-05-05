import React from 'react';
import { connect } from 'react-redux'

const task = {
    title: "",
    description: ""
}

const onChangeInput = (e) => {
    task[e.target.name] = e.target.value
}

const Form_add_task = ({ addTask }) => {
    return (
        <div className="form">
            <div className="card">
                <div className="card-content">
                    <form>
                        <div className="row">
                            <div className="input-fiel col s12 ">
                                <input name="title" type="text" onChange={(e) => onChangeInput(e)} placeholder="Title"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-fiel col s12 ">
                                <textarea name="description" onChange={(e) => onChangeInput(e)} className="materialize-textarea" placeholder="task description"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-fiel col s12 ">
                                <button className="btn light-blue darken-4" onClick={(e) => addTask(e)}>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToPropo = state => ({
});

const mapDispachesToProps = dispach => ({
    addTask(e) {
        dispach({
            type: "ADD_TASK",
            event: e,
            task: task
        })
    },
    onChangeInput
});

export default connect(mapStateToPropo, mapDispachesToProps)(Form_add_task);
