import React, { Component } from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    })
  }

  onMarkImoprtant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    })
  }

  render() {
    const { label, onDeleted } = this.props
    const { done, important } = this.state
    let classNames = 'todo-list-item'
    if (done) {
      classNames += ' done'
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span
          className='todo-list-item-label'
          onClick={this.onLabelClick}>
          {label}
        </span>
        <div className='btn-todo-list-item'>
          <button type='button'
            className='btn btn-outline-danger btn-small'
            onClick={onDeleted}>
            <i className='fa fa-trash-o' />
          </button>
          <button type='button'
            className='btn btn-outline-success btn-small'
            onClick={this.onMarkImoprtant}>
            <i className='fa fa-exclamation' />
          </button>
        </div>
      </span >
    )
  }
}
