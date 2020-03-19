import React from 'react'
import TodoListItem from './todo-list-item';

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem label='Выпить кофе' /></li>
      <li><TodoListItem label='Создать приложение реaкт' important /></li>
    </ul>
  )
}

export default TodoList