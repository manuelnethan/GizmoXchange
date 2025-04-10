import React,{useState} from 'react' // "rafce" shortcut
import { Link } from 'react-router-dom'
import axios from "axios"
import { useLocation } from 'react-router-dom' //used to access info about the current url
const Makepayments = () => {
    const {product}=useLocation().state || {}
    const [phone,setPhone] = useState("")
    const[message,setMessage]= useState("")

    const submit = async (e) => {
        e.preventDefault()
        setMessage("Please wait as we process payment")

        const data = new FormData()
        data.append("phone",phone)
        data.append("amount",product.product_cost)

        
            const response = await axios.post(
                "https://manuelnethan.pythonanywhere.com/api/mpesa_payment",
                data
             )
            console.log(response) 
        setMessage(response.data.message)
         
    }



  return (
    <div>
        <nav className="m-4 form-container">
        <Link to='/' className='btn btn-dark mx-2'>GO BACK TO PRODUCTS</Link>
        </nav>
        <h1>Make Payment - Lipa na m-pesa</h1>
        <p>
            Product Name: {product.product_name}
        </p>
        <p>    
            product Cost: {product.product_cost}
        </p>
        <form onSubmit={submit}>
            {message}
            <br />
            <input type="text"
            placeholder= "Enter your phone number" 
            value = {phone}
            onChange={(e)=> setPhone(e.target.value)}
            />
            <br /><br />
            <button className='btn btn-primary'>
                Make Payment
            </button>
        </form>
    </div>
  )
}

export default Makepayments