"use client"
import React, { useState } from 'react';

const Page = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [editText, setEditText] = useState('');

    const handleInputChange = (e) => setInputText(e.target.value);

    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: inputText, completed: false }]);
            setInputText('');
        }
    };

    const handleToggleComplete = (id) => setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );

    const handleDeleteTodo = (id) => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

    const handleEditTodo = (id, newText) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, text: newText, isEditing: false } : { ...todo, isEditing: false }
            )
        );
        setEditText('');
    };

    const handleMoveTodo = (id, direction) => {
        const currentIndex = todos.findIndex((todo) => todo.id === id);
        const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

        if (newIndex >= 0 && newIndex < todos.length) {
            const updatedTodos = [...todos];
            const [movedTodo] = updatedTodos.splice(currentIndex, 1);
            updatedTodos.splice(newIndex, 0, movedTodo);
            setTodos(updatedTodos);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 className='font-bold'>TODO APP</h1>
            <h2><u><em>feels like gajni ahh don't worry unik's todo is here!</em></u></h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '20px' }}>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Add a new todo"
                    style={{ outline: 'none', border: '2px solid black', padding: '8px', borderRadius: '5px' }}
                />
                <button
                    onClick={handleAddTodo}
                    style={{
                        marginLeft: '10px',
                        padding: '8px',
                        borderRadius: '5px',
                        backgroundColor: 'green',
                        color: 'white',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = 'darkgreen')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = 'green')}
                >
                    Add Todo
                </button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map((todo, index) => (
                    <li
                        key={todo.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: '5px',
                            border: '1px solid #ddd',
                            padding: '8px',
                            borderRadius: '5px',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleComplete(todo.id)}
                                style={{ marginRight: '10px' }}
                            />
                            {todo.isEditing ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    onBlur={() => handleEditTodo(todo.id, editText)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleEditTodo(todo.id, editText)}
                                    style={{ marginLeft: '10px', outline: 'none', border: 'none' }}
                                    autoFocus
                                />
                            ) : (
                                <span
                                    style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none',
                                        marginLeft: '10px',
                                    }}
                                >
                                    {todo.text}
                                </span>
                            )}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button onClick={() => handleMoveTodo(todo.id, 'up')} style={{ marginLeft: '10px' }}>
                                Up(&uarr;)
                            </button>
                            <button onClick={() => handleMoveTodo(todo.id, 'down')} style={{ marginLeft: '30px', marginRight: '30px' }}>
                                Down(&darr;)
                            </button>
                            <button
                                onClick={() => {
                                    setEditText(todo.text);
                                    setTodos((prevTodos) =>
                                        prevTodos.map((t) =>
                                            t.id === todo.id ? { ...t, isEditing: true } : { ...t, isEditing: false }
                                        )
                                    );
                                }}
                                style={{
                                    marginLeft: '10px',
                                    padding: '8px',
                                    borderRadius: '5px',
                                    backgroundColor: 'blue',
                                    color: 'white',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseOver={(e) => (e.target.style.backgroundColor = 'darkblue')}
                                onMouseOut={(e) => (e.target.style.backgroundColor = 'blue')}
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleDeleteTodo(todo.id)}
                                style={{
                                    marginLeft: '10px',
                                    padding: '8px',
                                    borderRadius: '5px',
                                    backgroundColor: 'red',
                                    color: 'white',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseOver={(e) => (e.target.style.backgroundColor = 'darkred')}
                                onMouseOut={(e) => (e.target.style.backgroundColor = 'red')}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
