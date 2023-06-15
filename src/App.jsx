import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import ExerciseList from './component/ExerciseList/ExerciseList'
import EditExercises from './component/EditExercises/EditExercises'
import CreateExercises from './component/CreateExercises/CreateExercises'
import CreateUser from './component/CreateUser/CreateUser'

import './App.css'

function App() {
  return (
    <Router>
      <div className="appContainer">
        <Navbar />
        <Routes>
          <Route path="/" exact Component={ExerciseList} />
          <Route path="/edit/:id" Component={EditExercises} />
          <Route path="/create" Component={CreateExercises} />
          <Route path="/user" Component={CreateUser} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
