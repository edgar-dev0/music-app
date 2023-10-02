import React from 'react'
/* De esta forma enviamos un token al backend */

const getConfigToken = () => {
  return {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
  }
}

export default getConfigToken
