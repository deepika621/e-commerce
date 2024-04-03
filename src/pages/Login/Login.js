import "./Login.css";

function Login(){
    return(
      <div className="Login">
        <h3>Please Log In.</h3>
            <hr />
        <div className="container">
                
      <form action="">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input type="email" className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input type="password" className="form-control"/>
        </div>
        <button className="float-end btn btn-primary">
          Log In
        </button>
    </form>
    </div>
    </div>
    )

}

export default Login;