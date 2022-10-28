import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const DeleteTodo = styled.button`
    border: none;
    border-radius: 20px;
    color: #fff;
    background-color: red;
    width: 25px;
    font-size: 15px;
    font-weight: bold;

    &&:hover {
        transform: scale(1.025);
    }
`
const HeaderText = styled.th`
    color: #fff;
    font-size: 14px;
    font-weight: bold;

    &&:hover {
        cursor: pointer;
        transform: scale(1.025);
    }
`
const BodyText = styled.td`
    color: #fff;
    font-size: 14px;
`

const CardAllTodos = styled.div`
    width: 300px;
    max-width: 100%;
    max-height: 100%;
    padding: 20px;
    margin: 50px auto;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    background-color: #111;
    animation: fade-in-animation;
    animation-duration: 2.25s;
`

const AddTodo = styled.button`
    margin-top: 8px;
    font-size: 14px;
    text-shadow: 0px 0px 5px rgb(0, 0, 0, .35);
    color: #fff;
    background-color: #287CD0;
    font-weight: bold;
    font-size: 14px;
    text-shadow: 0px 0px 5px rgb(0 0 0 / 35%);
    transition: 0.3s ease-in-out;
    border: 1px solid #287CD0;
    height: 25px;
    border-radius: 10px;
    margin-left: 10px;

    &&:hover {
        transform: scale(1.030);
        background-color: #288CD0;
    } 
`
const TodoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 10px;
`

const InputField = styled.input`
    width: 50%;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #287CD0;

    &&:focus {
        outline: 1px solid #287CD0;
        transform: scale(1.016);
    }
`

export { Container, DeleteTodo, CardAllTodos, HeaderText, BodyText, AddTodo, TodoContainer, InputField }