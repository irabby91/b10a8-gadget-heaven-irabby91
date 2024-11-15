import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = ({ product }) => {

    const { product_id, product_title, product_image, price} = product;

    
    return (
        <div className='w-[325px] h-[380px] shadow-md border-2 rounded-[24px] px-6 flex flex-col gap-3 bg-[#ffffff]'>
            <img className='w-[283px] h-[181px]  rounded-[12px] mx-auto mt-2' src={product_image} alt="" />
            <h3 className='font-sora text-[20px] font-semibold text-black'>
                {product_title}
            </h3>
            <p className='font-sora text-[18px] font-medium text-[#09080F99]'>Price: ${price}</p>
            <Link to={`Products/${product_id}`}>
            <button className='btn h-[52px] w-[159px] border-2 border-[#9538E2] font-sora text-[18px] font-semibold text-[#9538E2] rounded-[32px]'>View Details</button>
            </Link> 
            

        </div>
    );
};

export default Product;