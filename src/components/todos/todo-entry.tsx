import * as React from "react"
import { autobind } from "core-decorators"
import { observable, computed } from "mobx"
import { observer } from "mobx-react"
import styled from "styled-components"
import { colors, Card } from "src/components/styled"
import { ITodo } from "src/models"

const ENTER_KEY = 13

interface ITodoEntryProps {
  todoStore: {
    addTodo: (value: string) => void
  }
}

@observer
@autobind
export class TodoEntry extends React.Component<ITodoEntryProps, any> {

  handleNewTodoKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode !== ENTER_KEY) {
      return
    }
    event.preventDefault()

    const value = (event.target as HTMLInputElement).value.trim()

    if (value) {
      this.props.todoStore.addTodo(value);
      (event.target as HTMLInputElement).value = ""
    }
  }

  render() {
    return (
      <TodoInput type="text" placeholder="What needs to be down?" onKeyDown={this.handleNewTodoKeyDown} />
    )
  }
}

const FormItemStyle = `
  margin: 5px 0;
  border: 1px solid ${colors.sub};
  border-radius: 4px;
  width: 100%;
  outline: none;
  font-size: 14px;
`
const TodoInput = styled.input`
  ${FormItemStyle}
  padding: 0 10px;
  color: ${colors.main};
  background: ${colors.inputBackground};
  line-height: 32px;
`
