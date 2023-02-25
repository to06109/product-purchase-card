import React from 'react'
import styles from './counterButton.module.css'

export function CounterButton({ num, minus, plus }) {
  return (
    <div className={styles.buttonWrapper}>
      <button onClick={minus}>-</button>
      <span className={styles.value}>{num}</span>
      <button onClick={plus}>+</button>
    </div>
  )
}
