import React from 'react';


class Todo extends React.Component {
    render() {
        return (
            <div className="Todo">
                <input type="checkbox" id="todo0" name="todo0" value="todo0" />
                <label for="todo0">Todo 컴포넌트 만들기</label>
                {/*
                    comment here
                */}
                {
                    // comment1
                    // comment2
                    // comment3
                    // {} 안에 js코드가 들어간다
                }
            </div>
        );
    }
}

export default Todo;