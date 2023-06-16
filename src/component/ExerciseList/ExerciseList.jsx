import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './ExerciseList.css'
// import Exercise from '../../../backend/models/exerciseModel'

const ExerciseList = () => {
  let [exercises, setExercises] = useState([])

  const deleteExercise = (id) => {
    axios
      .delete('http://localhost:5000/exercises/' + id)
      .then((res) => console.log(res.data))
    setExercises(exercises.filter((el) => el._id !== id))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    try {
      let response = await axios.get('http://localhost:5000/exercises')
      setExercises(response.data)
    } catch (error) {}
  }

  return (
    <div className="formContainer">
      <h3>Logged Exercises</h3>
      <table className="table ">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise._id}>
              <td>{exercise.username}</td>
              <td>{exercise.description}</td>
              <td>{exercise.duration}</td>
              <td>{exercise.date}</td>
              <td>
                <Link to={`/edit/${exercise._id}`}>
                  {' '}
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: 10 }}
                  >
                    Edit
                  </button>
                </Link>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => deleteExercise(exercise._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExerciseList
