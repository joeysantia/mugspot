import { Link } from "react-router-dom"

const Home = () => {
    return (
        <main>
            <h2>Coffee made simple</h2>
            <p>Fresh, direct, and promptly shipped. Check out our shop for current roasts.</p>
            <Link to="/shop">
                <button>Shop Now</button>
            </Link>
        </main>
    )
}

export default Home