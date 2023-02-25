import { useRef } from 'react'
import styles from '../PayInfo.module.css'

export function HelpPanel() {
  const helpPanel = useRef()

  // const handleClosePanel = () => {
  //   helpPanel.style['display'] = 'none'
  // }

  return (
    <div ref={helpPanel} className={styles.helpPanel}>
      총 상품금액에 <strong>배송비는 포함되어 있지 않습니다.</strong>
      결제시 배송비가 추가될 수 있습니다.
      {/* <button onClick={handleClosePanel}>X</button> */}
    </div>
  )
}
