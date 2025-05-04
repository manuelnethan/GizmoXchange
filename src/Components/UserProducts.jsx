import axios from "axios";
import { useState, useEffect } from "react";

const UserProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("Loading your products...");
  const [error, setError] = useState("");

  const img_url = "https://manuelnethan.pythonanywhere.com/static/images/";

  // Get the logged-in user once here (outside useEffect)
  const user = JSON.parse(localStorage.getItem("user"));

  const getUserProducts = async () => {
    if (!user) return;

    try {
      setLoading("Fetching your products...");
      const response = await axios.get(
        "https://manuelnethan.pythonanywhere.com/api/get_product_details"
      );
      const userProducts = response.data.filter(
        (product) => product.user_id === user.id
      );
      setProducts(userProducts);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError("An error occurred while fetching your products.");
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        "https://manuelnethan.pythonanywhere.com/api/delete_product",
        { data: { product_id: productId } }
      );
      setProducts(products.filter((product) => product.product_id !== productId));
      alert("Product deleted successfully");
    } catch (error) {
      alert("An error occurred while deleting the product");
    }
  };

  useEffect(() => {
    getUserProducts();
    // Run only once on mount to prevent flickering
  }, []);

  return (
    <div className="row">
      <h3>Your Products</h3>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      {!loading && products.length === 0 && <p>You have no products added yet.</p>}

      {products.map((product) => (
        <div className="col-md-3 mb-4" key={product.product_id}>
          <div className="card shadow">
            <img
              className="mt-4 product-img rounded-image"
              src={img_url + product.product_photo}
              alt={product.product_name}
            />
            <div className="card-body">
              <h5>{product.product_name}</h5>
              <p>{product.product_description.slice(0, 10)}...</p>
              <b>{product.product_cost}</b>
              <button
                className="btn btn-danger mt-2"
                onClick={() => handleDelete(product.product_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProducts;
