// write product card here
// write product card here
import React from 'react'
import './productcard.css';
import Button from "./button"

const productcard = () => {
    const productImage = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnRumyZFQspqQUxclySoJCYtu0XvJxbp6BAV8aWowD_Qja6-MJXLfqWFaCbz-tW9ogBAiR7dWc8rkRXEO80f-tkx3BUSbHXQKHSXYo5NPzu-2lirFgHzPA";
    const productName = "Amma dairilo konni pageelu";
    const price = "₹229.90";

  return (
    <div className='product-card'>
        <img src={productImage} alt="" className='product-image'/>
        <h3 className='product-name'>{productName}</h3>
        <p className='product-price'>{price}</p>
        <Button label="View product"/>
    </div>
  )
}
export default  productcard