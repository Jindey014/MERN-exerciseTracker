import React from 'react'
import { useState } from 'react'
import './CreateExercise.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useRef } from 'react'

const CreateExercises = (props) => {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date())
  const [user, setUser] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    }
    window.location = '/'
    console.log(exercise)
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
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label">Duration( in Minutes) </label>
          <input
            type="text"
            className="form-control"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Date</label>
          <DatePicker
            className="form-control"
            id="date"
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create Exercise Log
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateExercises
