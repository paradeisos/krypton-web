import * as React from "react"
import styled from "styled-components"
import { autobind } from "core-decorators"
import { localeStore, Languages } from "src/stores"
import { observer } from "mobx-react"

@observer
@autobind
export class LocaleSwitch extends React.Component<any, any> {

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    localeStore.switch(e.target.value)
  }

  render() {
    return (
      <SwitchGroup>
        {Languages.map((i) => (<SwitchButton>{i.title}</SwitchButton>))}
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
`
