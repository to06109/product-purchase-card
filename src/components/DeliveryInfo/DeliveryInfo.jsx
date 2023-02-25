import styles from './DeliveryInfo.module.css'

export function DeliveryInfo() {
  return (
    <section className={styles.deliveryInfo}>
      <strong className={styles.deliveryService}>택배배송</strong>
      <strong className={styles.deliveryPrice}>
        3,000<span className="unit">원</span>
      </strong>
      <strong className={styles.payPoint}>(주문시 결제)</strong>
      <p>10개마다 부과</p>
    </section>
  )
}
