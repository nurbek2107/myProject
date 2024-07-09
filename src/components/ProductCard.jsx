import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-tailwind/react';
import { Rating, Typography } from "@material-tailwind/react";
import { FaHeart, FaRegHeart, FaCheckCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from '../hooks/useGlobalContext';
import toast from 'react-hot-toast';

function ProductCard({ data }) {
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const { liked, setLiked } = useGlobalContext();
  const [allRating, setAllRating] = useState(123);
  const [rated, setRated] = useState(4);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || [];
    setLiked(storedLikes);

    const storedSelectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    setSelectedItems(storedSelectedItems);
    const initialCheckedItems = {};
    storedSelectedItems.forEach(item => {
      initialCheckedItems[item.id] = true;
    });
    setCheckedItems(initialCheckedItems);
  }, [setLiked]);

  const handleCheck = (item) => {
    setCheckedItems(prevState => {
      const newCheckedItems = { ...prevState, [item.id]: !prevState[item.id] };
      const newSelectedItems = newCheckedItems[item.id]
        ? [...selectedItems, item]
        : selectedItems.filter(selectedItem => selectedItem.id !== item.id);
      setSelectedItems(newSelectedItems);
      console.log(newCheckedItems);
      localStorage.setItem('selectedItems', JSON.stringify(newSelectedItems));
      toast.success(`Product ${newCheckedItems[item.id] ? 'added to' : 'removed from'} cart`);
      return newCheckedItems;
    });
  }

  const handleLiked = (obj) => {
    setLiked(prevLiked => {
      let updatedLikes;
      if (prevLiked.some(likedItem => likedItem.id === obj.id)) {
        updatedLikes = prevLiked.filter(likedItem => likedItem.id !== obj.id);
      } else {
        updatedLikes = [...prevLiked, obj];
      }
      localStorage.setItem('likes', JSON.stringify(updatedLikes));
      toast.success(`Product ${updatedLikes.some(likedItem => likedItem.id === obj.id) ? 'added to' : 'removed from'} Likes category`);
      return updatedLikes;
    });
  }

  const handleRate = (value) => {
    setRated(value);
    setAllRating(prevRating => prevRating + value);
  }

  return (
    <>
      {data && data.map((obj) => {
        const isLiked = liked.some(likedItem => likedItem.id === obj.id);
        const isChecked = checkedItems[obj.id] || false;
        return (
          <div key={obj.id} className='w-[350px] rounded-lg p-7' style={{ border: `2px solid #EFEFEF` }}>
            <div className='flex object-fill w-full'>
              <div className='w-full relative'>
                <div className='mb-[29px]'>
                  <img className='w-[294px] h-[294px]' src={obj.image} alt={obj.text} />
                  <div className='absolute right-0 top-0'>
                    <button onClick={() => handleLiked(obj)} className="btn btn-circle btn-outline">
                      {isLiked ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-5 font-bold text-blue-gray-500">
                    <Rating value={rated} onChange={(value) => handleRate(value)} />
                    <Typography color="blue-gray" className="text-blue-gray-500 font-semibold">
                      ({allRating}) {/* {rated}.7 */}
                    </Typography>
                  </div>

                  <p className='font-medium text-base leading-[25px] mt-[10px] text-[#1F2533]'>
                    {obj?.text}
                  </p>

                  <div className='flex items-center justify-between mt-3'>
                    <p className='font-semibold text-[28px] text-[#1F2533]'>
                      {obj.price}$
                    </p>
                    <IconButton onClick={() => handleCheck(obj)} className='p-2'>
                      {isChecked ? <FaCheckCircle className='text-[#359740]' size={22} /> : <AiOutlineShoppingCart size={22} />}
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
