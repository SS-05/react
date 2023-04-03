import React from 'react'

const FavoriteList = ({ favorites }) => {
  return (
    <div>
      <h3>Favorite List</h3>
      <ul>
        {favorites.map((favorite, index) => (
          <li>{favorite.name}</li>
          // <li>Name:{favorite.name}&nbsp;&nbsp;&nbsp; Email:{favorite.email}</li>
          
        ))}
      </ul>
    </div>
  )
}

export default FavoriteList