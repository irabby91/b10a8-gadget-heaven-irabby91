import { useLoaderData } from "react-router-dom";
import {
    getAddToCartList,
    getAddToWishList,
    addToCartList,
    removeFromCart,
    removeFromWishList,
} from "../../Utility/AddToCart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
    const allProduct = useLoaderData();
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [activeSection, setActiveSection] = useState("Cart");
    const [totalPrice, setTotalPrice] = useState(0);
    const [isAscending, setIsAscending] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedCartList = getAddToCartList();
        const cartList = allProduct.filter((product) => storedCartList.includes(product.product_id));
        setCartList(cartList);
        calculateTotalPrice(cartList);
    }, [allProduct]);

    useEffect(() => {
        const storedWishList = getAddToWishList();
        const wishList = allProduct.filter((product) => storedWishList.includes(product.product_id));
        setWishList(wishList);
    }, [allProduct]);

    useEffect(() => {
        calculateTotalPrice(cartList);
    }, [cartList]);

    const calculateTotalPrice = (cartItems) => {
        const total = cartItems.reduce((acc, product) => acc + product.price, 0);
        setTotalPrice(total);
    };

    const handleAddToCart = (productId) => {
        addToCartList(productId);
        const updatedCart = getAddToCartList().map((id) =>
            allProduct.find((product) => product.product_id === id)
        );
        setCartList(updatedCart);
        removeFromWishList(productId);
        const updatedWishList = getAddToWishList().map((id) =>
            allProduct.find((product) => product.product_id === id)
        );
        setWishList(updatedWishList);
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        const updatedCart = getAddToCartList().map((id) =>
            allProduct.find((product) => product.product_id === id)
        );
        setCartList(updatedCart);
    };

    const handleRemoveFromWishList = (productId) => {
        removeFromWishList(productId);
        const updatedWishList = getAddToWishList().map((id) =>
            allProduct.find((product) => product.product_id === id)
        );
        setWishList(updatedWishList);
    };

    const handleSortByPrice = () => {
        const sortedCart = [...cartList].sort((a, b) =>
            isAscending ? b.price - a.price : a.price - b.price
        );
        setCartList(sortedCart);
        setIsAscending(!isAscending);
    };

    const handlePurchase = () => {
        setShowModal(true);
        setCartList([]);
        localStorage.removeItem("cart-list");
        setTotalPrice(0);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="flex flex-col bg-[#9538E2] h-[344px] items-center gap-6 pt-[32px]">
                <h3 className="font-sora text-[32px] font-bold text-[#FFFFFF]">Dashboard</h3>
                <p className="font-sora text-[18px] font-normal text-[#FFFFFF] text-center">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to
                    <br /> the coolest accessories, we have it all!
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={() => setActiveSection("Cart")}
                        className={`w-[170px] h-[52px] rounded-[32px] border-2 text-[18px] font-sora font-medium ${activeSection === "Cart" ? "bg-white text-[#9538E2]" : "text-[#FFFFFF]"
                            }`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={() => setActiveSection("WishList")}
                        className={`w-[170px] h-[52px] rounded-[32px] border-2 text-[18px] font-sora font-medium ${activeSection === "WishList" ? "bg-white text-[#9538E2]" : "text-[#FFFFFF]"
                            }`}
                    >
                        WishList
                    </button>
                </div>
            </div>

            {/* Cart Section */}
            {activeSection === "Cart" && (
                <div className="flex flex-col items-center gap-4 mb-[32px] mt-5">
                    <div className="flex gap-[300px] items-start">
                        <h3 className="font-sora text-[24px] font-bold text-[#0B0B0B]">Cart</h3>
                        <div className="flex items-center justify-around gap-3">
                            <h3 className="font-sora text-[24px] font-bold text-[#0B0B0B]">
                                Total Price: ${totalPrice.toFixed(2)}
                            </h3>
                            <button
                                onClick={handleSortByPrice}
                                className="w-[200px] h-[55px] rounded-[32px] border-2 bg-white font-sora text-[18px] font-semibold text-[#9538E2] btn"
                            >
                                Sort By Price
                            </button>
                            <button
                                onClick={handlePurchase}
                                className="w-[140px] h-[55px] rounded-[32px] bg-[#9538E2] font-sora text-[18px] font-semibold text-[#ffffff] btn"
                            >
                                Purchase
                            </button>
                        </div>
                    </div>

                    {cartList.map((product) => (
                        <div
                            key={product.product_id}
                            className="relative flex gap-3 w-[80%] h-[260px] border-2 justify-around items-center rounded-[18px] bg-white"
                        >
                            <button
                                onClick={() => handleRemoveFromCart(product.product_id)}
                                className="absolute top-4 right-4 text-red-500 text-[24px] font-bold"
                            >
                                &#x2715;
                            </button>
                            <img
                                className="w-[275px] h-[192px] rounded-[12px]"
                                src={product.product_image}
                                alt=""
                            />
                            <div className="flex flex-col gap-3">
                                <h3 className="font-sora text-[24px] font-semibold text-[#09080F]">
                                    {product.product_title}
                                </h3>
                                <p className="font-sora text-[18px] font-normal text-[#09080F99] w-[700px]">
                                    {product.description}
                                </p>
                                <p className="font-sora text-[20px] font-semibold text-[#09080FCC]">
                                    Price: ${product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Wish List Section */}
            {activeSection === "WishList" && (
                <div className="flex flex-col items-center gap-4 mb-[32px] mt-5">
                    <h3 className="text-left font-sora text-[24px] font-bold text-[#0B0B0B]">Wish List</h3>
                    {wishList.map((product) => (
                        <div
                            key={product.product_id}
                            className="relative flex gap-3 w-[80%] h-[260px] border-2 justify-around items-center rounded-[18px] bg-white"
                        >
                            <button
                                onClick={() => handleRemoveFromWishList(product.product_id)}
                                className="absolute top-4 right-4 text-red-500 text-[24px] font-bold"
                            >
                                &#x2715;
                            </button>
                            <img
                                className="w-[275px] h-[192px] rounded-[12px]"
                                src={product.product_image}
                                alt="Product"
                            />
                            <div className="flex flex-col gap-3">
                                <h3 className="font-sora text-[24px] font-semibold text-[#09080F]">
                                    {product.product_title}
                                </h3>
                                <p className="font-sora text-[18px] font-normal text-[#09080F99] w-[700px]">
                                    {product.description}
                                </p>
                                <p className="font-sora text-[20px] font-semibold text-[#09080FCC]">
                                    Price: ${product.price}
                                </p>
                                <button
                                    onClick={() => handleAddToCart(product.product_id)}
                                    className="w-[164px] h-[52px] bg-[#9538E2] text-[18px] font-sora font-medium text-[#FFFFFF] rounded-[32px]"
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Congratulations Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className=" flex flex-col items-center bg-white rounded-lg p-8 text-center w-[400px]">
                        <img className="w-[72px] h-[68px]" src="/src/assets/Group.png" alt="" />
                        <h2 className="text-xl font-bold text-[#9538E2]">Payment Successful</h2>
                        <p className="mt-4 text-lg">Your purchase was successful!</p>
                        <p className="mt-4 text-md">Total Price: ${cartList.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</p> {/* Ensure the total price is being displayed */}
                        <button
                            onClick={handleCloseModal}
                            className="mt-6 w-full py-2 bg-[#9538E2] text-white rounded-[32px]"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
