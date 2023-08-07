import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';

function App() {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer)

  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState('')

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  const cancelUpdate = () => {
    setEditFormVisibility(false)
  }

  return (
    <div className="App">
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate} />
      <Todo handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />

      <div className='deleteallmaindiv'>
        {
          todos.length > 1 && (
            <button className='btn btn-danger btn-md delete-all'
              onClick={() => dispatch(deleteAll())}>DELETE ALL</button>
          )
        }
      </div>

    </div>
  );
}

export default App;
