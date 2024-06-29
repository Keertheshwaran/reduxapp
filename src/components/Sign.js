import React from 'react'

export default function Sign() {
  return (
    <div> <div className='container'>
    <form>
<div className="mb-3">
<h1 className='text-center'>Sign Up Page</h1>
<label for="exampleInputEmail1" className="form-label">UserName:</label>
<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Password</label>
<input type="password" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Name</label>
<input type="text" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Mobile No.</label>
<input type="text" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Email</label>
<input type="email" className="form-control" id="exampleInputPassword1"/>
</div>

<button type="submit" className="btn btn-primary">Signup</button>
</form>
</div></div>
  )
}
