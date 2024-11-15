const Footer = () => {
  return (
    <div className="flex flex-col justify-center gap-7 bg-[#ffffff] pt-[30px] pb-[30px]">
      <div>
        <h3 className="mb-2font-sora text-[32px] font-bold text-[#09080F] text-center">Gadget Heaven</h3>
        <p className="font-sora text-[16px] font-normal text-[#09080F99] text-center">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col gap-3">
          <h3 className="font-sora text-[18px] font-bold text-[#09080F]">Services</h3>
          <ul className="font-sora text-[16px] font-normal text-[#09080F99]">
            <li><a href="">Product Support</a></li>
            <li><a href="">Order Tracking</a></li>
            <li><a href="">Shipping & Delivery</a></li>
            <li><a href="">Returns</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-sora text-[18px] font-bold text-[#09080F]">Company</h3>
          <ul className="font-sora text-[16px] font-normal text-[#09080F99]">
            <li><a href="">About Us</a></li>
            <li><a href="">Career</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-sora text-[18px] font-bold text-[#09080F]">Legal</h3>
          <ul className="font-sora text-[16px] font-normal text-[#09080F99]">
            <li><a href="">Terms of Services</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Footer;