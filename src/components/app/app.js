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
    <div className='todo-app' >
      <AppHeader toDo={3} done={2} />
      <div classNsme='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList
        todos={todoData}
        onDeleted={(id) => console.log({ id })} />
    </div>
  )
}

export default App