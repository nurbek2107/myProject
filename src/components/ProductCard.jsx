import React, { useState, useEffect } from "react";
import { IconButton } from "@material-tailwind/react";
import { Rating, Typography } from "@material-tailwind/react";
import { FaHeart, FaRegHeart, FaCheckCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from "../hooks/useGlobalContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  const [checkedItems, setCheckedItems] = useState({});
  const { liked, setLiked } = useGlobalContext();
  const [allRating, setAllRating] = useState(123);
  const [rated, setRated] = useState(4);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || [];
    setLiked(storedLikes);
  }, [setLiked]);

  const handleCheck = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleLiked = (id) => {
    setLiked((prevLiked) => {
      let updatedLikes;
      if (prevLiked.includes(id)) {
        updatedLikes = prevLiked.filter((likedId) => likedId !== id);
      } else {
        updatedLikes = [...prevLiked, id];
      }
      localStorage.setItem("likes", JSON.stringify(updatedLikes));
      toast.success(`Your product added to Likes category`);
      return updatedLikes;
    });
  };

  const handleRate = (value) => {
    setRated(value);
    setAllRating((prevRating) => prevRating + value);
  };

  const handleSwitch = (item) => {
    localStorage.setItem("selectedItem", JSON.stringify(item));
  };

  return (
    <>
      {data &&
        data.map((obj) => {
          const isLiked = liked.includes(obj.id);
          return (
            <Link to={`/SinglePage`} key={obj.id}>
              <div
                className="w-[350px] rounded-lg p-7"
                style={{ border: `2px solid #EFEFEF` }}
                onClick={() => handleSwitch(obj)}
              >
                <div className="flex object-fill w-full">
                  <div className="w-full relative">
                    <div className="mb-[29px]">
                      <img
                        className="w-[294px] h-[294px]"
                        src={obj.image}
                        alt={obj.text}
                      />
                      <div className="absolute right-0 top-0">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleLiked(obj.id);
                          }}
                          className="btn btn-circle btn-outline"
                        >
                          {isLiked ? (
                            <FaHeart size={25} />
                          ) : (
                            <FaRegHeart size={25} />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-5 font-bold text-blue-gray-500">
                        <Rating
                          value={rated}
                          onChange={(value) => handleRate(value)}
                        />
                        <Typography
                          color="blue-gray"
                          className="text-blue-gray-500 font-semibold"
                        >
                          ({allRating})
                        </Typography>
                      </div>

                      <p className="font-medium text-base leading-[25px] mt-[10px] text-[#1F2533]">
                        {obj?.text}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <p className="font-semibold text-[28px] text-[#1F2533]">
                          {obj.price}$
                        </p>
                        <IconButton
                          onClick={(e) => {
                            e.preventDefault();
                            handleCheck(obj.id);
                          }}
                          className="p-2"
                        >
                          {checkedItems[obj.id] ? (
                            <FaCheckCircle
                              className="text-[#359740]"
                              size={22}
                            />
                          ) : (
                            <AiOutlineShoppingCart size={22} />
                          )}
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
}

export default ProductCard;
