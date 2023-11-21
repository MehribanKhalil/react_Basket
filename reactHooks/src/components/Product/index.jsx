import React from 'react'

const Product = ({name,price,addToCart}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{price}</p>
        {
            addToCart &&  <button>add</button>
        }
    </div>
  )
}

export default Product