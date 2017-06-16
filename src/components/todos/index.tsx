import * as React from "react"
import { autobind } from "core-decorators"
import { observable, computed } from "mobx"
import { observer } from "mobx-react"
import { sessionStore } from "src/stores"
import styled from "styled-components"
import { colors, Card } from "src/components/styled"
import { TodoEntry } from "./todo-entry"
import { TodoOverview } from "./todo-overview"
import { ITodo } from "src/models"

@observer
@autobind
export class Todos extends React.Component<any, any> {

  @observable todos: ITodo[] = []

  render() {
    return (
      <TodoWrapper>
        <TodoEntry todoStore={this} />
        <TodoOverview todoStore={this} />
        {/*<TodoFooter todoStore={todoStore} viewStore={viewStore} />*/}
      </TodoWrapper>
    )
  }

  addTodo(value: string) {
    this.todos.push({
      title: value,
      finished: false
    } as ITodo)
  }

  toggleTodo(todo: ITodo) {
    todo.finished = !todo.finished
  }

}

const TodoWrapper = Card.extend`
  width: 500px;
  height: 300px;
`
