import "./Login.css";

function Login(){
    return(
        <div className="container">
            <h3>Please Log In.</h3>
            <hr />
                
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
        <button className="btn btn-primary">
          Log In
        </button>
    </form>
    </div>
    )

}

export default Login;