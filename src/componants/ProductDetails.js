import React from 'react';
// import styled from 'styled-components';
import Menu from '../data/ServiceData';


const ProductDetails = () => {

    
    return (
        <div>
            {Menu.map((item, index) =>(
                <h1 key="index">
                    {item.name}
                </h1>
            ))}
            
        </div>
    )
}

export default ProductDetails
