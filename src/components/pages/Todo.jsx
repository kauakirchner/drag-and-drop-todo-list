import React, { useState } from "react";
import { Container, DeleteTodo, CardAllTodos, CardText, AddTodo, TodoContainer, InputField  } from "../../styles/components/styles";

const Todo = () => {
    const [inputValueTodos, setInputValueTodos] = useState('');
    const [allTodos, setAllTodos] = useState([]);

    const addTodo = () => {
        setAllTodos([...allTodos,{value: inputValueTodos, id: new Date().valueOf()}]);
        setInputValueTodos('');
    }

    const sortedTodos = allTodos.sort((x, y) => {
        return x.value.length - y.value.length
    })

    const removeTodo = (idTodo) => {
        const filteredTodos = allTodos.filter(todo => todo.id !== idTodo);
        setAllTodos(filteredTodos);
    }

    return (
        <Container>
            <CardAllTodos>
                <div className="inpt-group">
                    <InputField type="text" value={inputValueTodos} onChange={event => setInputValueTodos(event.target.value)} />
                    <AddTodo onClick={addTodo}>ADICIONAR</AddTodo>
                </div>
                {sortedTodos.length > 0 ? (
                    sortedTodos.map(todo => (
                        <Container key={todo.id}>
                            <TodoContainer>
                                <CardText>{ todo.value }</CardText> 
                                <DeleteTodo onClick={() => removeTodo(todo.id)}>X</DeleteTodo>
                            </TodoContainer>
                        </Container>
                    ))
                ) : (
                    <Container>
                        <CardText>
                            Não há todos cadastrados
                        </CardText>
                    </Container>
                )}
            </CardAllTodos>
        </Container>
    )
}

export default Todo