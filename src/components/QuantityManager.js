import { defaultProps, useState } from 'react'

const QuantityManager = ({ quantity }) => {
    
    const [itemQuantity, setItemQuantity] = useState(quantity)
    
    function increment() {
        setItemQuantity(itemQuantity + 1)
    } 

    function decrement() {
        if (itemQuantity > 0) {
          setItemQuantity(itemQuantity - 1)
        }
    }

    function handleOnChange(e) {
        if (parseInt(e.target.value) && parseInt(e.target.value) >= 0) {
            setItemQuantity(parseInt(e.target.value))
        }
    }

    return (
        <div>
            <button type="button" onClick={(e) => decrement()}>-</button>
            <input type="text" onChange={(e) => handleOnChange(e)} id="quantity" value={itemQuantity}></input>
            <button type="button" onClick={(e) => increment()}>+</button>
        </div>
    )
}

QuantityManager.defaultProps = {
    quantity: 0
}


export default QuantityManager