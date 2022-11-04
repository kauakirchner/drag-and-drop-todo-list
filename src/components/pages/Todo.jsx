import React, { useState } from "react";
import { Container, DeleteTodo, CardAllTodos, HeaderText, BodyText, AddTodo, TodoContainer, InputField  } from "../../styles/components/styles";

const Todo = () => {
    const [inputValueTodos, setInputValueTodos] = useState('');
    const [allTodos, setAllTodos] = useState([]);
    const [clickInTodoCount, setclickInTodoCount] = useState(1);
    const [inputValueSearch, setInputValueSearch] = useState('');

    const filteredTodos = allTodos.filter(todo => todo.value.toLowerCase().includes(inputValueSearch.toLowerCase()));

    const addTodo = () => {
        setAllTodos([...allTodos,{value: inputValueTodos, id: setTimeout(() => new Date().valueOf(),1000)}]);
        setInputValueTodos('');
    }
    const removeTodo = (idTodo) => {
        const filteredTodos = allTodos.filter(todo => todo.id !== idTodo);
        setAllTodos(filteredTodos);
    }
    const handleSortTodos = () => {
        setclickInTodoCount(prevState => prevState + 1); 
        if(clickInTodoCount === 1) {
            const sortedTodos = allTodos.sort((x, y) => {
                if(x.value < y.value) {
                    return -1
                }
                return false
            })
            setAllTodos(sortedTodos);
        }
        if(clickInTodoCount === 2) {
            const sortedTodos = allTodos.sort((x, y) => {
                if(x.value < y.value) {
                    return true
                }
                return -1
            })
            setAllTodos(sortedTodos);
        }
    }
    const toOriginalSort = () => {
        setclickInTodoCount(prevState => prevState + 1); 
        if(clickInTodoCount >= 1) {
            const sortedTodos = allTodos.sort((x, y) => x.id - y.id);
            setAllTodos(sortedTodos);
        }
    }

    return (
        <Container>
            <CardAllTodos>
                <div className="search">
                    <InputField type="text" placeholder="Filtrar Todos" value={inputValueSearch} onChange={event => setInputValueSearch(event.target.value)} />
                </div>
                <div className="inpt-group">
                    <InputField type="text" value={inputValueTodos} onChange={event => setInputValueTodos(event.target.value)} />
                    <AddTodo onClick={addTodo}>ADICIONAR</AddTodo>
                </div>
                <table>
                    <thead>
                        <tr>
                            <HeaderText onClick={ handleSortTodos }>Todo</HeaderText>
                            <HeaderText onClick={ toOriginalSort }>Id</HeaderText>
                        </tr>
                    </thead>
                    <tbody>
                        {inputValueSearch.length > 0 ? (
                            filteredTodos.map(todo => (
                                <tr key={ todo.id }>
                                    <TodoContainer>
                                        <td>
                                            <BodyText>{ todo.value }</BodyText>
                                        </td>
                                        <td>
                                            <DeleteTodo onClick={() => removeTodo(todo.id)}>X</DeleteTodo>
                                        </td>
                                    </TodoContainer>
                                </tr>
                            ))
                        ) : (
                            allTodos.map(todo => (
                                <tr key={ todo.id }>
                                    <TodoContainer>
                                        <td>
                                            <BodyText>{ todo.value }</BodyText>
                                        </td>
                                        <td>
                                            <DeleteTodo onClick={() => removeTodo(todo.id)}>X</DeleteTodo>
                                        </td>
                                    </TodoContainer>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </CardAllTodos>
        </Container>
    )
}

export default Todo