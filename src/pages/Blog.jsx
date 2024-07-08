import React from 'react'

function Blog() {
  return (
    <div className="main-container">
      <div className="block_1 h-[251px] bg-[#EAF1EB]  rounded-3xl mt-[32px]">
        <h1 className="text-[#1F2533] text-5xl text-center pt-[65px] font-semibold">
          Welcome to our blog
        </h1>
        <p className="m-auto text-center mt-[12px] w-[560px] text-[#1F2533]">
          Here you can find a lot of interesting and useful information that you
          need in gardening and creating a beautiful garden
        </p>
        <div className="images relative">
          <img
            className="absolute -top-40 right-0"
            src="../assets/png/barg_1.png"
            alt="instagram"
          />
          <img
            className="absolute -top-36 right-0"
            src="../assets/png/barg_2.png"
            alt="instagram"
          />
          <img
            className="absolute left-10 -top-40"
            src="../assets/png/barg_3.png"
            alt="instagram"
          />
          <img
            className="absolute left-0 -top-14"
            src="../assets/png/barg_4.png"
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog