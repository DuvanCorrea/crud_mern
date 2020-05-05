import React from 'react';

const Form_add_task = () => {
    return (
        <div className="form">
            <div className="card">
                <div className="card-content">
                    <form>
                        <div className="row">
                            <div className="input-fiel col s12 ">
                                <input type="text" placeholder="Title"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-fiel col s12 ">
                                <textarea className="materialize-textarea" placeholder="task description"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-fiel col s12 ">
                                <button className="btn light-blue darken-4">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form_add_task;
