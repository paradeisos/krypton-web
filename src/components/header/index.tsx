import * as React from "react"
import { RouteComponentProps } from "react-router-dom"
import { autobind } from "core-decorators"
import { sessionStore } from "src/stores"
import { History } from "history"
import { FormattedMessage as FM } from "react-intl"
import styled from "styled-components"

import "./style.less"

interface IHeaderProps {
  history: History
}

@autobind
export class Header extends React.Component<IHeaderProps, void> {

  async logout() {
    const isSuccess = await sessionStore.logout()
    if (isSuccess) {
      this.props.history.push("/login")
    }
  }

  render() {
    return (
      <StyledHeader>
        <div>
          <h1 style={{margin: 0}}><FM id="app.name" /></h1>
        </div>
        <div>
          <button onClick={this.logout} type="logout" />
        </div>
      </StyledHeader>
    )
  }
}

const StyledHeader = styled.header`
  width: 960px;
  margin: 10px auto;
  padding: 10px 0;
  border-bottom: 1px solid #DDDDDD;
  display: flex;
  justify-content: space-between;
`
