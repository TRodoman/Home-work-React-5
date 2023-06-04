import React, { Component } from "react";
import ProductCard from "../productCard/productCard.jsx";


import "../app/app.css"



export default class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [],
        isLoading: false,
      }
    }
    componentDidMount() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://fakestoreapi.com/products', true);
      xhr.send();
      this.setState({ isLoading: true })

      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
          return false
        }
  
        if (xhr.status !== 200) {
          console.log(xhr.status + ': ' + xhr.statusText)
        } else {
          this.setState({
            data: JSON.parse(xhr.responseText),
            isLoading: false,
          })  
        }  
      } 
    } 

    renderProducts() {
        console.log(this.state.data);
        const { data, isLoading } = this.state;
       
        if (isLoading) {
          return <div className="loader-box"><span class="loader"></span></div>
        } else {
          return data.map(item => {
            return (
            <ProductCard key={item.id} id={item.id} category={item.category} price={item.price} image={item.image} title={item.title} description={item.description} count={item.rating.count} rating={item.rating.rate} />
             ) 
          }) 
        } 
      }
      render() {
        return (
          <div className='app'>
            <div className='product-list'>
              {this.renderProducts()}
            </div>
          </div>
        )
      }
    }