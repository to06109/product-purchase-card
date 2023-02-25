import styles from './PayInfo.module.css'

export function PayInfo() {
  return (
    <section className={styles.payInfo}>
      <div className={styles.payTitle}>
        <strong>총 상품 금액</strong>
        <button className={styles.helpButton}>?</button>
      </div>
      <div>
        <strong className={styles.totalNum}>총 수량 1개</strong>
        <strong className={styles.totalPrice}>6,370원</strong>
      </div>
    </section>
  )
}
