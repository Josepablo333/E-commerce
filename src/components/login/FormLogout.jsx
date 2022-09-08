import React from 'react'
import './style/formLogout.css'

const FormLogout = ({isLogged, setIsLooged}) => {

  const handleClick = () => {
    setIsLooged()
    localStorage.removeItem('token')
  }

  return (
    <article className='form-logout'>
      <i className="form-logout__icon fa-regular fa-user"></i>
      <h2 className='form-logout__username'>
        {`${isLogged?.firstName} ${isLogged?.lastName}`}
      </h2>
      <button onClick={handleClick} className='form-logout__btn'>Log out</button>
    </article>
  )
}

export default FormLogout