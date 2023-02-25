import './App.css'
import productImg from './assets/product.svg'
import { useState } from 'react'
import {
  CounterButton,
  PayButton,
  PayInfo,
  PriceInfo,
  DeliveryInfo,
} from './components'

function App() {
  const [num, setNum] = useState(1)
  const [isDisabled, setDisabled] = useState(false)

  const minus = () => {
    if (num <= 1) {
      setNum(0)
      return setDisabled(true)
    }
    setNum(num - 1)
  }

  const plus = () => {
    if (num >= 0) {
      setDisabled(false)
    }
    setNum(num + 1)
  }

  return (
    <article className="productWrapper">
      <img src={productImg} alt="상품 사진" />
      <h1 className="productTitle">
        래피젠 코로나 자가 검사 키트
        <span>
          2개입<span aria-label="곱하기">X</span>1박스
        </span>
      </h1>
      <PriceInfo />
      <hr width="100%" color="#DEE0E3" />
      <DeliveryInfo />
      <hr width="100%" color="#DEE0E3" />
      <CounterButton num={num} minus={minus} plus={plus} />
      <hr width="100%" color="#DEE0E3" />
      <PayInfo totalNum={num} />
      <PayButton isDisabled={isDisabled} />
    </article>
  )
}

export default App
