// react
import React, { useState } from 'react';

// material tailwind
import { IconButton } from '@material-tailwind/react';

// icons
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

function ProductCard({ data }) {
  const [clickedItems, setClickedItems] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  const handleClick = (id) => {
    setClickedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

  const handleCheck = (id) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

  return (
    <>
      {data && data.map((obj) => {
        return (
          <div key={obj.id} className='w-[350px] rounded-lg p-7' style={{ border: `2px solid #EFEFEF` }}>
            <div className='flex object-fill w-full'>
              <div className='w-full relative'>
                <div className='mb-[29px]'>
                  <img className='w-[294px] h-[294px]' src={obj.image} alt={obj.text} />
                  <div className='absolute right-0 top-0'>
                    <button onClick={() => handleClick(obj.id)} className="btn btn-circle btn-outline">
                      {clickedItems[obj.id] ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
                    </button>
                  </div>
                </div>
                
                <div>
                  <div class="flex items-center mb-3 w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 text-yellow-700 cursor-pointer">
                        <path fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 text-yellow-700 cursor-pointer">
                        <path fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 text-yellow-700 cursor-pointer">
                        <path fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 text-yellow-700 cursor-pointer">
                        <path fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="w-6 h-6 cursor-pointer text-blue-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                        </path>
                      </svg>
                    </span>
                    <div class="flex items-center gap-2 font-bold text-blue-gray-500 ml-5">
                      (4.7)
                      <div class="inline-flex items-center">
                      </div>
                    </div>
                  </div>

                  <p className='font-medium text-base leading-[25px] text-[#1F2533]'>
                    {obj?.text}
                  </p>

                  <div className='flex items-center justify-between mt-3'>
                    <p className='font-semibold text-[28px] text-[#1F2533]'>
                      {obj.price}$
                    </p>
                    <IconButton onClick={() => handleCheck(obj.id)} className='p-2'>
                      {checkedItems[obj.id] ? <FaCheckCircle className='text-[#359740]' size={22} /> : <AiOutlineShoppingCart size={22} />}
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
