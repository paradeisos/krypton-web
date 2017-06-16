import * as React from "react"
import { autobind } from "core-decorators"

interface ICircleProgressProps {
  percentage: number
}

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
