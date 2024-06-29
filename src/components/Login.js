import React from 'react'

export default function Login() {
  return (
    <div className='container'>
        <form>
  <div className="mb-3">
    <h1 className='text-center'>Login Page</h1>
    <label for="exampleInputEmail1" className="form-label">UserName:</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </div>
  )
}
