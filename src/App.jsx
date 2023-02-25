import './App.css'
import productImg from './assets/product.svg'
import { CounterButton, PayButton, PayInfo } from './components'

function App() {
  return (
    <article className="productWrapper">
      <img src={productImg} alt="상품 사진" />
      <h1 className="productTitle">
        래피젠 코로나 자가 검사 키트
        <span>
          2개입<span>X</span>1박스
        </span>
      </h1>
      <section className="priceInfo">
        <strong>88%</strong>
        <del>56,760</del>
        <strong>6,370원</strong>
      </section>
      <section className="deliveryInfo">
        <strong>택배배송</strong>
        <strong>3,000원</strong>
        <strong className="payPoint">(주문시 결제)</strong>
        <p>10개마다 부과</p>
      </section>
      <CounterButton />
      <PayInfo />
      <PayButton />
    </article>
  )
}

export default App
