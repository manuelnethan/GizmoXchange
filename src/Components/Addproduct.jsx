import axios from "axios"
import { useState } from "react"


const Addproducts=()=>{

    const[product_name,setProductname]= useState("")
    const[product_description,setProductDescription]=useState("")
    const[product_cost,setProductCost]=useState("")
    const[product_photo,setproductPhoto]=useState([])

    const[loading,setLoading]=useState("")
    const[message,setMessage]=useState("")
    const[error,setError]=useState("")

    const submit=async(e)=>{
        e.preventDefault();

        setLoading("please wait as we upload your data")
        try {
            const data = new FormData()
            data.append("product_name",product_name)
            data.append("product_description",product_description)
            data.append("product_cost",product_cost)
            data.append("product_photo",product_photo)

            const response = await axios.post(
               "https://manuelnethan.pythonanywhere.com/api/add_product",
               data
            )

            setLoading("")
            setMessage(response.data.success)

        } catch  {
            setLoading("")
            setError(error.message)
            
        }
    }
    return(
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h3 style={{ backgroundColor:'gray'}}>
                    Upload products
                </h3>
                {loading}
                {message}
                {error}

               
                <form onSubmit={submit} style={{ backgroundColor: 'black', padding: '20px', borderRadius: '5px' }}>
                    <input type="text"
                    placeholder="Enter product name"
                    className="form-control form-container"
                    value={product_name}
                    style={{ backgroundColor: 'black', color: 'white' }}
                    onChange={(e)=>setProductname(e.target.value)}
                    required />
                    <br />
                    <textarea className="form-control form-container"
                    placeholder="Descride your product"
                    value={product_description}
                    style={{ backgroundColor: 'black', color: 'white' }}
                    onChange={(e)=>setProductDescription(e.target.value)}
                    required>
                    </textarea>
                    <br />
                    <input type="number"
                    placeholder="Enter product cost"
                    className="form-control form-container"
                    value={product_cost}
                    style={{ backgroundColor: 'black', color: 'white' }}
                    onChange={(e)=>setProductCost(e.target.value)}
                    required />
                    <br />
                    <input type="file"
                    className="form-control form-container"
                    accept="image/*"
                    onChange={(e)=>setproductPhoto(e.target.files[0])}
                    style={{ backgroundColor: 'black', color: 'white' }}
                    required />
                    <br /><br />

                    <button className="btn btn-primary form-container"
                    type="submit"
                    >Upload Product</button>
                </form>
            </div>
        </div>
    )
}

export default Addproducts