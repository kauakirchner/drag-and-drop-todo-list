import React, { useState, useEffect } from "react";
import { Container } from "../../styles/components/styles";

const Todo = () => {
    const [todos, setTodos] = useState('');
    const [allTodos, setAllTodos] = useState([]);

    const addTodo = () => {
        setAllTodos([...allTodos,todos]);
        setTodos('');
    }

    return (
        <Container>
            <div className="inpt-group">
                <input type="text" value={todos} onChange={event => setTodos(event.target.value)} />
                <button onClick={addTodo}>Adicionar</button>
            </div>
            {allTodos.length > 0 ? (
                allTodos.map(todo => (
                    <Container key={todo}>
                        { todo }
                    </Container>
                ))
            ) : (
                <Container>
                    Não há to dos cadastrados
                </Container>
            )}
        </Container>
    )
}

export default Todo