import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"


const Signin=()=>{
    const [email,setEmail]= useState("")
    const[password,setPassword]=useState("")

    const [loading, setLoading]=useState("")
    const [error, setError]=useState("")

    const navigate = useNavigate()
    const submit = async (e) =>{
        e.preventDefault()

        setLoading("please wait as we log you in")

        try{
            const data = new FormData()
            data.append("email",email)
            data.append("password",password)

             // we axios to post data to the backend API
        const response = await axios.post(
            "https://manuelnethan.pythonanywhere.com/api/signin",
            data
          ) 
        console.log(response)
          setLoading("")
          if(response.data.user){
            localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/")
          }
          else{
            setError(response.data.message)
          }
        }catch (error){
            setLoading("")
            setError(error.message)

        }
    }



    return(
        <div className="row justify-content-center mt-5 background">
            <div className="col-md-6  p-4 form-container">
                <h2>Sign In</h2>
                {loading}
                {error}
                <form onSubmit={submit}>
                    <input 
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    style={{ backgroundColor: 'black', color: 'white' }}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                 
                    <input type="password"
                    className="form-control mb-3"
                    placeholder="password"
                    value={password}
                    style={{ backgroundColor: 'black', color: 'white' }}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                    <br />
                    <button type="submit"
                    className="btn btn-primary">Sign In</button>
                </form>
                <br />
                <p>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}

export default Signin