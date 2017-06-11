import * as React from "react"
import { RouteComponentProps } from "react-router-dom"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { sessionStore } from "src/stores"
import { Route } from "react-router-dom"
import { Header } from "src/components/header"
import styled from "styled-components"
import { Page, TEMP } from "src/components/styled"
import { MainPage } from "src/pages/main"

@observer
export class IndexPage extends React.Component<RouteComponentProps<void>, void> {

  render() {
    return (
      <FlexPage>
        <Header history={this.props.history} />
        <main>
          <div className="sub-pages">
            <Route exact={true} path="/main" component={MainPage} />
          </div>
        </main>
      </FlexPage>
    )
  }

  componentWillMount() {
    if (!sessionStore.session) {
      this.props.history.push("/login")
    } else if (this.props.location.pathname === "/") {
      this.props.history.push("/main")
    }
  }
}

const FlexPage = Page.extend`
  display: flex;
  flex-direction: column;
`
