import {useState} from "react"
import {useNavigate} from "react-router-dom"
import "./style.css";
const Login=()=>{
  const navigate=useNavigate()
  const [state,setState]=useState({
    email:"",
    password:"",
    terms:false
  })
  const handleChange=(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }
  const submit=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    console.log(state)
    navigate("/root")
  }
  return (
    <>
<section className="background-radial-gradient overflow-hidden">
 <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{"zIndex": "10"}}>
        <h1 className="my-5 display-5 text-light fw-bold ls-tight" style={{"color":"rgb(218, 81%, 95%)"}}>
          The best offer <br />
          <span style={{"color": "rgb(218, 81%, 75%)"}}>htmlFor your business</span>
        </h1>
        <p className="mb-4 opacity-70 text-light" style={{"color":"rgb(218, 81%, 85%)"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div className="position-absolute radius-shape-1 rounded-circle shadow-5-strong"></div>
        <div className="position-absolute radius-shape-2 shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form onSubmit={submit}>
            
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-floating">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" htmlFor="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-floating">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              
              <div className="form-floating mb-4">
                <label className="form-label" htmlFor="form3Example3">Email address</label>
                <input type="email" name="email" id="form3Example3" value={state.email} onChange={handleChange} className="form-control" />
              </div>

             
              <div className="form-floating mb-4">
                <label className="form-label" htmlFor="form3Example4">Password</label>
                <input type="password" id="form3Example4" name="password" value={state.password} onChange={handleChange} className="form-control" />
              </div>

             
              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" name="terms" type="checkbox" value={state.terms} onChange={handleChange} id="form2Example33" />
                <label className="form-check-label" htmlFor="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>

              
              <button type="submit" className="btn btn-primary btn-block mb-4" onClick={submit}>
                Sign up
              </button>

              
              <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
    )
}
export default Login;