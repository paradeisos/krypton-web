import * as React from "react"
import { autobind } from "core-decorators"
import { observable, computed } from "mobx"
import { observer } from "mobx-react"
import styled from "styled-components"
import { colors, Card } from "src/components/styled"
import { ITodo } from "src/models"

interface ITodoOverviewProps {
  todoStore: {
    todos: ITodo[],
    toggleTodo: (todo: ITodo) => void
  }
}

@observer
@autobind
export class TodoOverview extends React.Component<ITodoOverviewProps, any> {

  handleToggle(todo: ITodo) {
    return () => {
      this.props.todoStore.toggleTodo(todo)
    }
  }
  render() {
    return (
      <Wrapper>
        {this.props.todoStore.todos.map((todo) => {
          const labelStyle = {}
          if (todo.finished) {
            labelStyle["textDecoration"] = "line-through"
            labelStyle["fontStyle"] = "italic"
            labelStyle["color"] = colors.border
          }
          return (
            <TodoItem>
              <TodoCheckbox type="checkbox" onChange={this.handleToggle(todo)} />
              <TodoLabel style={labelStyle}>{todo.title}</TodoLabel>
            </TodoItem>
          )
        })}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`

`

const TodoItem = styled.div`
  color: ${colors.main};
  font-size: 16px;
  margin: 10px 5px;
  padding: 5px 0;
  border-bottom: 1px solid ${colors.border};
`

const TodoCheckbox = styled.input`
  margin-right: 10px;
`

const TodoLabel = styled.span`
`
