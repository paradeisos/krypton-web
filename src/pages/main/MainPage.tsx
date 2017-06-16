import * as React from "react"
import { autobind } from "core-decorators"
import { RouteComponentProps } from "react-router-dom"
import { observer } from "mobx-react"
import { SubPage } from "src/components/styled"
import { Tomato } from "src/components/tomato"
import { Todos } from "src/components/todos"

@observer
@autobind
export class MainPage extends React.Component<RouteComponentProps<void>, void> {

  render() {
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
