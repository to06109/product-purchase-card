import './App.css'
import productImg from './assets/product.svg'
import {
  CounterButton,
  PayButton,
  PayInfo,
  PriceInfo,
  DeliveryInfo,
} from './components'

function App() {
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
      <CounterButton />
      <hr width="100%" color="#DEE0E3" />
      <PayInfo />
      <PayButton />
    </article>
  )
}

export default App
