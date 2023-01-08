import { Link } from "react-router-dom"
import ItemCard from "./ItemCard"

const Shop = ({ itemArray, cart, setCart, match }) => {

    let noProductsMsg = 'No products available at this time. Check back later!'
    return (
        <main>
            <h2>Products</h2>
            {itemArray.length ? itemArray.map((item, i) => {
                return <Link
                         key={i}
                         to={`/shop/${item.id}`}>
                        <ItemCard
                            item={item}
                            key={item.id}
                         />
                       </Link>
                        
                        
            }) : <p>{noProductsMsg}</p>}
        </main>
    )

}

export default Shop