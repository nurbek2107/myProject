import WhiteBtn from "../components/WhiteBtn";
function Blog() {
  return (
    <div className="main-container mb-[83px]">
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
      <div className="bloc_2 flex items-center gap-5 mt-10 ">
        <label className="input input-bordered flex items-center gap-2 rounded-full w-[825px]  h-[63px] bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow " placeholder="Search" />
        </label>
        <div className="dropdown  z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-white border  hover:bg-white border-white hover:border-white w-[258px] z-50  rounded-full  h-[63px] flex  justify-between"
          >
            <div className=" flex flex-col text-left gap-2">
              <p className="text-xs  ">Dropdown </p>
              Click
            </div>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="#70737C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu  rounded-box z-[1]  p-2 shadow bg-white hover:bg-white border-white hover:border-white w-[258px]"
          >
            <p className="bg-white hover:bg-white border-white hover:border-white text-center mt-1 cursor-pointer p-2  hover:bg-[#3597406e] rounded-sm hover:text-white">
              <a>Item 1</a>
            </p>
            <p className="bg-white hover:bg-white border-white hover:border-white text-center mt-1 cursor-pointer p-2  hover:bg-[#3597406e] rounded-sm hover:text-white">
              <a>Item 2</a>
            </p>
            <p className="bg-white hover:bg-white border-white hover:border-white text-center mt-1 cursor-pointer p-2  hover:bg-[#3597406e] rounded-sm hover:text-white">
              <a>Item 1</a>
            </p>
            <p className="bg-white hover:bg-white border-white hover:border-white text-center mt-1 cursor-pointer p-2  hover:bg-[#3597406e] rounded-sm hover:text-white">
              <a>Item 2</a>
            </p>
          </ul>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="block_3 mt-8">
          <div className=" bg-[#EAF1EB]  rounded-3xl w-[730px] ">
            <div className="flex ">
              <div className="p-8 z-">
                <div className="flex items-center gap-2 ">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM11.7 9.9H9C8.46 9.9 8.1 9.54 8.1 9V4.5C8.1 3.96 8.46 3.6 9 3.6C9.54 3.6 9.9 3.96 9.9 4.5V8.1H11.7C12.24 8.1 12.6 8.46 12.6 9C12.6 9.54 12.24 9.9 11.7 9.9Z"
                      fill="#70737C"
                    />
                  </svg>
                  12.09.2021
                </div>
                <h1 className="text-[#1F2533] text-3xl   font-semibold mt-2">
                  How to plant spinach correctly in winter
                </h1>
                <p className="mt-1 text-[#1f2533cf] mb-5">
                  In most areas, successive sowing can be done from early spring
                  until early winter, but more often during hotter months...
                </p>
                <WhiteBtn className="bg-white" text="Discover" />
              </div>
              <img
                className="w-[394px] h-[300px] mt-2 z-0 "
                src="../assets/png/sabzavot.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex gap-8">
            <div className="bg-[#EAF1EB] rounded-3xl w-[350px] h-[300px] relative mt-8">
              <div className=" z-50">
                <div className="z-10 p-8 relative">
                  <div className="flex items-center gap-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM11.7 9.9H9C8.46 9.9 8.1 9.54 8.1 9V4.5C8.1 3.96 8.46 3.6 9 3.6C9.54 3.6 9.9 3.96 9.9 4.5V8.1H11.7C12.24 8.1 12.6 8.46 12.6 9C12.6 9.54 12.24 9.9 11.7 9.9Z"
                        fill="#70737C"
                      />
                    </svg>
                    12.09.2021
                  </div>
                  <h1 className="text-[#1F2533] text-2xl font-semibold mt-2 mb-4">
                    How to plant spinach correctly in winter
                  </h1>
                  <WhiteBtn className="bg-white" text="Discover" />
                </div>
                <div className="z-0 relative">
                  <img
                    className="w-[200px] h-[140px] mt-2 absolute -top-[71px] right-0"
                    src="../assets/png/uzum.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#EAF1EB] rounded-3xl w-[350px] h-[300px] relative mt-8">
              <div className=" z-50">
                <div className="z-10 p-8 relative">
                  <div className="flex items-center gap-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM11.7 9.9H9C8.46 9.9 8.1 9.54 8.1 9V4.5C8.1 3.96 8.46 3.6 9 3.6C9.54 3.6 9.9 3.96 9.9 4.5V8.1H11.7C12.24 8.1 12.6 8.46 12.6 9C12.6 9.54 12.24 9.9 11.7 9.9Z"
                        fill="#70737C"
                      />
                    </svg>
                    12.09.2021
                  </div>
                  <h1 className="text-[#1F2533] text-2xl font-semibold mt-2 mb-4">
                    How to plant spinach correctly in winter
                  </h1>
                  <WhiteBtn className="bg-white" text="Discover" />
                </div>
                <div className="z-0 relative">
                  <img
                    className="w-[200px] h-[140px] mt-2 absolute -top-[71px] right-0"
                    src="../assets/png/img.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#EAF1EB]  rounded-3xl w-[730px]  mt-8">
            <div className="flex ">
              <div className="p-8 z-">
                <div className="flex items-center gap-2 ">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM11.7 9.9H9C8.46 9.9 8.1 9.54 8.1 9V4.5C8.1 3.96 8.46 3.6 9 3.6C9.54 3.6 9.9 3.96 9.9 4.5V8.1H11.7C12.24 8.1 12.6 8.46 12.6 9C12.6 9.54 12.24 9.9 11.7 9.9Z"
                      fill="#70737C"
                    />
                  </svg>
                  12.09.2021
                </div>
                <h1 className="text-[#1F2533] text-3xl   font-semibold mt-2">
                  How to plant spinach correctly in winter
                </h1>
                <p className="mt-1 text-[#1f2533cf] mb-5">
                  In most areas, successive sowing can be done from early spring
                  until early winter, but more often during hotter months...
                </p>
                <WhiteBtn className="bg-white" text="Discover" />
              </div>
              <img
                className="w-[394px] h-[300px] mt-2 z-0 "
                src="../assets/png/image2.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="bg-[#EAF1EB] rounded-3xl w-[350px] h-[689px] relative mt-8">
              <div className=" z-50">
                <div className="z-10 p-8 relative">
                  <div className="flex items-center gap-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM11.7 9.9H9C8.46 9.9 8.1 9.54 8.1 9V4.5C8.1 3.96 8.46 3.6 9 3.6C9.54 3.6 9.9 3.96 9.9 4.5V8.1H11.7C12.24 8.1 12.6 8.46 12.6 9C12.6 9.54 12.24 9.9 11.7 9.9Z"
                        fill="#70737C"
                      />
                    </svg>
                    12.09.2021
                  </div>
                  <h1 className="text-[#1F2533] text-2xl font-semibold mt-2 mb-4">
                    How to plant spinach correctly in winter
                  </h1>
                  <p className=" mb-4">
                    In most areas, successive sowing can be done from early
                    spring until early winter, but more often during hotter
                    months...
                  </p>
                  <WhiteBtn className="bg-white" text="Discover" />
                </div>
                <div className="z-0 relative">
                  <img
                    className="w-[293px] h-[391px
] mt-2 absolute -top-[120px] right-0"
                    src="../assets/png/img_2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#EAF1EB] rounded-3xl w-[350px] h-[689px] relative mt-8">
              <div className=" z-50">
                <div className="z-10 p-8 relative">
                  <div className="flex items-center gap-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM11.7 9.9H9C8.46 9.9 8.1 9.54 8.1 9V4.5C8.1 3.96 8.46 3.6 9 3.6C9.54 3.6 9.9 3.96 9.9 4.5V8.1H11.7C12.24 8.1 12.6 8.46 12.6 9C12.6 9.54 12.24 9.9 11.7 9.9Z"
                        fill="#70737C"
                      />
                    </svg>
                    12.09.2021
                  </div>
                  <h1 className="text-[#1F2533] text-2xl font-semibold mt-2 mb-4">
                    How to plant spinach correctly in winter
                  </h1>
                  <p className=" mb-4">
                    In most areas, successive sowing can be done from early
                    spring until early winter, but more often during hotter
                    months...
                  </p>
                  <WhiteBtn className="bg-white" text="Discover" />
                </div>
                <div className="z-0 relative">
                  <img
                    className="w-[333px] h-[431px
] mt-2 absolute top-[10px] right-0"
                    src="../assets/png/image-3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="bg-[#EAF1EB] rounded-3xl w-[350px] h-[649px] relative mt-8">
            <div className=" z-20">
              <div className="z-10 p-8 relative">
                <div className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM11.7 9.9H9C8.46 9.9 8.1 9.54 8.1 9V4.5C8.1 3.96 8.46 3.6 9 3.6C9.54 3.6 9.9 3.96 9.9 4.5V8.1H11.7C12.24 8.1 12.6 8.46 12.6 9C12.6 9.54 12.24 9.9 11.7 9.9Z"
                      fill="#70737C"
                    />
                  </svg>
                  12.09.2021
                </div>
                <h1 className="text-[#1F2533] text-2xl font-semibold mt-2 mb-4">
                  How to plant spinach correctly in winter
                </h1>
                <p className=" mb-4">
                  In most areas, successive sowing can be done from early spring
                  until early winter, but more often during hotter months...
                </p>
                <WhiteBtn className="bg-white" text="Discover" />
              </div>
              <div className="z-0 relative">
                <img
                  className="w-[333px] h-[431px
] mt-2 absolute -bottom-[311px] right-0"
                  src="../assets/png/female-gardener-holding-wicker-basket-with-strawberries1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-[#EAF1EB] rounded-3xl w-[350px] h-[300px] relative mt-8">
            <div className=" z-40">
              <div className="z-10 p-8 relative">
                <div className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM11.7 9.9H9C8.46 9.9 8.1 9.54 8.1 9V4.5C8.1 3.96 8.46 3.6 9 3.6C9.54 3.6 9.9 3.96 9.9 4.5V8.1H11.7C12.24 8.1 12.6 8.46 12.6 9C12.6 9.54 12.24 9.9 11.7 9.9Z"
                      fill="#70737C"
                    />
                  </svg>
                  12.09.2021
                </div>
                <h1 className="text-[#1F2533] text-2xl font-semibold mt-2 mb-4">
                  How to plant spinach correctly in winter
                </h1>
                <WhiteBtn className="bg-white" text="Discover" />
              </div>
              <div className="z-0 relative">
                <img
                  className="w-[200px] h-[140px] mt-2 absolute -top-[71px] right-0"
                  src="../assets/png/Ellipse 1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-[#EAF1EB] rounded-3xl w-[350px] h-[689px] relative mt-8">
            <div className=" z-50">
              <div className="z-10 p-8 relative">
                <div className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM11.7 9.9H9C8.46 9.9 8.1 9.54 8.1 9V4.5C8.1 3.96 8.46 3.6 9 3.6C9.54 3.6 9.9 3.96 9.9 4.5V8.1H11.7C12.24 8.1 12.6 8.46 12.6 9C12.6 9.54 12.24 9.9 11.7 9.9Z"
                      fill="#70737C"
                    />
                  </svg>
                  12.09.2021
                </div>
                <h1 className="text-[#1F2533] text-2xl font-semibold mt-2 mb-4">
                  How to plant spinach correctly in winter
                </h1>
                <p className=" mb-4">
                  In most areas, successive sowing can be done from early spring
                  until early winter, but more often during hotter months...
                </p>
                <WhiteBtn className="bg-white" text="Discover" />
              </div>
              <div className="z-0 relative">
                <img
                  className="w-[333px] h-[431px
] mt-2 absolute -top-[126px] right-0"
                  src="../assets/png/young-pretty-woman-feeling.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
