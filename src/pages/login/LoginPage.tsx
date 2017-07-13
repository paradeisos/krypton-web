import * as React from "react"
import { autobind } from "core-decorators"
import { RouteComponentProps } from "react-router-dom"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { LocaleSwitch } from "src/components/locale-switch"
import { sessionStore, localeStore } from "src/stores"
import { FormattedMessage as FM } from "react-intl"
import styled from "styled-components"
import { Page, colors } from "src/components/styled"

@observer
@autobind
export class LoginPage extends React.Component<RouteComponentProps<{}>, {}> {

  @observable isError = false
  @observable username: string
  @observable password: string

  handleInput(attrName: string) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      this[attrName] = event.target.value
    }
  }

  async onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!this.username || !this.password) {
      return
    }
    const isSuccess = await sessionStore.login({ username: this.username, password: this.password })
    if (isSuccess) {
      this.props.history.push("/main")
    } else {
      this.isError = true
    }
  }

  render() {
    const getInputProps = (placeholderId: string, type: string, fieldName: string) => {
      return {
        placeholder: localeStore.messages[placeholderId],
        type,
        value: this[fieldName],
        onChange: this.handleInput(fieldName)
      }
    }

    return (
      <Page>
        <Main>
          <Brand><FM id="app.name" /></Brand>
          <Form onSubmit={this.onSubmit}>
            <Input {...getInputProps("common.email", "text", "username")} />
            <Input {...getInputProps("common.password", "password", "password")} />
            <Button><FM id="common.login" /></Button>
          </Form>
        </Main>
        <Footer />
      </Page>
    )
  }
}

const Footer = () => {
  const P = styled.p`
    text-align: center;
  `
  const style = {
    width: "100%",
    position: "absolute" as any,
    bottom: 20
  }
  return (
    <footer style={style}>
      <P><FM id="app.copyright" /></P>
      <LocaleSwitch />
    </footer>
  )
}

const Brand = styled.h1`
  text-align: center;
  color: ${colors.main};
  font-size: 28px;
  text-transform: uppercase;
`
const Main = styled.main`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -40px;
`

const Form = styled.form`
  width: 250px;
  margin: 0 auto;
`

const FormItemStyle = `
  margin: 5px 0;
  border: 1px solid ${colors.sub};
  border-radius: 4px;
  width: 100%;
  outline: none;
  font-size: 14px;
`

const Input = styled.input`
  ${FormItemStyle}
  padding: 0 10px;
  color: ${colors.main};
  background: ${colors.inputBackground};
  line-height: 32px;
`

const Button = styled.button`
  ${FormItemStyle}
  text-align: center;
  font-weight: 500;
  border: none;
  background: ${colors.main};
  color: #ffffff;
  height: 38px;
  :hover {
    opacity: 0.9;
  }
`
