import styles from './PayInfo.module.css'
import { useState } from 'react'
import { HelpPanel } from './components/HelpPanel'

export function PayInfo({ totalNum }) {
  const [isOpen, setOpen] = useState(false)

  let totalPrice = 6370 * totalNum
  let totalPriceString = totalPrice.toLocaleString('ko-KR')

  const handleOpenPanel = () => {
    setOpen(!isOpen)
  }

  return (
    <section className={styles.payInfo}>
      <div className={styles.payTitle}>
        <strong>총 상품 금액</strong>
        <button className={styles.helpButton} onClick={handleOpenPanel}>
          ?
        </button>
        {isOpen ? <HelpPanel /> : ''}
      </div>
      <div>
        <strong className={styles.totalNum}>총 수량 {totalNum}개</strong>
        <strong className={styles.totalPrice}>{totalPriceString}원</strong>
      </div>
    </section>
  )
}
