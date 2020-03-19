import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'
import ItemStatusFilter from './components/item-status-filter'

const App = () => {
  const todoData = [
    { label: 'Выпить кофе', important: false, id: 1 },
    { label: 'Создать приложение', important: true, id: 2 },
    { label: 'Пообедать', important: false, id: 3 },
  ]
  return (
    <div className='container' >
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
