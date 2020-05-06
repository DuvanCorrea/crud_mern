import React from "react";
import { connect } from "react-redux";

const Tasks = ({ tasks, t }) => {
    return (
        <div>{console.log([{}, {}])}{console.log(tasks)}{console.log(t)}
            <div>{typeof (tasks)}</div>
            {/* <div className="card">
                <div className="card-content">
                    <span className="card-title">asdf</span>
                    <p>yjtryu</p>
                    <div className="card-action">
                        <button className="btn red">Delete</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
    t: ["a", "b"]
});
const mapDispachesToProps = (dispach) => ({});

export default connect(mapStateToProps, mapDispachesToProps)(Tasks);
