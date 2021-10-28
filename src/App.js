import React, { Component } from 'react';
import { ToDoForm, ToDoList } from './component';
// import ToDoForm from './component/ToDoForm';
// import ToDoList from './component/ToDoList';

class App extends Component {
  id = 4;
  state = {
    toDoList: [
      {
        id: 1,
        text: '리액트 공부하기',
      },
      {
        id: 2,
        text: '깃허브 업로드하기'
      },
      {
        id: 3,
        text: '운동 하기'
      },
    ],
    search: '',
  };

  handleCreate = (data) => {
    //console.log(data);
    const { toDoList } = this.state;

    this.setState({
      toDoList: toDoList.concat({
        id: this.id++,
        ...data,
      }),
    });
  };

  //map사용 : id값이 서로 같은 경우 수정하려는 배열이 맞으므로 거기만 새로 받아온 data 를 반환
  handleUpdate = (id, data) => {
    // console.log(id);
    // console.log(data);

    const { toDoList } = this.state;

    this.setState({
      toDoList: toDoList.map((toDoList) => {
        console.log(toDoList);
        if (toDoList.id === id) {
          console.log(toDoList.id + '/' + id);
          return {
            id,
            ...data,
          };
        }
        return toDoList;
      })
    })
  };

  //삭제 : id값을 가져와 filter 메소드로 받아온 id값과 틀린 것만 toDoList에 반환,
  //id값이 같을 경우 반환시키지 않는다.
  handleRemove = (id) => {
    const { toDoList } = this.state;
    // ToDoList 컴포넌트에 data props를 전달해 줄 때,
    //filter 메소드를 사용하여 text에 검색하려는 단어가 있을 경우에만 배열을 반환하여 ToDoList 컴포넌트에 전달
    this.setState({
      toDoList: toDoList.filter((data) => data.id !== id),
    });
  };

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { toDoList, search } = this.state;

    return (
      <div>
        <ToDoForm onCreate={this.handleCreate} />
        <input value={search} name='search' onChange={this.handleSearch} placeholder='검색' />

        <ToDoList data={toDoList.filter((data) => data.text.indexOf(search) !== -1)}
          onUpdate={this.handleUpdate}
          onRemove={this.handleRemove} />
      </div>
    )
  }
}

export default App;