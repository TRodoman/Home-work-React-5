import React from "react";

import "../productCard/productCard.css"

const ProductCard = (item)=> {
   
    return (
        <div key={item.id} className="item-card">
                    <p className="category" hidden>{item.category}</p>
                    <div className="image-box">
                    <img src={item.image} alt="фото товара"/>
                    </div>
                    <p className="title">{item.title}</p>
                    <div className="description">{item.description}</div>

                    <div className="price-box"> 
                    <p className="count">In stock: {item.count}</p>
                    <p hidden>Рейтинг: {item.rating}</p>
                    <p className="price">{item.price} $</p>
                    </div>

                    <button type="button">Add tu cart</button>
        </div>
    )
}

export default ProductCard;



// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: 
// count: 120
// rate: 3.9
// [[Prototype]]
// : 
// Object
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"