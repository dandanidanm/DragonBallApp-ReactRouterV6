import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";
const NotFound = () => {
  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext)
  const handleBack = () => {
    dispatch({type: authTypes.logout})
    navigate('login')
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="my-3">Error 404 Not Found</h1>
      <button onClick={handleBack} className="btn btn-primary">
        Regresar
      </button>
    </div>
  )
}

export default NotFound