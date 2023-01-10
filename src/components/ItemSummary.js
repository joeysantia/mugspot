import QuantityManager from "./QuantityManager"
import deleteIcon from '../img/delete.png'

const ItemSummary = ({ item, cart, setCart }) => {
    
    function deleteItem(itemId) {
        let copyCart = JSON.parse(JSON.stringify(cart))
        copyCart = copyCart.filter(item => item.id !== itemId)
        setCart(copyCart)
    }

    let subtotal = parseFloat(item.price * item.quantity).toFixed(2)

    return (
        <div>
            <div id="delete-box">
                <img src={deleteIcon} alt="delete" onClick={(e) => deleteItem(item.id)} />
            </div>
            <div id="main-box">
                <div id="left-box">
                    <img src={item.img} alt={item.name}></img>
                </div>
                <div id="right-box">
                    <h3>{item.name}</h3>
                    <QuantityManager itemId={item.id} quantity={item.quantity} setCart={setCart}/>
                    <p>Subtotal: {subtotal}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemSummary