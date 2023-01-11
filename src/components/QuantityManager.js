import { defaultProps, useEffect, useState } from 'react'
import './QuantityManager.css'
const QuantityManager = ({ itemId, quantity, cart, setCart }) => {
    
    useEffect(() => {
        setItemQuantity(quantity)
    }, [quantity])

    const [itemQuantity, setItemQuantity] = useState(quantity)
    
    function increment() {
        let res = itemQuantity + 1
        setItemQuantity(res)
        handleSetCart(res)
    } 

    function decrement() {
        if (itemQuantity > 0) {
            let res = itemQuantity - 1
            setItemQuantity(res)
            handleSetCart(res)
        }
    }

    function handleOnChange(e) {
        if (parseInt(e.target.value) && parseInt(e.target.value) >= 0) {
            let res = parseInt(e.target.value)
            setItemQuantity(res)
            handleSetCart(res)
        }
    }

    function handleSetCart(itemQuantity, callback) {
        if (cart) {
            console.log('i was called')
            let copyCart = JSON.parse(JSON.stringify(cart))

            for (let i = 0; i < copyCart.length; i++) {
                if (copyCart[i].id === itemId) {
                    copyCart[i].quantity = itemQuantity
                }
            }
            console.log(copyCart)
            setCart(copyCart)
        }
    }

    let id = `${itemId}-quantity`

    return (
        <div id="quantity-manager">
            <button type="button" onClick={(e) => decrement()}>-</button>
            <input type="text" onChange={(e) => handleOnChange(e)} id={id} value={itemQuantity}></input>
            <button type="button" onClick={(e) => increment()}>+</button>
        </div>
    )
}

QuantityManager.defaultProps = {
    quantity: 0
}

export default QuantityManager