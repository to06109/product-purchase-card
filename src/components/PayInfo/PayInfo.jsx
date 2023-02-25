import styles from './PayInfo.module.css'

export function PayInfo({ totalNum }) {
  let totalPrice = 6370 * totalNum
  let totalPriceString = totalPrice.toLocaleString('ko-KR')

  return (
    <section className={styles.payInfo}>
      <div className={styles.payTitle}>
        <strong>총 상품 금액</strong>
        <button className={styles.helpButton}>?</button>
      </div>
      <div>
        <strong className={styles.totalNum}>총 수량 {totalNum}개</strong>
        <strong className={styles.totalPrice}>{totalPriceString}원</strong>
      </div>
    </section>
  )
}
