import * as React from "react"
import { RouteComponentProps } from "react-router-dom"
import { autobind } from "core-decorators"
import { sessionStore } from "src/stores"
import { History } from "history"
import { FormattedMessage as FM } from "react-intl"
import styled from "styled-components"
import { colors } from "src/components/styled"

interface IHeaderProps {
  history: History
}

@autobind
export class Header extends React.Component<IHeaderProps, void> {

  async logout() {
    await sessionStore.logout()
    this.props.history.push("/login")
  }

  render() {
    return (
      <StyledHeader>
        <div>
          <Brand><FM id="app.name" /></Brand>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <LinkButton onClick={this.logout} type="logout"><FM id="common.logout" /></LinkButton>
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
  flex-shrink: 0;
`

const Brand = styled.h1`
  color: ${colors.main};
  font-size: 24px;
  text-transform: uppercase;
  margin: 0;
`

const LinkButton = styled.a`
  color: ${colors.main};
  font-size: 14px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`
