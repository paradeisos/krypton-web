import * as React from "react"
import styled from "styled-components"
import { autobind } from "core-decorators"
import { observable, computed } from "mobx"
import { observer } from "mobx-react"
import { colors, Card } from "src/components/styled"
import { Circle } from "rc-progress"

enum TomatoState {
  running,
  stoped
}

@observer
@autobind
export class Tomato extends React.Component<any, any> {

  @observable leftSeconds = 0
  @observable totalSeconds = 60 * 25
  @observable tomatoState = TomatoState.stoped
  intervalTimer: number

  @computed get percentage() {
    return (1 - (this.leftSeconds / this.totalSeconds)) * 100
  }

  @computed get timeLeft() {
    const seconds = this.leftSeconds % 60
    const mins = Math.floor(this.leftSeconds / 60)
    return `${mins}m ${seconds}s`
  }

  onStart() {
    this.doStart()
  }

  onCancel() {
    this.doStop()
    // TODO record cancel
  }

  onComplete() {
    this.doStop()
    // TODO record complete
  }

  doStart() {
    this.leftSeconds = this.totalSeconds
    this.tomatoState = TomatoState.running
    this.intervalTimer = window.setInterval(this.handleTick, 1000)
  }

  doStop() {
    window.clearInterval(this.intervalTimer)
    this.intervalTimer = null
    this.tomatoState = TomatoState.stoped
    this.leftSeconds = 0
  }

  handleTick() {
    this.leftSeconds--
    if (this.leftSeconds <= 0) {
      this.onComplete()
    }
  }

  render() {
    const circleProps = {
      percent: this.percentage,
      strokeWidth: 4,
      strokeColor: colors.main,
      trailColor: colors.sub,
      trailWidth: 0.1,
      strokeLinecap: "butt"
    }

    return (
      <TomatoWrapper>
        <CircleWrapper>
          <Circle {...circleProps} />
          <TimeLabel>{this.timeLeft}</TimeLabel>
        </CircleWrapper>
        {this.renderControls()}
      </TomatoWrapper>
    )
  }

  renderControls() {
    if (this.tomatoState === TomatoState.running) {
      return <ControlButton onClick={this.onCancel}>取消</ControlButton>
    } else {
      return <ControlButton onClick={this.onStart}>开始</ControlButton>
    }
  }

}

const TomatoWrapper = Card.extend`
  width: 300px;
  height: 300px;
`

const ControlButton = styled.button`
  padding: 10px 40px;
  font-size: 14px;
  color: #fff;
  background: ${colors.main};
  border-radius: 4px;
  border: none;
  display: block;
  margin: auto;
  transition: all .2s;
  outline: none;
  :hover {
    opacity: 0.8;
  }
`

const CircleWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px auto;
  position: relative;
`

const TimeLabel = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  line-height: 200px;
  width: 100%;
  text-align: center;
  font-size: 22px;
  color: ${colors.main};
  font-family: monospace;
`
