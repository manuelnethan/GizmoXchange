import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Caurosel from "./Caurosel"
import Footer from "./Footer"

const Getproducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")


    // navigating to the mpesa 
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()

    // specify image location 
    const img_url = "https://manuelnethan.pythonanywhere.com/static/images/"


    const getproducts = async () => {
        setLoading("Please wait we are retrieving the products")

        try {
            const response = await axios.get(
                "https://manuelnethan.pythonanywhere.com/api/get_product_details"
            )

            setProducts(response.data)
            setLoading("")
        } catch (error) {
            setLoading("")
            setError("An Error has occured,Please come back later")


        }
    }

    useEffect(() => {    //use effect is used to avoid side effects
        getproducts();
    }, [])             // the array is used to pass dependancies 

    //Filter logic
    //search filter logic
    useEffect(() => {
        if (!products) return; //prevent errors if products is undefined

        const filtered = products.filter((product) =>
            product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.product_description.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredProducts(filtered);
    }, [searchQuery, products]);

    return (

        <div className="row c">
            <Navbar />
            <Caurosel />


            <h3 className="mt-5 l">
                Available Product
            </h3>

            {/* the input for searching for a specific product  */}
            <input type="text"
                className="form-control shadow-sm p-2"
                placeholder="Search Products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            {/* binding  */}
            {loading}
            {error}

            {
                // the loop to show the products 

                filteredProducts?.map((product) => (
                    <div className="col-md-3 justify-content-center mb-4 s">
                        <div className="card shadow">
                            <img className="mt-4 product_img rounded-image"
                                // binding the image source to the src 
                                src={img_url + product.product_photo}
                                alt="" />
                            <div className="card-body">
                                <h5 className='mt-2'>
                                    {product.product_name}
                                </h5>
                                <p className="text-muted">
                                    {product.product_description.slice(0, 10)}
                                </p>
                                <b className="text-warning">
                                    {product.product_cost}
                                </b>
                                <br />
                                <button
                                    className="btn btn-dark mt-2 w-100"
                                    onClick={() => navigate('/makepayment', { state: { product } })} //state is used to carry the entire details of the product
                                >
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>))
            }
            <Footer/>



        </div>
    )
}

export default Getproducts