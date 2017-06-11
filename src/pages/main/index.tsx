import * as React from "react"
import { RouteComponentProps } from "react-router-dom"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { sessionStore } from "src/stores"
import { Route } from "react-router-dom"
import { Header } from "src/components/header"
import styled from "styled-components"
import { SubPage } from "src/components/styled"

@observer
export class MainPage extends React.Component<RouteComponentProps<void>, void> {

  render() {
    return (
      <SubPage>Hello</SubPage>
    )
  }
}
