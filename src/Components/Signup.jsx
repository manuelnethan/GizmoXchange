import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const Signup=()=>{

    const [username, setusername]= useState("")
    const [email,setEmail]= useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")
    

    const [success, setSuccess]=useState("")
    const [error, setError]=useState("")
    const [loading, setLoading]=useState("")

    const submit =async (e) => {
      e.preventDefault()
      setLoading("Please wait as we upload your data")

      try{
        const data = new FormData()
        data.append("username",username)
        data.append("email",email)
        data.append("password",password)
        data.append("phone",phone)

        // we axios to post data to the backend API
        const response = await axios.post(
          "https://manuelnethan.pythonanywhere.com/api/signup",
          data
        ) 

        setLoading("")
        setSuccess(response.data.Success)

      }catch(error){
        setLoading("")
        setError(error.message)
      }
    }
    return(
        <div className="row justify-content-center mt-4  animated-background">
          <div  className="col-md-6 p-4 form-container" style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: "10px"}}>

            <h2>Signup</h2>
            
            {loading && (
          <div className="d-flex justify-content-center my-3">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <p style={{ color: "red" }} className="text-center">
            {error}
          </p>
        )}
            {success}
            <h1 className="form-containers form-controls"><b>JOIN US TODAY</b></h1>

            <form onSubmit={submit}>
                <input type="text" 
                className="form-control " 
                placeholder="Enter Username" 
                style={{ backgroundColor: 'beige', color: 'white' }}
                value={username} onChange={(e)=>setusername(e.target.value)} 
                required />
                <br />

                <input type="email" 
                placeholder="Enter email" 
                className="form-control" 
                value={email} 
                style={{ backgroundColor: 'beige', color: 'white' }}
                onChange={(e)=>setEmail(e.target.value)} 
                required />

                <br />
                <input type="password" 
                className="form-control" 
                placeholder="Enter password" 
                value={password} 
                style={{ backgroundColor: 'beige', color: 'white' }}
                onChange={(e)=>setPassword(e.target.value)} 
                required />
                <br />

                <input type="text" 
                placeholder="Enter phone" 
                className="form-control" 
                value={phone} 
                style={{ backgroundColor: 'beige', color: 'white' }}
                onChange={(e)=>setPhone(e.target.value)} 
                required />

                

                <br />
                <button type="submit" 
                className="btn btn-dark">Sign up</button>
            </form>

            <p>Already have an account? 
                <Link to="/signin">Signin</Link>
            </p>

          </div>
        </div>
    )
}

export default Signup