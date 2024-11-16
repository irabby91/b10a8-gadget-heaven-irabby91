import { useLoaderData, useParams } from "react-router-dom";
import { addToCartList, addToWishList } from "../../Utility/AddToCart";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
    const { productId } = useParams();
    const { } = productId;
    console.log(productId);
    const data = useLoaderData();
    const product = data.find(product => product.product_id === productId)
    const specification = product.Specification;
    const [one, two, three, four] = specification;

    const handleAddToCart = (id) => {
        addToCartList(id)
    }
    const handleAddToWishList = (id) => {
        addToWishList(id)
    }
    return (
        <div>
            <Helmet><title>Gadget Heaven | Product Details</title></Helmet>
            <div className="w-[100%] bg-[#9538E2] h-[463px] flex flex-col gap-4 items-center pt-[32px]">
                <h3 className="font-sora text-[32px] font-bold text-[#ffffff]">
                    Product Details
                </h3>
                <p className="text-center font-sora text-[16px] font-normal text-[#ffffff]">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                </p>
            </div>
            <div className="flex justify-around items-center bg-[#ffffff] w-[1280px] h-auto rounded-[32px] mx-auto -mt-[200px] mb-[100px] pt-[32px] pb-[32px]">
                <div className="flex justify-around">
                    <img className="w-[425px] h-[503px]" src={product.product_image} alt="" />
                    <div className="flex flex-col gap-[12px]">
                        <h3 className="font-sora text-[28px] font-semibold text-[#09080F]">{product.product_title}</h3>
                        <p className="font-sora text-[20px] font-semibold text-[#09080FCC]">Price: ${product.price}</p>
                        <div className="h-[32px] w-[150px] bg-[#309C081A] rounded-[32px] px-3 text-center text-[#309C08] border-2">
                            {product.availability ? 'In Stock' : 'Out of Stock'}
                        </div>
                        <p className="text-[18px] font-sora font-normal text-[#09080F99]">{product.description}</p>
                        <div>
                            <h3 className="font-sora text-[18px] font-bold text-[#09080F]"> Specification: </h3>
                            <p className="font-sora text-[18px] font-normal text-[#09080F99]">1. {one}</p>
                            <p className="font-sora text-[18px] font-normal text-[#09080F99]">2. {two}</p>
                            <p className="font-sora text-[18px] font-normal text-[#09080F99]">3. {three}</p>
                            <p className="font-sora text-[18px] font-normal text-[#09080F99]">4. {four}</p>
                        </div>
                        <div>
                            <h3 className="font-sora text-[18px] font-bold text-[#09080F]">Rating:</h3>
                            <div className="rating flex gap-3">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <div className="w-[50px] h-[32px] rounded-[16px] bg-[#09080F0D] flex justify-center items-center">
                                    <p className="font-sora text-[18px] font-normal text-[#09080F99] "> {product.rating}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <button onClick={() => handleAddToCart(productId)} className="w-[193px] h-[48px] bg-[#9538E2] rounded-[32px] font-sora text-[18px] font-bold text-[#FFFFFF]">
                                Add to cart  <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                            <button onClick={() => handleAddToWishList(productId)} className="btn border-2 rounded-full w-[48px] h-[48px] flex items-center justify-center">
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;