import React, { Component } from 'react';

class ToDoInfo extends Component {
    state = {
        toggle: false,
        text: '',
        style: {
            margin: '10px',
        },
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleToggleChange = () => {
        const { toggle, text } = this.state;
        const { data, onUpdate } = this.props;
        //false->true : 수정 버튼을 눌렀을 경우 input 창 value에 기존에 입력되었던 data.text값을 가져온다
        if (!toggle) {
            this.setState({
                text: data.text,
                toggle: true,
            });
        } else {
            onUpdate(data.id, { text: text });
            this.setState({
                toggle: false,
            });
        }
        //true->false : 적용 버튼을 누른 경우로 업데이트를 위해 App.js 컴포넌트의 handleUpdate로 보낸다
    }

    handleRemove = () => {
        const { data, onRemove } = this.props;
        onRemove(data.id);
    };

    render() {
        const { data } = this.props;
        const { toggle, text } = this.state;
        console.log(data.text + '렌더링 되었습니다.')
        return (
            <div>
                {toggle ? (<input
                    style={this.state.style}
                    onChange={this.handleChange}
                    value={text}
                    name='text'
                />
                ) : (
                    <span style={this.state.style}>{data.text}</span>
                )}
                <button onClick={this.handleToggleChange}>{toggle ? '적용' : '수정'}</button>
                <button onClick={this.handleRemove}>삭제</button>

            </div>
        )
    }
}

export default ToDoInfo;