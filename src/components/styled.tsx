import * as React from "react"
import styled from "styled-components"

export const colors = {
  main: "#FF7C81",
  sub: "#FAC090",
  inputBackground: "#FEF4C1",
  border: "#DDDDDD"
}

export const Card = styled.div`
  border-radius: 4px;
  border: 1px solid ${colors.border};
  padding: 10px;
  margin: 10px;
`

export const Page = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`

export const SubPage = styled.div`
  width: 960px;
  padding: 10px 0;
  margin: 0 auto;
`

export const TEMP = () => {
  const DIV = styled.div`
    border: 1px solid black;
    height: 100px;
    width: 100%;
  `
  return (<DIV>TEMP</DIV>)
}
