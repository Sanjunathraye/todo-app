import React from 'react'
import {useSelector } from 'react-redux/es/hooks/useSelector'
import Icon from 'react-icons-kit'
import { trash } from 'react-icons-kit/feather/trash'
import { edit2 } from 'react-icons-kit/feather/edit2'
import { useDispatch } from 'react-redux'
import { removeTodo,handleCheckBox } from '../redux/todoapp/actions'

const Todo = ({ handleEditClick, editFormVisibility }) => {

    const todos = useSelector((state) => state.todoReducer)
    const dispatch = useDispatch();

    return todos.map((todo) => (
        <div key={todo.id} className='todo-box'>
            <div className='content'>
                {editFormVisibility === false && (
                    <input className='checkbox' type="checkbox" checked={todo.completed}  onChange={() => dispatch(handleCheckBox(todo.id))}/>
                )}

                <h6 style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                    {todo.todo}
                </h6>

            </div>
            <div className='actions-box'>
                {editFormVisibility === false && (
                    <>
                        <span onClick={() => handleEditClick(todo)}><Icon title='Edit' className='iconedit' icon={edit2} /></span>
                        <span onClick={() => dispatch(removeTodo(todo.id))}><Icon title='Delete' className='icondelete' icon={trash} /></span>
                    </>
                )}

            </div>
        </div>

    ))
}

export default Todo
