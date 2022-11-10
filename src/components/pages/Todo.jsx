import React, { useState } from "react";
import {
    Container,
    DeleteTodo,
    CardAllTodos,
    HeaderText,
    BodyText,
    AddTodo,
    InputField,
    StyledTable,
    InputSearch
} from "../../styles/components/styles";
 
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
 
export const ORDERS = {
    asc: 'ASC',
    desc: 'DESC'
}
 
export const TodoColumns = {
    id: 'id',
    value: 'value'
}
 
export const Todo = () => {
    const [inputValueTodo, setInputValueTodo] = useState('');
    const [allTodos, setAllTodos] = useState([]);
    const [inputValueSearch, setInputValueSearch] = useState('');
    const [sortDefinition, setSortDefinition] = useState({
        order: "",
        column: ""
    });
 
    const addTodo = () => {
        setAllTodos([
            ...allTodos,
            {
                value: inputValueTodo,
                id: new Date().valueOf()
            }
        ]);
        setInputValueTodo('');
    }
 
    const removeTodo = (idTodo) => {
        const filteredTodos = allTodos.filter(todo => todo.id !== idTodo);
        setAllTodos(filteredTodos);
    }
 
    const handleClickSortColumns = (column) => () => {
        if (column !== sortDefinition.column) {
            setSortDefinition({
                column,
                order: ORDERS.asc
            });
            return;
        }
 
        if (sortDefinition.order === ORDERS.asc) {
            setSortDefinition({
                column,
                order: ORDERS.desc
            });
            return;
        }

        if (sortDefinition.order === ORDERS.desc) {
            setSortDefinition({
                column: "",
                order: ""
            });
 
            return;
        }
    }
 
    const getSorterComparator = (comparator1, comparator2, type) => {
        let value, def;
 
        if (type === ORDERS.asc) {
            value = -2;
            def = false;
        }
 
        if (type === ORDERS.desc) {
            value = true;
            def = -2;
        }
 
        if (comparator1 < comparator2) {
            return value;
        }

        return def;
    }
 
    const getASCTodos = (todos) => {
        return todos.sort((x, y) => {
            return getSorterComparator(
                x[sortDefinition.column],
                y[sortDefinition.column],
                ORDERS.asc
            )
 
        });
    }
 
    const getDESCTodos = (todos) => {
        return todos.sort((x, y) => {
            return getSorterComparator(
                x[sortDefinition.column],
                y[sortDefinition.column],
                ORDERS.desc
            );
        });
    }
 
    const getDefaultOrder = (todos) => {
        return todos.sort((x, y) => {
            return getSorterComparator(
                x[TodoColumns.id],
                y[TodoColumns.id],
                ORDERS.asc
            );
        });
    }
 
    const getSortedTodos = (todos) => {
        if (sortDefinition.order === ORDERS.asc) {
            return getASCTodos(todos);
        }
 
        if (sortDefinition.order === ORDERS.desc) {
            return getDESCTodos(todos);
        }
       
        return getDefaultOrder(todos);
    }
 
    const getHeaderIconSortener = (column) => {
        if (sortDefinition.column === column) {
            if (sortDefinition.order === ORDERS.asc) {
                return <AiOutlineArrowUp />
            }
 
            return <AiOutlineArrowDown />
        }
 
        return null;
    }
 
    let showingTodos = allTodos;
 
    if (inputValueSearch.length > 0) {
        showingTodos = allTodos.filter(todo =>
            todo.value.toLowerCase().includes(inputValueSearch.toLowerCase())
        );
    }
 
    showingTodos = getSortedTodos(showingTodos);
 
    return (
        <Container>
            <CardAllTodos>
                <div className="search">
                    <InputSearch
                        type="text"
                        placeholder="Filtrar Todos"
                        value={inputValueSearch}
                        onChange={event => setInputValueSearch(event.target.value)}
                    />
                </div>
                <div className="inpt-group">
                    <InputField
                        type="text"
                        value={inputValueTodo}
                        onChange={event => setInputValueTodo(event.target.value)}
                    />
                    <AddTodo onClick={addTodo}>
                        ADICIONAR
                    </AddTodo>
                </div>
                <StyledTable>
                    <thead>
                        <tr>
                            <HeaderText onClick={handleClickSortColumns(TodoColumns.id)}>
                                Id
                                {getHeaderIconSortener(TodoColumns.id)}
                            </HeaderText>
                            <HeaderText onClick={handleClickSortColumns(TodoColumns.value)}>
                                Todo
                                {getHeaderIconSortener(TodoColumns.value)}
                            </HeaderText>
                        </tr>
                    </thead>
                    <tbody>
                        {showingTodos.map(todo => (
                            <tr key={ todo.id }>
                                <BodyText>{todo.id}</BodyText>                          
                                <BodyText>{todo.value}</BodyText>
                                <td>
                                    <DeleteTodo onClick={() => removeTodo(todo.id)}>X</DeleteTodo>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </CardAllTodos>
        </Container>
    )
}