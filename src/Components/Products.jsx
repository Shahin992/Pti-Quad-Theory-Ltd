/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Products = () => {

    const [allProducts,setAllProducts] = useState([])
  


    useEffect(()=>{
        fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
        .then(res => res.json())
        .then(data=> setAllProducts(data.Items))
    },[])
     

    const recommededProducts = allProducts.filter(product => product.IsRecommended === true);    
    const recommededProductsShow = recommededProducts.slice(0, 5);    
    const popularProducts = allProducts.filter(product => product.IsPopular === true);    
    const popularProductsShow = popularProducts.slice(0, 5);   
    console.log(popularProducts);


    return (
        <div className="my-10">

            <div>
                {/* Popular Section */}
                <div className="flex justify-between my-8">
                    <h2 className="text-3xl font-bold">Popular</h2>
                    <div className="flex justify-center items-center">
                        <p className="text-orange-400 text-xl ">Add More</p>
                        <div className="flex justify-center gap-1 items-center">
                        <MdOutlineKeyboardArrowLeft className="size-8" />
                        <MdOutlineKeyboardArrowRight className="size-8" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5  gap-5 justify-center items-center">
                {
                   popularProductsShow.map(product => (
                    <div className="card h-80  bg-base-100 ">
                    <figure  className="h-full">
                      <img src={product.ImageUrl} alt="Shoes" className="rounded-xl h-full" />
                    </figure>
                    <h2 className="mt-2 flex justify-center items-center card-title text-center">{product.Name}</h2>
                   
                  </div>
                    
                   )) 
                }
                </div>


            </div>


            <div>
                {/* Recommended section */}

                <div className="flex justify-between my-8">
                    <h2 className="text-3xl font-bold">Recommended</h2>
                    <div className="flex justify-center items-center">
                        <p className="text-orange-400 text-xl ">Add More</p>
                        <div className="flex justify-center gap-1 items-center">
                        <MdOutlineKeyboardArrowLeft className="size-8" />
                        <MdOutlineKeyboardArrowRight className="size-8" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 gap-5 justify-center items-center">
                {
                  recommededProductsShow.map(product => (
                    <div className="card h-80  bg-base-100 ">
                    <figure  className="h-full">
                      <img src={product.ImageUrl} alt="Shoes" className="rounded-xl h-full" />
                    </figure>
                    <h2 className="mt-2 flex justify-center items-center card-title text-center">{product.Name}</h2>
                   
                  </div>
                    
                   )) 
                }
                </div>


            </div>
            
        </div>
    );
};

export default Products;