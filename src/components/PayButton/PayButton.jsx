import styles from './PayButton.module.css'

export function PayButton() {
  return (
    <button className={styles.PayButton}>
      <span className={styles.buttonLogo}>N</span>
      구매하기
    </button>
  )
}
 