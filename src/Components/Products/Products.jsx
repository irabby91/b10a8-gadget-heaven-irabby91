import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Products');

    useEffect(() => {
        fetch('/ProductData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const filteredProducts = products.filter(product => {
        if (selectedCategory === 'All Products') return true;
        return product.category === selectedCategory;
    });

    const getButtonClass = (category) => {
        return category === selectedCategory
            ? "btn w-[192px] h-[52px] rounded-[32px] bg-[#9538E2] text-white"
            : "btn w-[192px] h-[52px] rounded-[32px] bg-gray-200 text-gray-700";
    };

    return (
        <div className='flex gap-4'>
            {/* Category Buttons */}
            <div className="flex flex-col gap-3 w-[250px] h-[400px] rounded-[32px] bg-[#ffffff] justify-center items-center">
                <button
                    className={getButtonClass('All Products')}
                    onClick={() => setSelectedCategory('All Products')}
                >
                    All Products
                </button>
                <button
                    className={getButtonClass('Mobile')}
                    onClick={() => setSelectedCategory('Mobile')}
                >
                    Mobile
                </button>
                <button
                    className={getButtonClass('Laptop')}
                    onClick={() => setSelectedCategory('Laptops')}
                >
                    Laptop
                </button>
                <button
                    className={getButtonClass('Accessories')}
                    onClick={() => setSelectedCategory('Earbuds')}
                >
                    Accessories
                </button>
                <button
                    className={getButtonClass('Smart Watches')}
                    onClick={() => setSelectedCategory('Smart Watches')}
                >
                    Smart Watches
                </button>
            </div>


            <div className='flex justify-center items-center w-[1016px] h-full'>
                {filteredProducts.length > 0 ? (
                    <div className='grid grid-cols-3 gap-[30px]'>
                        {filteredProducts.map(product => (
                            <Product product={product} key={product.product_id} />
                        ))}
                    </div>
                ) : (
                    <div>
                        <img className='rounded-3xl' src="/public/assets/product-not-found.jpg" alt="" />
                    </div>

                )}
            </div>
        </div>
    );
};

export default Products;
