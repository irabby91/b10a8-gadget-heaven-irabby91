import { toast } from "react-toastify";

const getAddToCartList = () => {
    const cartedListstr = localStorage.getItem("cart-list");
    if (cartedListstr) {
        const cartedList = JSON.parse(cartedListstr);
        return cartedList;
    } else {
        return [];
    }
};

const addToCartList = (id) => {
    const cartedList = getAddToCartList();

    if (!cartedList.includes(id)) {
        cartedList.push(id);
        const cartedListstr = JSON.stringify(cartedList);
        localStorage.setItem("cart-list", cartedListstr);
        toast("Added to Cart Successfully", {
            position: "top-center",
        });
    } else {
        toast("Item is already in the Cart", {
            position: "top-center",
        });
    }
};

const removeFromCart = (id) => {
    const cartedList = getAddToCartList();
    const updatedCartList = cartedList.filter((itemId) => itemId !== id);
    localStorage.setItem("cart-list", JSON.stringify(updatedCartList));
    toast("Removed from Cart Successfully", {
        position: "top-center",
    });
};

const getAddToWishList = () => {
    const wishListstr = localStorage.getItem("Wish-list");
    if (wishListstr) {
        const wishList = JSON.parse(wishListstr);
        return wishList;
    } else {
        return [];
    }
};

const addToWishList = (id) => {
    const wishList = getAddToWishList();
    if (!wishList.includes(id)) {
        wishList.push(id);
        const wishListstr = JSON.stringify(wishList);
        localStorage.setItem("Wish-list", wishListstr);
        toast("Added to Wish List Successfully", {
            position: "top-center",
        });
    } else {
        toast("Item is already in the Wish List", {
            position: "top-center",
        });
    }
};

const removeFromWishList = (id) => {
    const wishList = getAddToWishList();
    const updatedWishList = wishList.filter((itemId) => itemId !== id); 
    localStorage.setItem("Wish-list", JSON.stringify(updatedWishList));
    toast("Removed from Wish List Successfully", {
        position: "top-center",
    });
};

export { addToCartList, getAddToCartList, removeFromCart, getAddToWishList, addToWishList, removeFromWishList };