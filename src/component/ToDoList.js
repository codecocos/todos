import React, { Component } from 'react';
import { ToDoInfo } from '.';


class ToDoList extends Component {
    state = {
        style: {
            border: '1px solid black',
            padding: '25px',
            margin: '15px',
        },
    };
    render() {
        const { data, onUpdate, onRemove } = this.props;
        return (
            <div>
                <ul>
                    {data.map((data) => (
                        <li style={this.state.style}>
                            <ToDoInfo data={data} onUpdate={onUpdate} onRemove={onRemove} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ToDoList;