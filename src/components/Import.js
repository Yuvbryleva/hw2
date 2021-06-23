import React from "react"
import classnames from "classnames/bind"

import styles from "./Input.module.scss"
import { ThemeContext } from "./Context"

const cx = classnames.bind(styles)


export const MyInput = ({ value, onChange, name, placeholder}) => {
    <ThemeContext.Consumer>
      {theme => (
        <input
          className={cx("input", `input-theme-${theme}`)}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </ThemeContext.Consumer>
    return <input value={value} onChange={onChange} name={name} placeholder={placeholder}/>
  }

