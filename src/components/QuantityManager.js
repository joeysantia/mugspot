import { defaultProps } from 'react'

const QuantityManager = ({ quantity, setQuantity }) => {
    
    function increment() {
        setQuantity(quantity + 1)
    } 

    function decrement() {
        if (quantity > 0) {
          setQuantity(quantity - 1)
        }
    }

    function handleOnChange(e) {
        if (parseInt(e.target.value) >= 0) {
            setQuantity(e.target.value)
        }
    }

    console.log(quantity)
    return (
        <div>
            <button onClick={(e) => decrement()}>Minus</button>
            <input type="number" onChange={(e) => handleOnChange(e)} id="quantity" value={quantity}/>
            <button onClick={(e) => increment()}>Plus</button>


        </div>
    )
}

QuantityManager.defaultProps = {
    quantity: 0
}

export default QuantityManager