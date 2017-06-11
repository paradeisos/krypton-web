import * as React from "react"
import { FormattedMessage as FM } from "react-intl"

const loaderImg = require("./flask-loader.svg")

export const PageLoading = () => {
  const style = {
    width: 80,
    height: 80,
    margin: "auto",
    position: "absolute" as any,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }

  return (
    <img src={loaderImg} style={style} alt="Loading..."/>
  )
}
