import styles from './PriceInfo.module.css'

export function PriceInfo() {
  return (
    <section className={styles.priceInfo}>
      <strong className={styles.sale}>
        88<span className="unit">%</span>
      </strong>
      <div className={styles.priceBox}>
        <del className={styles.priceOriginal}>
          56,760<span className="unit">원</span>
        </del>
        <strong className={styles.priceReal}>
          6,370<span className="unit">원</span>
        </strong>
      </div>
    </section>
  )
}
