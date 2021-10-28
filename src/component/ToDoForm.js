import React, { Component } from 'react'

class ToDoForm extends Component {
    state = {
        text: '',
    };
    //input onChange이벤트로 입력받은 값을 state 에 저장
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    //submit 이벤트 발생시 handleSubmit에서는 this.props.onCreate(this.state)로 현재의 state 값을 부모 컴포넌트로 값을 보낸다.
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            text: '',
        });
    };
    render() {
        const { text } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={text} name='text' placeholder='입력' onChange={this.handleChange}></input>
                    <button type="submit">추가</button>
                </form>
            </div>
        )
    }
}

export default ToDoForm;