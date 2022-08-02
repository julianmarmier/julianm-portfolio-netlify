import * as s from "../style/Switch.module.scss"
import React from "react"
import useWindowDimensions from "../helper/windowDimensions"

const ThemeSlider = (props) => {
  const windowDimensions = useWindowDimensions()
  const MAX_WIN_WIDTH = 400

  return windowDimensions.width < MAX_WIN_WIDTH ? (
    <div
      style={{
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={props.theme.toggleDark}
    >
      {props.theme.dark ? "D" : "L"}
    </div>
  ) : (
    <div
      className={`${s.slider} ${props.theme.dark ? s.dark : ""}`}
      onClick={props.theme.toggleDark}
    >
      <input type="checkbox" />
      <div className={s.background}>
        <div className={s.sun}></div>
        <div className={s.moon}></div>
      </div>
    </div>
  )
}

export default ThemeSlider
