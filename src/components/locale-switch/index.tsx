import * as React from "react"
import styled from "styled-components"
import { autobind } from "core-decorators"
import { localeStore, Languages } from "src/stores"
import { observer } from "mobx-react"

@observer
@autobind
export class LocaleSwitch extends React.Component<any, any> {

  handleChange(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLLinkElement
    if (target.dataset.id) {
      localeStore.switch(target.dataset.id)
    }
  }

  render() {
    return (
      <SwitchGroup onClick={this.handleChange}>
        {Languages.map((i) => (<SwitchButton data-id={i.name} key={i.name}>{i.title}</SwitchButton>))}
      </SwitchGroup>
    )
  }
}

const SwitchGroup = styled.div`
  width: 100%;
  text-align: center;
`
const SwitchButton = styled.a`
  color: #FF7C81;
  display: inline-block;
  margin: 0 2px;
  cursor: pointer;
`
