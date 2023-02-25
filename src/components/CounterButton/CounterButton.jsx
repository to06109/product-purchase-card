import React from 'react'
import styles from './CounterButton.module.css'
import { useState } from 'react'

export function CounterButton() {
  const [value, setValue] = useState(1)
  const [isDisable, setDisable] = useState(false)

  const minus = () => {
    if (value === 0) {
      return setDisable(!isDisable)
    }
    setValue(value - 1)
  }

  const plus = () => {
    setValue(value + 1)
  }

  return (
    <div className={styles.buttonWrapper}>
      <button onClick={minus}>-</button>
      <span className={styles.value}>{value}</span>
      <button onClick={plus}>+</button>
    </div>
  )
}
