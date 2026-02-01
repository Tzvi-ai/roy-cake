import React from 'react'
const Card = (props) => {
  return (
    <div className="cake-card">
        <div className="card-image-container">
            <img src={props.pic} alt="Cake" className="card-image" />
        </div>
        <div className="card-content">
            <h3 className="cake-name">{props.name}</h3>
            <div className="cake-info">
                <span className="info-label">Price: </span> <span>{props.price}</span>
            </div>
            <div className="cake-info">
                <span className="info-label">Ingredients:</span> <span>{props.ingredients}</span>
            </div>
            <div className="cake-info">
                <span className="info-label">Calories:</span> <span>{props.calories}</span>
            </div>
            <button onClick={props.func}  className="add-to-cart-btn">Add to cart</button>
        </div>
    </div>
  )
}
export default Card