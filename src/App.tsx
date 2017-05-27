import * as React from "react"
import { autobind } from "core-decorators"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { IntlProvider } from "react-intl"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"

import { sessionStore, localeStore } from "./stores"

import DevTools from "mobx-react-devtools"

@observer
@autobind
export class App extends React.Component<null, null> {

  @observable
  isChecking = true

  render() {
    if (this.isChecking) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <IntlProvider locale={localeStore.config.locale} messages={localeStore.config.messages}>
          <div>
            <Router>
              <Switch>
                <Route exact={true} path="/login" component={Temp} />
                <Route path="/" component={Temp} />
              </Switch>
            </Router>
          </div>
        </IntlProvider>
      )
    }
  }

  async componentWillMount() {
    this.isChecking = true
    const isSuccess = await sessionStore.userinfo()
    this.isChecking = false
  }
}

const Temp = () => {
  return <div>Temp</div>
}
