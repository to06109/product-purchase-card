import styles from './PayButton.module.css'

export function PayButton({ isDisabled }) {
  return (
    <button className={styles.PayButton} disabled={isDisabled ? true : false}>
      <span className={styles.buttonLogo}>N</span>
      구매하기
    </button>
  )
}
