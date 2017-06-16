import * as React from "react"
import styled from "styled-components"

const loaderImg = require("./flask-loader.svg")

export const PageLoading = () => {
  return (
    <Image src={loaderImg} alt="Loading..."/>
  )
}

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
