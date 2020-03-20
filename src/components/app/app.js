import React from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import './app.css'

const App = () => {
  const todoData = [
    { label: 'Выпить кофе', important: false, id: 1 },
    { label: 'Создать приложение', important: true, id: 2 },
    { label: 'Пообедать', important: false, id: 3 },
  ]
  return (
    <div className='container app' >
      <AppHeader toDo={3} done={2} />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData} />
    </div>
  )
}

export default App