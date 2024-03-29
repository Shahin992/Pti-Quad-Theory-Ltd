import image1 from "../../src/assets/Image1.png"
const Banner = () => {
    return (
        <div>
            <div className="my-10 hero  rounded-3xl md:bg-amber-400">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="">    <img src={image1} className=" rounded-lg " />
</div>
   
    <div className="md:w-1/2 md:text-white text-black  pl-4 md:pl-10">
      <h1 className="text-2xl md:text-5xl font-bold text-center">Deliver Food To Your Door Step|</h1>
      <p className="py-6 text-2xl text-center">Authentic Food| Quick Service, Fast Delivery</p>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;