import React, { useState } from "react";
import { Container } from "../../styles/components/styles";

const Todo = () => {
    const [inputValueTodos, setInputValueTodos] = useState('');
    const [allTodos, setAllTodos] = useState([]);

    const addTodo = () => {
        setAllTodos([...allTodos,{value: inputValueTodos, id: new Date().valueOf()}]);
        setInputValueTodos('');
    }

    const removeTodo = (idTodo) => {
        const filteredTodos = allTodos.filter(todo => todo.id !== idTodo);
        setAllTodos(filteredTodos);
    }

    return (
        <Container>
            <div className="inpt-group">
                <input type="text" value={inputValueTodos} onChange={event => setInputValueTodos(event.target.value)} />
                <button onClick={addTodo}>Adicionar</button>
            </div>
            {allTodos.length > 0 ? (
                allTodos.map(todo => (
                    <Container key={todo.id}>
                        { todo.value }
                        <button onClick={() => removeTodo(todo.id)}>X</button>
                    </Container>
                ))
            ) : (
                <Container>
                    Não há todos cadastrados
                </Container>
            )}
        </Container>
    )
}

export default Todo