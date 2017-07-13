import * as React from "react"
import { autobind } from "core-decorators"
import { observer, Provider } from "mobx-react"
import { IntlProvider } from "react-intl"
import { Router, Route, Switch } from "react-router-dom"

import stores, { localeStore, sessionStore, routeStore } from "src/stores"

import { PageLoading } from "./components/page-loading"
import { LoginPage } from "./pages/login"
import { IndexPage } from "./pages/index"

@observer
@autobind
export class App extends React.Component<null, null> {

  render() {
    if (sessionStore.isFetching) {
      return (
        <PageLoading />
      )
    } else {
      return (
        <Provider {...stores}>
          <IntlProvider locale={localeStore.config.locale} messages={localeStore.config.messages}>
            <Router history={routeStore.history}>
              <Switch>
                <Route exact={true} path="/login" component={LoginPage} />
                <Route path="/" component={IndexPage} />
              </Switch>
            </Router>
          </IntlProvider>
        </Provider>
      )
    }
  }

  async componentWillMount() {
    await sessionStore.fetchSession()
    if (!sessionStore.session) {
      routeStore.history.push("/login")
    }
  }
}
