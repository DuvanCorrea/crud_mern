import React from "react";
import { connect } from "react-redux";

const Tasks = ({ tasks }) => {
    //const copiaTasks = tasks.slice();
    return (
        <div>
            {
                tasks.map(e => (
                    <div className="card" key={e.id}>
                        <div className="card-content">
                            <span className="card-title">{e.title}</span>
                            <p>{e.description}</p>
                        </div>
                        <div className="card-action">
                            <button className="btn btn-block red">Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks
});
const mapDispachesToProps = (dispach) => ({});

export default connect(mapStateToProps, mapDispachesToProps)(Tasks);
