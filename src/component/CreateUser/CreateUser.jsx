import React, { useState } from 'react'
import axios from 'axios'

const CreateUser = (props) => {
  const [username, setUsername] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const user = {
      username: username,
    }
    console.log(user)

    axios
      .post('http://localhost:5000/users/add', user)
      .then((res) => console.log(res.data))
    //   .catch((err) => res.status(400).json('Error' + err))
    setUsername('')
  }

  return (
    <div className="formContainer">
      <h3>Create New Exercise Log</h3>
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="col-12">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create User
          </button>
        </div>
      </form>
    </div>
  )
}
export default CreateUser
