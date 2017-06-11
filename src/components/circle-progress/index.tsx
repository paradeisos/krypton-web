import * as React from "react"
import { autobind } from "core-decorators"
import { RouteComponentProps } from "react-router-dom"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { sessionStore } from "src/stores"
import styled from "styled-components"
import { colors, Card } from "src/components/styled"

interface ICircleProgressProps {
  percentage: number
}

@observer
@autobind
export class CircleProgress extends React.Component<ICircleProgressProps, any> {

  render() {
    return (
      <div>
        {this.props.percentage.toFixed(2)}
      </div>
    )
  }
}
