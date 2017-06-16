/// <reference path="./index.d.ts" />
import * as React from "react"
import { render } from "react-dom"
import "./index.less"

import { App } from "./App"

const app = document.createElement("div")
app.id = "app"

document.body.appendChild(app)
render(<App />, app)

// Hot Module Replacement API
declare var module: { hot: any }
if (module && module.hot) {
  module.hot.accept("./App", () => render(<App />, app))
}
