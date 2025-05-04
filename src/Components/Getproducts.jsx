import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Caurosel from "./Caurosel";


const Getproducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const img_url = "https://manuelnethan.pythonanywhere.com/static/images/";

    const getproducts = async () => {
        setLoading("Please wait we are retrieving the products");

        try {
            const response = await axios.get(
                "https://manuelnethan.pythonanywhere.com/api/get_product_details"
            );

            setProducts(response.data);
            setLoading("");
        } catch (error) {
            setLoading("");
            setError("An Error has occurred, please come back later");
        }
    };

    useEffect(() => {
        getproducts();
    }, []);

    useEffect(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!products?.length || !query) {
            setFilteredProducts(products);
            return;
        }

        const filtered = products.filter(
            (product) =>
                product.product_name.toLowerCase().includes(query) ||
                product.product_description.toLowerCase().includes(query)
        );

        setFilteredProducts(filtered);
    }, [searchQuery, products]);

    // Fade effect on scroll
    const handleScroll = () => {
        const productCards = document.querySelectorAll(".product-card");

        productCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const cardTop = rect.top;

            // Check if the card is above the viewport (i.e., user has scrolled past it)
            if (cardTop < window.innerHeight / 1.5) {
                card.classList.remove("faded");
            } else {
                card.classList.add("faded");
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="row">
            <Navbar />
<Caurosel />
<h3 className="mt-2 mb-3 text-ceter text-primary l"><b>YOUR NEXT PURCHASE AWAITS</b></h3>

<div className="search-wrapper my-1">
  <input
    type="text"
    className="form-control beautiful-search"
    placeholder="🔍 Search for products..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>


<div className="product-section my-1">
    <div className="product-background"></div>

    <div className="row">
    {loading ? (
  <div className="d-flex justify-content-center align-items-center my-5">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
) : (
  <>
    {filteredProducts?.map((product) => (
      <div className="col-md-3 justify-content-center mb-4 s" key={product.id}>
        <div className="card shadow product-card">
          <img
            className="mt-4 product_img rounded-image"
            src={img_url + product.product_photo}
            alt=""
          />
          <div className="card-body">
            <h5 className="mt-2">{product.product_name}</h5>
            <p className="text-muted">
              {product.product_description.slice(0, 10)}
            </p>
            <b className="text-warning">{product.product_cost}</b>
            <br />
            <button
              className="btn btn-dark mt-2 w-100"
              onClick={() =>
                navigate("/makepayment", { state: { product } })
              }
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    ))}
  </>
)}
    </div>
</div>

        </div>
    );
}

export default Getproducts;
