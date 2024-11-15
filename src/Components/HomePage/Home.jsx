import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            {/* Banner Section Of Home page */}
            <div className="w-[95%] h-[596px] bg-[#9538E2] rounded-[32px] mx-auto -mt-[90px]">

                <div className="font-sora flex flex-col pt-[130px] justify-center items-center gap-[24px]">
                    <h3 className="text-[56px] font-bold text-[#FFFFFF] text-center">
                        Upgrade Your Tech Accessorize with <br />
                        Gadget Heaven Accessories
                    </h3>
                    <p className="font-sora text-[16px] font-normal text-[#FFFFFF] text-center">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                        the coolest accessories, we have it all!
                    </p>
                    <button className="btn bg-[#FFFFFF] font-sora text-[20px] font-bold text-[#9538E2] h-[56px] w-[170px] rounded-[32px]">
                        Shop Now
                    </button>

                </div>
            </div>

            {/* Sub Banner section of home page */}
            <div className="h-[610px] w-[1110px] border-2 bg-[#FFFFFF4D] flex justify-center items-center rounded-[32px] mx-auto -mt-[120px]">
                <img className="w-[1062px] h-[563px] rounded-[32px]" src="/assets/banner.jpg" alt="" />
            </div>

            <div className="mx-auto flex justify-center mt-[20px] mb-[20px]">
                <h3 className=" font-sora text-[40px] font-bold text-[#0B0B0B]">
                    Explore Cutting-Edge Gadgets
                </h3>
            </div>


            {/* Showing Product */}

            <div className="flex gap-6 w-[80%] mx-auto mt-[60px] mb-[60px]">
                
                {/* Product Display .... API will be fetched here*/}
                <div>
                    <Products></Products>
                </div>
            </div>
        </div>
    );
};

export default Home;