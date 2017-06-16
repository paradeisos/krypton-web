import * as React from "react"
import { autobind } from "core-decorators"
import { RouteComponentProps } from "react-router-dom"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { sessionStore } from "src/stores"
import styled from "styled-components"
import { SubPage } from "src/components/styled"
import { Tomato } from "src/components/tomato"
import { Todos } from "src/components/todos"

@observer
@autobind
export class MainPage extends React.Component<RouteComponentProps<void>, void> {

  render() {
    const floatLeft = {
      float: "left"
    }
    return (
      <StyledSubPage>
        <Tomato />
        <Todos />
      </StyledSubPage>
    )
  }
}

const StyledSubPage = SubPage.extend`
  display: flex;
`
